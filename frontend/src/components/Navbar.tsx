import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const navigate =
    useNavigate();

  const {
  logout,
   user,
} = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const today =
    new Date().toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }
    );

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {today}
          </p>

          <h1 className="mt-1 text-3xl font-bold">
           Welcome Back 👋
          </h1>

          <p className="mt-1 text-lg text-slate-600">
            {user?.name}
          </p>

          <p className="mt-2 text-slate-500">
            Unified Campus Intelligence Dashboard with AI Assistant
          </p>

        </div>

        <div className="flex items-center gap-4">

  <div className="flex items-center gap-3">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
      {user?.name?.charAt(0)?.toUpperCase()}
    </div>

    <div className="hidden md:block">

      <p className="font-semibold text-slate-800">
        {user?.name}
      </p>

      <p className="text-sm text-slate-500">
        {user?.email}
      </p>

    </div>

  </div>

  <button
    onClick={handleLogout}
    className="rounded-xl bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-800"
  >
    Logout
  </button>

</div>

      </div>

    </div>
  );
};

export default Navbar;