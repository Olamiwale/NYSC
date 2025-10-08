import express from "express";
import { createPost, getPosts, deletePost } from "../controllers/postControl";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", protect, getPosts);
router.post("/", protect, createPost);
router.delete("/:id", protect, deletePost);

export default router;
