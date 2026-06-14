import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { getResources } from "../services/dashboard";

const Resources = () => {

  const [resources, setResources] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const loadResources =
      async () => {

        try {

          const response =
            await getResources();

          setResources(
            response.data.resources || []
          );

        } catch (error) {

          console.error(error);
        }
      };

    loadResources();

  }, []);

  const filteredResources =
    resources.filter((resource) => {

      const value =
        search.toLowerCase();

      return (
        resource.title
          .toLowerCase()
          .includes(value) ||

        resource.subject
          .toLowerCase()
          .includes(value) ||

        resource.resourceType
          .toLowerCase()
          .includes(value)
      );
    });

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="ml-64 flex-1 p-8">

        <Navbar />

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                Academic Resources
              </h2>

              <p className="mt-1 text-slate-500">
                Notes, PYQs, assignments and study material
              </p>

            </div>

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search resources..."
              className="rounded-xl border px-4 py-3 md:w-80"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredResources.map(
            (resource) => (

              <div
                key={resource._id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-3 flex items-center justify-between">

                  <h3 className="font-semibold text-lg">
                    {resource.title}
                  </h3>

                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {resource.resourceType}
                  </span>

                </div>

                <p className="text-slate-600">
                  {resource.subject}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  Semester {resource.semester}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {resource.description}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Resources;