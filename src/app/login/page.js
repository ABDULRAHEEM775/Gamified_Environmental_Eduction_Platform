
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (
      user &&
      (user.email === email || user.fullName === email) &&
      user.password === password
    ) {
      setError("");
      setSuccess("✅ Login successful!");

      setTimeout(() => {
        window.location.href = "/landing";
      }, 1000);
    } else {
      setSuccess("");
      setError("❌ Invalid username/email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100 px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-green-200">
        {/* Eco Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
            🌱
          </div>
          <h2 className="text-3xl font-extrabold text-green-800 mt-4">Welcome Back</h2>
          <p className="text-green-600 text-sm mt-1">Log in to continue your eco journey</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email or username"
            className="border border-green-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="border border-green-200 rounded-xl px-4 py-3 text-base w-full focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm placeholder-gray-400 pr-24"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="#"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-green-500 hover:text-green-700 transition"
              style={{ letterSpacing: "1px" }}
            >
              FORGOT?
            </a>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          {success && <p className="text-green-700 text-sm font-medium">{success}</p>}

          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 rounded-xl w-full mt-2 shadow-md transition"
            style={{ letterSpacing: "1px" }}
          >
            LOG IN
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
