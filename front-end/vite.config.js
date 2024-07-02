import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:4000/api",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
