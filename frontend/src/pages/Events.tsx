import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { getEvents } from "../services/dashboard";

const Events = () => {

  const [events, setEvents] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const loadEvents =
      async () => {

        try {

          const response =
            await getEvents();

          setEvents(
            response.data.events || []
          );

        } catch (error) {

          console.error(error);
        }
      };

    loadEvents();

  }, []);

  const filteredEvents =
    events.filter((event) => {

      const value =
        search.toLowerCase();

      return (
        event.title
          .toLowerCase()
          .includes(value) ||

        event.category
          .toLowerCase()
          .includes(value) ||

        event.organizer
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
                Events
              </h2>

              <p className="mt-1 text-slate-500">
                Explore upcoming campus events
              </p>

            </div>

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search events..."
              className="rounded-xl border px-4 py-3 md:w-80"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredEvents.map(
            (event) => (

              <div
                key={event._id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-3 flex items-center justify-between">

                  <h3 className="font-semibold text-lg">
                    {event.title}
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {event.category}
                  </span>

                </div>

                <p className="text-slate-600">
                  {event.organizer}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  📍 {event.venue}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  📅 {new Date(
                    event.date
                  ).toLocaleDateString()}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Events;
