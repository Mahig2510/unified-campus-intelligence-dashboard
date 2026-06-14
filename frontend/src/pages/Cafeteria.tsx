import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { getMenu } from "../services/dashboard";

const Cafeteria = () => {

  const [items, setItems] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const loadMenu =
      async () => {

        try {

          const response =
            await getMenu();

          setItems(
            response.data.menuItems || []
          );

        } catch (error) {

          console.error(error);
        }
      };

    loadMenu();

  }, []);

  const filteredItems =
    items.filter((item) => {

      const value =
        search.toLowerCase();

      return (
        item.itemName
          .toLowerCase()
          .includes(value) ||

        item.category
          .toLowerCase()
          .includes(value) ||

        item.mealType
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
                Cafeteria
              </h2>

              <p className="mt-1 text-slate-500">
                Browse available food items
              </p>

            </div>

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search menu..."
              className="rounded-xl border px-4 py-3 md:w-80"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredItems.map(
            (item) => (

              <div
                key={item._id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-3 flex items-center justify-between">

                  <h3 className="font-semibold text-lg">
                    {item.itemName}
                  </h3>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                    {item.mealType}
                  </span>

                </div>

                <p className="text-slate-600">
                  {item.category}
                </p>

                <p className="mt-3 text-lg font-bold text-green-600">
                  ₹{item.price}
                </p>

                <p className="mt-2 text-sm">
                  {item.available
                    ? "✅ Available"
                    : "❌ Not Available"}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Cafeteria;