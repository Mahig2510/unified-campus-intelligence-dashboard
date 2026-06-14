import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import bookRoutes from "./routes/book.routes";

const app = express();

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/books", bookRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    service: "Library MCP",
  });
});

export default app;