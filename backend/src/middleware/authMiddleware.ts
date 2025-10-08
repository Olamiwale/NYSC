import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


const SECRET_KEY = process.env.JWT_SECRET || "secretkey123";

export const protect = (req: any, res: Response, next: NextFunction) => {

  const token = req.headers("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  } 
};





















/*import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = (req: any, res: Response, next: NextFunction) => {

  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: number;
    };
    (req as any).user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};
*/