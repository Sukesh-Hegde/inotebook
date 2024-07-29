import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
const authRouter = express.Router();


authRouter.post(
  "/createuser",
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





// // Create a User using: POST "/api/auth/createUser". No login required
// authRouter.post(
//   "/",
  
//     body("name", "Enter a valid name").isLength({ min: 3 }),
//     body("email", "Enter a valid email").isEmail(),
//     body("password", "Password must be at least 5 characters").isLength({
//       min: 5,
//     }),
  
  
//   async (req, res) => {
//     // If there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//   console.log("recieved");

//     try {
//       // Check whether the user with this email exists already
//       let user = await User.findOne({ email: req.body.email });
//       if (user) {
//         return res
//           .status(400)
//           .json({ error: "Sorry, a user with this email already exists" });
//       }

//       // Create a new user
//       user = await User.create({
//         name: req.body.name,
//         password: req.body.password, 
//         email: req.body.email,
//       });

//       res.json(user);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Some error occurred");
//     }
//   }
// );

// export default authRouter;
