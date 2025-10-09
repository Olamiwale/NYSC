import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";


export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

   //if name or email or password is missing when registering
    if (!name || !email || !password)
    return res.status(400).json({ msg: "All fields are required" });

   //if user already exists. check only the email to confirm the existence
    const exist = await User.findOne({ where: { email } });
    if (exist) return res.status(400).json({ msg: "User already exists" });

   //save password as hash in the database. this is for security purposes
    const hash = await bcrypt.hash(password, 10);

  //create the user in the database
    const user = await User.create({ name, email, password: hash });


    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    res.status(201).json({ msg: "User registered", user });

  } 
  catch (error) 
  { 
    res.status(500).json({ msg: "Server error", error }); 
  } 

};


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
    res.json({ msg: "Login successful", token });
  } 
  
  catch (error) 
  { 
    res.status(500).json({ msg: "Server error", error }); 
  }
};








/*

let users: {id: number; name: string; email: string; password: string } [] = [];

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


*/




