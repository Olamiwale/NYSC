import { Request, Response } from "express";
import { Post } from "../models/post.model";

//Creating new Post
export const createPost = async (req: any, res: Response) => {
  try {
    const { content } = req.body;
    const userId = req.user.id;
    if (!content) return res.status(400).json({ msg: "Content required" });
    const post = await Post.create({ content, userId });
    res.status(201).json(post);
  }
  catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};


//Get all posts created
export const getPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  }
  catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};

//Get all posts created by the authenticated user profile
export const getUserPosts = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const posts = await Post.findAll({ where: { userId } });
    res.status(200).json(posts);
  }
  catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};


//Delete a post created by the authenticated user

export const deletePost = async (req: any, res: Response) => {
  try {
    const postId = Number(req.params.id);
    const userId = req.user.id;
    
    const deleted = await Post.destroy({ where: { id: postId, userId } });
    if (!deleted) return res.status(404).json({ msg: "Post not found or not authorized" });
    return res.json({ msg: "Post deleted" });
  }
  catch (error) {
    res.status(500).json({ msg: "Server error", error });
  }
};











