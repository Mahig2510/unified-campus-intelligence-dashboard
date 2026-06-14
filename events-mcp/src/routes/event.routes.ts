import { Router } from "express";

import {
  createEvent,
  getAllEvents,
  getEventById,
  searchEvents,
  registerForEvent,
  cancelRegistration,
  getEventRegistrations,
  getUserRegistrations,
} from "../controllers/event.controller";

const router = Router();

router.post("/", createEvent);

router.post("/register", registerForEvent);

router.post("/cancel-registration", cancelRegistration);

router.get("/:eventId/registrations", getEventRegistrations);

router.get("/user/:userId", getUserRegistrations);

router.get("/", getAllEvents);

router.get("/search", searchEvents);

router.get("/:id", getEventById);

export default router;