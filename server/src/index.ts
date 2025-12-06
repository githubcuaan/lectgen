import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

// Using middleware cors to connect Back - Front
app.use(
  cors({
    origin: "http://localhost:5137",
    methods: ["GET", "POST"],
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("fuck nguyen thanh binh");
});

app.listen(PORT, () => {
  console.log("ok dang nghe");
});
