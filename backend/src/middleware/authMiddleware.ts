import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Ensure dotenv is loaded by the app before this module is imported
const SECRET_KEY = process.env.JWT_SECRET as string;
if (!SECRET_KEY) throw new Error('JWT_SECRET environment variable is not set');

export const protect = (req: any, res: Response, next: NextFunction) => {

  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  } 
};