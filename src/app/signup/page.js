"use client";
import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setSuccess("");
      setError("❌ Passwords do not match");
      return;
    }

    const newUser = { username, college, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    setError("");
    setSuccess("✅ Account created successfully!");

    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 p-10 md:p-16">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-6">Join us and start your journey!</p>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="College / School"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
              error ? "border-red-500 focus:ring-red-400" : "focus:ring-green-400"
            }`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
          {success && <p className="text-green-600 text-sm font-medium">{success}</p>}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 font-medium hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {/* Right: Image Placeholder */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gray-300 rounded-lg"></div>
         <img
            src="/images/signup.png"
            alt="Environment"
            className="object-cover w-full h-full"
          />
      </div>
    </div>
  );
}