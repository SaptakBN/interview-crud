import express from "express";
import {
  createPost,
  getApprovedPosts,
  approvePost,
  getAllPosts,
  editPost,
  deletePost,
} from "../controllers/blog.controller";
import { authMiddleware, adminMiddleware } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", getAllPosts);
router.get("/approved", getApprovedPosts);
router.put("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);
router.post("/create", authMiddleware, createPost);
router.patch("/admin/:id", authMiddleware, adminMiddleware, approvePost);

export default router;
