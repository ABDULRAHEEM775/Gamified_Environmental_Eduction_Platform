"use client";
import React from "react";

const weeklyQuizzes = [
  {
    id: 1,
    title: "JavaScript Basics Quiz",
    description: "Test your knowledge of JavaScript fundamentals.",
    points: 50,
    link: "#",
  },
  {
    id: 2,
    title: "React Weekly Challenge",
    description: "Answer tricky React questions about hooks and state.",
    points: 75,
    link: "#",
  },
  {
    id: 3,
    title: "Web Dev Trivia",
    description: "Fun trivia covering HTML, CSS, and Web APIs.",
    points: 40,
    link: "#",
  },
];

const hackathons = [
  {
    id: 1,
    title: "AI Mini Hackathon",
    description: "Build a small AI-powered project in 48 hours.",
    points: 200,
    link: "#",
  },
  {
    id: 2,
    title: "Frontend UI Challenge",
    description: "Create a beautiful landing page from scratch.",
    points: 150,
    link: "#",
  },
  {
    id: 3,
    title: "Full-Stack Hackathon",
    description: "Develop a MERN stack app in one week.",
    points: 300,
    link: "#",
  },
];

export default function QuestsPage() {
  return (
    <div className="flex min-h-screen">
      {/* ===== Left Sidebar ===== */}
      <aside className="w-56 bg-white  p-4 flex flex-col items-start fixed top-0 left-0 h-screen">
        <h1 className="text-2xl font-bold text-green-600 mb-6">Gameified</h1>
        <nav className="flex flex-col gap-4 w-full">
          <a
            href="/landing"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            🏠 Learn
          </a>
          <a
            href="/diy"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            🛠️ DIY
          </a>
          <a
            href="/leaderboards"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            🏆 Leaderboards
          </a>
          <a
            href="/quests"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold"
          >
            🎯 Quests
          </a>
          <a
            href="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            👤 Profile
          </a>
          <a
            href="/shop"
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            🛒 Shop
          </a>
          
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 ml-56 min-h-screen overflow-y-auto p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Quests</h2>

        {/* Weekly Quizzes */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            📝 Weekly Quizzes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white rounded-xl shadow-md border p-5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    {quiz.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    🎯 Earn {quiz.points} XP
                  </p>
                </div>
                <a
                  href={quiz.link}
                  className="inline-block text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Play Quiz
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Hackathons */}
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            💻 Hackathons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hack) => (
              <div
                key={hack.id}
                className="bg-white rounded-xl shadow-md border p-5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    {hack.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{hack.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    🎯 Earn {hack.points} XP
                  </p>
                </div>
                <a
                  href={hack.link}
                  className="inline-block text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Join Hackathon
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
