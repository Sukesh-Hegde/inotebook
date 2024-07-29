import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
const authRouter = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create a User using: POST "/api/auth/createUser". No login required
authRouter.post(
  "/createuser",

  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password must be at least 5 characters").isLength({
    min: 5,
  }),

  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }
      //hashing password
      const pass = req.body.password;
      const hashPassword = await bcrypt.hash(pass, 12);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: hashPassword,
        email: req.body.email,
      });
      if (user) {
        // Create token.
        const token = jwt.sign(
          {
            userID: user._id,
            email: user.email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        //  Send token.
        return res.status(200).send({ token });
      }

      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Authenticate a User using: POST "/api/auth/login". No login required
authRouter.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const token = jwt.sign(
        {
          userID: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      //  Send token.
      return res.status(200).send({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default authRouter;
