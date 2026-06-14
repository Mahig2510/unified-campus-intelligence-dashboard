import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import academicRoutes from "./routes/academic.routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/resources", academicRoutes);
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    service: "Academics MCP",
  });
});

export default app;