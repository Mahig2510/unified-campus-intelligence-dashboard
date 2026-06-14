import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { getBooks } from "../services/dashboard";

const Library = () => {

  const [books, setBooks] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    const loadBooks =
      async () => {

        try {

          const response =
            await getBooks();

          setBooks(
            response.data.books || []
          );

        } catch (error) {

          console.error(error);
        }
      };

    loadBooks();

  }, []);

  const filteredBooks =
    books.filter((book) => {

      const value =
        search.toLowerCase();

      return (
        book.title
          .toLowerCase()
          .includes(value) ||

        book.author
          .toLowerCase()
          .includes(value) ||

        book.category
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
                Library
              </h2>

              <p className="mt-1 text-slate-500">
                Browse available books
              </p>

            </div>

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search books..."
              className="rounded-xl border px-4 py-3 md:w-80"
            />

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredBooks.map(
            (book) => (

              <div
                key={book._id}
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-3 flex items-center justify-between">

                  <h3 className="font-semibold text-lg">
                    {book.title}
                  </h3>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {book.category}
                  </span>

                </div>

                <p className="text-slate-600">
                  {book.author}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  📍 {book.location}
                </p>

                <p className="mt-2 text-sm font-medium text-green-600">
                  Available Copies:{" "}
                  {book.availableCopies}
                </p>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
};

export default Library;