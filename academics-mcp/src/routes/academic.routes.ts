import { Router } from "express";

import {
  createAcademicResource,
  getAcademicResources,
  getAcademicResourceById,
  updateAcademicResource,
  deleteAcademicResource,
  searchAcademicResources,
  resourcesBySemester,
  resourcesByType,
  academicAnalytics,
} from "../controllers/academic.controller";

const router = Router();

router.post("/", createAcademicResource);

router.get("/", getAcademicResources);

router.get("/search", searchAcademicResources);

router.get("/semester/:semester", resourcesBySemester);

router.get("/type/:type", resourcesByType);

router.get("/analytics", academicAnalytics);

router.get("/:id", getAcademicResourceById);

router.put("/:id", updateAcademicResource);

router.delete("/:id", deleteAcademicResource);

export default router;