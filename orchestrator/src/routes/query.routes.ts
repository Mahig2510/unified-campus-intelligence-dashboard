import { Router } from "express";

import {
  routeQuery,
} from "../controllers/query.controller";

const router = Router();

router.post(
  "/query",
  routeQuery
);

export default router;