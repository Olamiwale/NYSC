import express from "express";
import { register, login } from "../controllers/authControl";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
