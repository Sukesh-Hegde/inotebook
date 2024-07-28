import express from "express";

const noteRouter = express.Router();

noteRouter.get("/", (req, res, next) => {
  const obj = {
    a: "thios",
    number: 34,
  };
  console.log(req.body);
  res.json(obj);
});

export default noteRouter;
