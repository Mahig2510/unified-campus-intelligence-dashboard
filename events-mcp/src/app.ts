import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import eventRoutes from "./routes/event.routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/events", eventRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    service: "Events MCP",
  });
});

export default app;