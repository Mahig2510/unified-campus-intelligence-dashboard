import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mcpRoutes from "./routes/mcp.routes";
import queryRoutes from "./routes/query.routes";
import aiRoutes from "./routes/ai.routes";
import authRoutes from "./routes/auth.routes";
import assistantRoutes
from "./routes/assistant.routes";
import { notFound }
from "./middleware/notFound";

import { errorHandler }
from "./middleware/errorHandler";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", mcpRoutes);
app.use("/api", queryRoutes);
app.use(
  "/api",
  aiRoutes
);
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api",
  assistantRoutes
);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    service: "CampusIQ Orchestrator",
  });
});
app.use(notFound);
app.use(errorHandler);
app.get("/test-academics", async (_req, res) => {
  const axios = require("axios");

  const response = await axios.get(
    "https://academics-mcp.onrender.com/api/resources"
  );

  res.json(response.data);
});

export default app;