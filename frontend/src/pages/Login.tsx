import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

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
      const response =
        await loginUser({
          email,
          password,
        });
        console.log(response.data);

      login(
  response.data.accessToken,
  response.data.user
);
      navigate("/dashboard");
    } catch (error: any) {
      setError(
        error?.response?.data
          ?.message ||
          "Login Failed"
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
          AI-powered platform that
          intelligently connects
          Library, Events,
          Cafeteria and Academic
          services through a
          unified campus
          experience.
        </p>

      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-slate-100">

        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Login
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

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
              Login
            </button>

          </form>

          {error && (
            <p className="mt-4 text-center text-red-500">
              {error}
            </p>
          )}

          <p className="mt-6 text-center text-sm">

            Don't have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;