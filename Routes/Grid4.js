import express from "express";
import Grid4 from "../Schemas/grid4.js";
const app = express.Router();

app.get("/", (req, res) => {
  Grid4.find({}, (err, data) => {
    res.status(200).send(data);
  });
});

app.post("/", (req, res) => {
  const { player, seconds, minutes, hours, moves,theme } = req.body;
  let time = new Grid4({
    player,
    seconds,
    minutes,
    hours,
    moves,
    theme
  });
  time.save().then(res.status(201).send("Data was saved successfully"));
});

export default app;
