import app from "./app";




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));










/*
import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let posts: { id: number; content: string } [] = [];
let idCounter = 1;


app.post("/post", (req: Request, res: Response) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({msg: "content required"});
    const newPost = {id: idCounter++, content};
    posts.push(newPost);
    res.status(201).json(newPost); 
});



app.get("/posts", (req: Request, res: Response) => {
  res.status(200).json(posts);    
});



app.delete("/post/:id", (req: Request, res: Response) => {
  const postId = Number(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.json({ msg: "Post deleted", posts });
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/