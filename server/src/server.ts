import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.routes";
import postRoutes from "./routes/blog.routes";

dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api/blog", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
