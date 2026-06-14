import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Utensils,
  GraduationCap,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const navItem =
    ({ isActive }: { isActive: boolean }) =>
      `mb-2 flex w-full items-center gap-3 rounded-xl p-3 transition ${
        isActive
          ? "bg-blue-600 text-white"
          : "text-slate-700 hover:bg-slate-100"
      }`;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h2 className="text-xl font-bold">
          Unified Campus
        </h2>

        <p className="text-sm text-slate-500">
          AI Assistant
        </p>

      </div>

      <nav className="flex-1 p-4">

        <NavLink
          to="/dashboard"
          className={navItem}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/library"
          className={navItem}
        >
          <BookOpen size={18} />
          Library
        </NavLink>

        <NavLink
          to="/events"
          className={navItem}
        >
          <Calendar size={18} />
          Events
        </NavLink>

        <NavLink
          to="/cafeteria"
          className={navItem}
        >
          <Utensils size={18} />
          Cafeteria
        </NavLink>

        <NavLink
          to="/resources"
          className={navItem}
        >
          <GraduationCap size={18} />
          Resources
        </NavLink>

      </nav>

      <div className="border-t p-4">

        <div>

  <p className="text-sm font-semibold">
    CampusIQ v1.0
  </p>

  <p className="text-xs text-slate-400">
    Built by Mahi Yadav
  </p>

</div>

      </div>

    </aside>
  );
};

export default Sidebar;