import express from "express";
import {
  createPost,
  getApprovedPosts,
  approvePost,
  getPendingPosts,
  editPost,
  deletePost,
  getPost,
} from "../controllers/blog.controller";
import { authMiddleware, adminMiddleware } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", authMiddleware, getApprovedPosts);
router.get("/pending", authMiddleware, adminMiddleware, getPendingPosts);
router.get("/:id", authMiddleware, getPost);
router.put("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);
router.post("/create", authMiddleware, createPost);
router.patch("/admin/:id", authMiddleware, adminMiddleware, approvePost);

export default router;
