import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import AssistantChat from "../components/AssistantChat";
import SectionTitle from "../components/SectionTitle";
import Sidebar from "../components/Sidebar";

import {
  getBooks,
  getEvents,
  getMenu,
  getResources,
} from "../services/dashboard";

import {
  BookOpen,
  Calendar,
  Utensils,
  GraduationCap,
} from "lucide-react";

const Dashboard = () => {

  const [books, setBooks] =
    useState<any[]>([]);

  const [events, setEvents] =
    useState<any[]>([]);

  const [menuItems, setMenuItems] =
    useState<any[]>([]);

  const [resources, setResources] =
    useState<any[]>([]);

    const [loading, setLoading] =
  useState(true);

  const navigate = useNavigate();

  useEffect(() => {

    const loadData =
      async () => {

        try {

          const [
            booksRes,
            eventsRes,
            menuRes,
            resourcesRes,
          ] = await Promise.all([
            getBooks(),
            getEvents(),
            getMenu(),
            getResources(),
          ]);

          setBooks(
            booksRes.data.books || []
          );

          setEvents(
            eventsRes.data.events || []
          );

          setMenuItems(
            menuRes.data.menuItems || []
          );

          setResources(
            resourcesRes.data.resources || []
          );

          setLoading(false);

        } catch (error) {

          console.error(error);
        }
      };

    loadData();

  }, []);

  if (loading) {

  return (
    <div className="flex items-center justify-center min-h-screen">
      Loading Dashboard...
    </div>
  );
}

return (
  <div className="flex min-h-screen bg-slate-100">

    <Sidebar />

    <div className="ml-64 flex-1 p-8">

      <div id="dashboard">
        <Navbar />

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">

          <StatCard
  title="Books"
  value={books.length}
  icon={
    <BookOpen
      size={22}
      className="text-blue-600"
    />
  }
/>

<StatCard
  title="Events"
  value={events.length}
  icon={
    <Calendar
      size={22}
      className="text-green-600"
    />
  }
/>

<StatCard
  title="Menu Items"
  value={menuItems.length}
  icon={
    <Utensils
      size={22}
      className="text-orange-600"
    />
  }
/>

<StatCard
  title="Resources"
  value={resources.length}
  icon={
    <GraduationCap
      size={22}
      className="text-purple-600"
    />
  }
/>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

  <div className="rounded-3xl bg-white p-6 shadow-sm">

    <p className="text-sm text-slate-500">
      Next Event
    </p>

    <h3 className="mt-2 text-lg font-bold">
      {events[0]?.title}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      {events[0]
        ? new Date(
            events[0].date
          ).toLocaleDateString()
        : "No upcoming event"}
    </p>

  </div>

  <div className="rounded-3xl bg-white p-6 shadow-sm">

    <p className="text-sm text-slate-500">
      Featured Resource
    </p>

    <h3 className="mt-2 text-lg font-bold">
      {resources[0]?.title}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      {resources[0]?.subject}
    </p>

  </div>

  <div className="rounded-3xl bg-white p-6 shadow-sm">

    <p className="text-sm text-slate-500">
      Available Menu Items
    </p>

    <h3 className="mt-2 text-lg font-bold">
      {menuItems.length}
    </h3>

    <p className="mt-1 text-sm text-slate-500">
      Freshly Available Today
    </p>

  </div>

</div>


<div className="mt-8">
  <AssistantChat />
</div>

        <div id="events">
          <SectionTitle
            title="Upcoming Events"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {events.slice(0, 3).map((event) => (

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

  <p className="text-slate-500">
    📍 {event.venue}
  </p>

  <p className="mt-2 text-sm text-slate-600">
    📅 {new Date(event.date).toLocaleDateString()}
  </p>

</div>
          ))}

        </div>

        <div className="mt-4">

  <button
    onClick={() =>
      navigate("/events")
    }
    className="font-medium text-blue-600 hover:text-blue-800"
  >
    View All Events →
  </button>

</div>

        <div id="library">
         <SectionTitle
           title="Library Books"
         />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {books.slice(0, 3).map((book) => (

            <div
  key={book._id}
  className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>

  <div className="mb-3 flex items-center justify-between">

    <h3 className="font-semibold">
      {book.title}
    </h3>

    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
      {book.category}
    </span>

  </div>

  <p className="text-slate-600">
    {book.author}
  </p>

  <p className="mt-2 text-sm text-green-600">
    Available: {book.availableCopies}
  </p>

</div>
          ))}

        </div>

        <div className="mt-4">

  <button
    onClick={() =>
      navigate("/library")
    }
    className="font-medium text-blue-600 hover:text-blue-800"
  >
    View All Books →
  </button>

</div>

        <div id="cafeteria">
          <SectionTitle
            title="Cafeteria Menu"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {menuItems.slice(0, 3).map((item) => (

            <div
  key={item._id}
  className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>

  <div className="mb-3 flex items-center justify-between">

    <h3 className="font-semibold">
      {item.itemName}
    </h3>

    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
      {item.mealType}
    </span>

  </div>

  <p className="text-2xl font-bold">
    ₹{item.price}
  </p>

  <p className="text-sm text-green-600">
    Available
  </p>

</div>
          ))}

        </div>

        <div className="mt-4">

  <button
    onClick={() =>
      navigate("/cafeteria")
    }
    className="font-medium text-blue-600 hover:text-blue-800"
  >
    View Full Menu →
  </button>

</div>

        <div id="resources">
          <SectionTitle
            title="Academic Resources"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {resources.slice(0, 3).map((resource) => (

              <div
  key={resource._id}
  className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>

  <div className="mb-3 flex items-center justify-between">

    <h3 className="font-semibold">
      {resource.title}
    </h3>

    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
      {resource.resourceType}
    </span>

  </div>

  <p className="text-slate-600">
    {resource.subject}
  </p>

  <p className="mt-2 text-sm text-slate-500">
    Semester {resource.semester}
  </p>

</div>
            )
          )}

        </div>

        <div className="mt-4">

  <button
    onClick={() =>
      navigate("/resources")
    }
    className="font-medium text-blue-600 hover:text-blue-800"
  >
    View All Resources →
  </button>

</div>

      </div>

    </div>
  );
};

export default Dashboard;
