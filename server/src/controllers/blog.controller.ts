import { Response, NextFunction } from "express";
import Blog from "../models/blog";
import { AuthRequest } from "../middleware/auth.middleware";

// Create a new blog blog
export const createPost = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content, author: req.user?._id });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

// Approve a blog blog (admin only)
export const approvePost = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  console.log("asdasd");
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    blog.status = "approved";
    await blog.save();
    res.json({ message: "Blog approved" });
  } catch (error) {
    next(error);
  }
};

export const editPost = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    blog.title = req.body.title;
    blog.content = req.body.content;

    await blog.save();
    res.json({ message: "Blog edited successfully" });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    await Blog.deleteOne({ _id: blog._id });
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getApprovedPosts = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blogs = await Blog.find({ status: "approved" })
      .populate({ path: "author", select: "-password" })
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getPendingPosts = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blogs = await Blog.find({ status: "pending" })
      .populate({ path: "author", select: "-password" })
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getPost = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id).populate({ path: "author", select: "-password" });
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json(blog);
  } catch (error) {
    next(error);
  }
};
