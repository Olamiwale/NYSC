import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";


//user registration controller
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password)
    return res.status(400).json({ msg: "All fields are required" });

    const exist = await User.findOne({ where: { email } });
    if (exist) return res.status(400).json({ msg: "User already exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hash });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });
    res.status(201).json({ msg: "User registered", token, user });
  } 
  catch (error) 
  { 
    res.status(500).json({ msg: "Server error", error }); 
  } 

};


//user login controller
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

//user logout controller
export const logout = async (req: Request, res: Response) => {
  try {
    res.json({ msg: "Logout successful" });
  }
  catch (error)
  {
    res.status(500).json({ msg: "Server error", error });
  }
};






