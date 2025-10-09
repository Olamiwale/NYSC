import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/post.routes";
import authRoutes from "./routes/auth.routes";
import { connectDB } from "./config/db";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);


export default app;