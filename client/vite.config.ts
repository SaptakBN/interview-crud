import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";
import tailwindcss from "@tailwindcss/vite";

config();

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  define: {
    "process.env": process.env,
  },
});
