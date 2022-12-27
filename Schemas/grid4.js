import mongoose from "mongoose";
const { Schema } = mongoose;

const grid4 = new Schema({
  player: {
    type: "string",
    required: true,
  },
  seconds: {
    type: "number",
    required: true,
  },
  minutes: {
    type: "number",
    required: true,
  },
  hours: {
    type: "number",
    required: true,
  },
  moves: {
    type: "number",
    required: true,
  },
  theme: {
    type: "string",
    required: true,
  },
});

export default mongoose.model("Grid4", grid4);
