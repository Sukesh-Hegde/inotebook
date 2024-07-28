import express from "express";
import User from "../models/User.js";
const authRouter = express.Router();
import { body, validationResult } from "express-validator";

authRouter.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid name").isEmail(),
    body("password", "password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a unique value for email",
          message: err.message,
        });
      });

  }
);

export default authRouter;
