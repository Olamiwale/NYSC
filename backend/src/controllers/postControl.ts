import { Request, Response } from "express";

let posts: { id: number; content: string }[] = [];
let idCounter = 1;



export const createPost = (req: Request, res: Response) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ msg: "Content required" });
  const newPost = { id: idCounter++, content };
  posts.push(newPost);
  res.status(201).json(newPost);
};




export const getPosts = (_req: Request, res: Response) => {
  res.status(200).json(posts);
};

export const deletePost = (req: Request, res: Response) => {
  const postId = Number(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.json({ msg: "Post deleted", posts });
};
