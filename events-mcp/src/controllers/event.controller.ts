import { Request, Response } from "express";
import Event from "../models/Event";
import EventRegistration from "../models/EventRegistration";

export const createEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create event",
    });
  }
};

export const getAllEvents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const events = await Event.find().sort({
      date: 1,
    });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
    });
  }
};

export const getEventById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const event = await Event.findById(
      req.params.id
    );

    if (!event) {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch event",
    });
  }
};

export const searchEvents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keyword = req.query.keyword as string;

    const events = await Event.find({
      title: {
        $regex: keyword,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
};

export const registerForEvent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { eventId, userId } = req.body;

    const event = await Event.findById(eventId);

    if (!event) {
      res.status(404).json({
        success: false,
        message: "Event not found",
      });
      return;
    }

    const existingRegistration =
      await EventRegistration.findOne({
        eventId,
        userId,
        status: "Registered",
      });

    if (existingRegistration) {
      res.status(400).json({
        success: false,
        message:
          "Already registered for this event",
      });
      return;
    }

    const registration =
      await EventRegistration.create({
        eventId,
        userId,
      });

    res.status(201).json({
      success: true,
      registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to register for event",
    });
  }
};

export const cancelRegistration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { registrationId } = req.body;

    const registration =
      await EventRegistration.findById(
        registrationId
      );

    if (!registration) {
      res.status(404).json({
        success: false,
        message: "Registration not found",
      });
      return;
    }

    registration.status = "Cancelled";

    await registration.save();

    res.status(200).json({
      success: true,
      message:
        "Registration cancelled successfully",
      registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to cancel registration",
    });
  }
};

export const getEventRegistrations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const registrations =
      await EventRegistration.find({
        eventId: req.params.eventId,
      })
        .populate("userId", "name email")
        .populate("eventId", "title");

    res.status(200).json({
      success: true,
      count: registrations.length,
      registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch registrations",
    });
  }
};

export const getUserRegistrations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const registrations =
      await EventRegistration.find({
        userId: req.params.userId,
        status: "Registered",
      }).populate("eventId");

    res.status(200).json({
      success: true,
      count: registrations.length,
      registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch user registrations",
    });
  }
};