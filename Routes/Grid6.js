import express from "express";
import Grid6 from "../Schemas/grid6.js";
const app = express.Router();

app.get("/", (req, res) => {
  Grid6.find({}, (err, data) => {
    res.status(200).send(data);
  });
});

app.post("/", (req, res) => {
  const { player, seconds, minutes, hours, moves } = req.body;
  let time = new Grid6({
    player,
    seconds,
    minutes,
    hours,
    moves,
  });
  time.save().then(res.status(201).send("Data was saved successfully"));
});

export default app;
