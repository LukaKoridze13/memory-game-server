import express from "express";
import User from "../Schemas/user.js";
const app = express.Router();

app.get("/", (req, res) => {
  User.find({}, (err, data) => {
    res.status(200).send(data);
  });
});

app.get("/:user", (req, res) => {
  User.find({user:req.params.user}, (err, data) => {
    res.status(200).send(data);
  });
});
app.post("/", (req, res) => {
  const { user, password } = req.body;
  let time = new User({
    user,
    password,
    date: new Date(),
  });
  time.save().then(res.status(201).send("User registered successfully"));
});

export default app;
