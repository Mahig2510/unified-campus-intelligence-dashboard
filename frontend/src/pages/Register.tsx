import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import { registerUser } from "../services/auth";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: FormEvent
  ) => {
    e.preventDefault();

    try {
      await registerUser({
        name,
        email,
        password,
      });

      navigate("/");
    } catch (error: any) {
      setError(
        error?.response?.data
          ?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen">

      <div className="hidden md:flex md:w-1/2 bg-slate-900 text-white p-12 flex-col justify-center">

        <h1 className="text-5xl font-bold leading-tight">
          Unified Campus Intelligence Dashboard
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Create your account and
          access campus resources,
          events, cafeteria services,
          academic content, and the
          AI-powered campus assistant.
        </p>

      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-slate-100">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Register
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border p-3"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border p-3"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border p-3"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 p-3 text-white"
            >
              Create Account
            </button>

          </form>

          {error && (
            <p className="mt-4 text-center text-red-500">
              {error}
            </p>
          )}

          <p className="mt-6 text-center text-sm">

            Already have an account?

            <Link
              to="/"
              className="ml-2 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;