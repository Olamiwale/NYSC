import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


let users: { 
    id: number; 
    name: string; 
    email: string; 
    password: string } [] = [];

let userIdCounter = 1;


export const register = (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) 
        return res.status(400).json({ msg: "All fields are required" });
    

    const exist = users.find((u) => u.email === email);
    if (exist) return res.status(400).json({ msg: "User already exists" });


  const hash = bcrypt.hashSync(password, 10);
  const user = { id: userIdCounter++, name, email, password: hash };
  users.push(user);
  res.status(201).json({ msg: "User registered", user });
}





export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });


  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(400).json({ msg: "Invalid credentials" });


  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
  res.json({ msg: "Login successful", token });
};







