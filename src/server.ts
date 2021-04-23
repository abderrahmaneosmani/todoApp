import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.SERVER_PORT;
app.get("/", (req, res) => {
  res.send("hello word");
});
app.listen(PORT, () => console.log(`application running on  ${PORT}`));