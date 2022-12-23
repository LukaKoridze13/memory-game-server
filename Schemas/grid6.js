import mongoose from "mongoose";
const { Schema } = mongoose;

const grid6 = new Schema({
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
});

export default mongoose.model("Grid6", grid6);
