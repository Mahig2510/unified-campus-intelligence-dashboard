import { Request, Response } from "express";

import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
  searchResources,
  getResourcesBySemester,
  getResourcesByType,
  getAcademicAnalytics,
} from "../services/academic.service";

export const createAcademicResource = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const resource = await createResource(
      req.body
    );

    res.status(201).json({
      success: true,
      resource,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to create resource",
    });
  }
};

export const getAcademicResources =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const resources =
        await getAllResources();

      res.status(200).json({
        success: true,
        count: resources.length,
        resources,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch resources",
      });
    }
  };

export const getAcademicResourceById =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const resource =
        await getResourceById(
          req.params.id as string
        );

      if (!resource) {
        res.status(404).json({
          success: false,
          message:
            "Resource not found",
        });
        return;
      }

      res.status(200).json({
        success: true,
        resource,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch resource",
      });
    }
  };

export const updateAcademicResource =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const resource =
        await updateResource(
          req.params.id as string,
          req.body
        );

      res.status(200).json({
        success: true,
        resource,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to update resource",
      });
    }
  };

export const deleteAcademicResource =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      await deleteResource(
        req.params.id as string
      );

      res.status(200).json({
        success: true,
        message:
          "Resource deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to delete resource",
      });
    }
  };

export const searchAcademicResources =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const keyword =
        req.query.keyword as string;

      const resources =
        await searchResources(
          keyword
        );

      res.status(200).json({
        success: true,
        count: resources.length,
        resources,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Search failed",
      });
    }
  };

export const resourcesBySemester =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const semester = Number(
        req.params.semester
      );

      const resources =
        await getResourcesBySemester(
          semester
        );

      res.status(200).json({
        success: true,
        count: resources.length,
        resources,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch semester resources",
      });
    }
  };

export const resourcesByType =
  async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const resources =
        await getResourcesByType(
          req.params.type as string
        );

      res.status(200).json({
        success: true,
        count: resources.length,
        resources,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch resources",
      });
    }
  };

export const academicAnalytics =
  async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const analytics =
        await getAcademicAnalytics();

      res.status(200).json({
        success: true,
        analytics,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          "Failed to fetch analytics",
      });
    }
  };