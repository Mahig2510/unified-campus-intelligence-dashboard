import AcademicResource from "../models/AcademicResource";

export const createResource = async (
  data: any
) => {
  return await AcademicResource.create(
    data
  );
};

export const getAllResources =
  async () => {
    return await AcademicResource.find();
  };

export const getResourceById =
  async (id: string) => {
    return await AcademicResource.findById(
      id
    );
  };

export const updateResource =
  async (
    id: string,
    data: any
  ) => {
    return await AcademicResource.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true,
      }
    );
  };

export const deleteResource =
  async (id: string) => {
    return await AcademicResource.findByIdAndDelete(
      id
    );
  };

export const searchResources =
  async (keyword: string) => {
    return await AcademicResource.find({
      $or: [
        {
          title: {
            $regex: keyword,
            $options: "i",
          },
        },
        {
          subject: {
            $regex: keyword,
            $options: "i",
          },
        },
      ],
    });
  };

export const getResourcesBySemester =
  async (
    semester: number
  ) => {
    return await AcademicResource.find({
      semester,
    });
  };

export const getResourcesByType =
  async (
    resourceType: string
  ) => {
    return await AcademicResource.find({
      resourceType,
    });
  };

export const getAcademicAnalytics =
  async () => {
    const totalResources =
      await AcademicResource.countDocuments();

    const notesCount =
      await AcademicResource.countDocuments(
        {
          resourceType: "Notes",
        }
      );

    const pyqCount =
      await AcademicResource.countDocuments(
        {
          resourceType: "PYQ",
        }
      );

    const assignmentCount =
      await AcademicResource.countDocuments(
        {
          resourceType:
            "Assignment",
        }
      );

    return {
      totalResources,
      notesCount,
      pyqCount,
      assignmentCount,
    };
  };