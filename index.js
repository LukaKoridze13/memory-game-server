import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Grid4 from "./Routes/Grid4.js";
import Grid6 from "./Routes/Grid6.js";
import users from './Routes/User.js'
dotenv.config();
const database = process.env.DATABASE;
const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

mongoose.connect(database, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Database");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use("/grid4", Grid4);
app.use("/grid6", Grid6);
app.use("/users",users)