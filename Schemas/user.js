import mongoose from "mongoose";
const { Schema } = mongoose;

const user = new Schema({
  user: String,
  password: String,
  date: Date,
});

export default mongoose.model("MemoryGame-Users", user);
