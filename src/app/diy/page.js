"use client";
import React from "react";

const diyProjects = [
  {
    id: 1,
    title: "DIY Paper Lamp",
    video: "https://www.youtube.com/embed/A8mYp48g9vM?si=Oof8QlHROLjGoaBy",
  },
  {
    id: 2,
    title: "DIY Mini Solar Car",
    video: "https://www.youtube.com/embed/75-x7Rx_n9g?si=Cym4kS2fFr7bbkLT",
  },
  {
    id: 3,
    title: "DIY Bottle Rocket",
    video: "https://www.youtube.com/embed/wMI5JaTy0Mg?si=5jkuOIc9yO_Z6D3x",
  },
];

export default function DIYPage() {
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
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold"
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
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
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
        <h2 className="text-2xl font-bold text-green-600 mb-6">DIY Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diyProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border"
            >
              <div className="aspect-video">
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
