import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "client", "public");

  // Serve build assets if they exist
  const buildPath = path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(buildPath));
  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = process.env.NODE_ENV === "production" 
      ? path.join(buildPath, "index.html")
      : path.join(buildPath, "index.html"); // Fallback to build
    res.sendFile(indexPath);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
