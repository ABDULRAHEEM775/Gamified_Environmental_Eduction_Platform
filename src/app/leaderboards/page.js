"use client";
import React, { useState } from "react";

const allUsers = [
  { id: 1, name: "You", school: "ABC College", points: 950 },
  { id: 2, name: "Ananya", school: "ABC College", points: 870 },
  { id: 3, name: "Ravi", school: "XYZ School", points: 820 },
  { id: 4, name: "Priya", school: "ABC College", points: 790 },
  { id: 5, name: "Karthik", school: "LMN School", points: 760 },
  { id: 6, name: "Sneha", school: "XYZ School", points: 740 },
  { id: 7, name: "Vikram", school: "LMN School", points: 710 },
  { id: 8, name: "Ayesha", school: "ABC College", points: 690 },
  { id: 9, name: "Manoj", school: "XYZ School", points: 670 },
  { id: 10, name: "Divya", school: "LMN School", points: 650 },
];

// Avatar generator (DiceBear)
const getAvatar = (name) =>
  `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(name)}`;

// Medal emojis
const getMedal = (rank) => {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return rank;
};

export default function LeaderboardPage() {
  const [filters, setFilters] = useState({
    all: true,
    myCollege: false,
    mySchool: false,
  });

  const currentUser = allUsers.find((u) => u.name === "You");

  // filtering
  let filteredUsers = [...allUsers];
  if (!filters.all) {
    filteredUsers = allUsers.filter((user) => {
      if (filters.myCollege && user.school === currentUser.school) return true;
      if (filters.mySchool && user.school.includes("School")) return true;
      return false;
    });
  }

  // sort by points
  filteredUsers.sort((a, b) => b.points - a.points);

  // get top score for progress bar
  const topScore = filteredUsers[0]?.points || 1;

  return (
    <div className="flex min-h-screen">
      {/* ===== Sidebar ===== */}
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
            href="/leaderboard"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold"
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
      <main className="flex-1 ml-56 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Leaderboard 🏆
        </h2>

        {/* Filters */}
        <div className="mb-6 flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.all}
              onChange={() =>
                setFilters({ all: true, myCollege: false, mySchool: false })
              }
            />
            All
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.myCollege}
              onChange={() =>
                setFilters({
                  all: false,
                  myCollege: !filters.myCollege,
                  mySchool: false,
                })
              }
            />
            My College
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.mySchool}
              onChange={() =>
                setFilters({
                  all: false,
                  myCollege: false,
                  mySchool: !filters.mySchool,
                })
              }
            />
            My School
          </label>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="p-4">Rank</th>
                <th className="p-4">Name</th>
                <th className="p-4">School/College</th>
                <th className="p-4">Points</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-t ${
                    user.name === "You"
                      ? "bg-green-50 font-bold"
                      : index < 3
                      ? "bg-yellow-50"
                      : "bg-white"
                  }`}
                >
                  {/* Rank with Medal */}
                  <td className="p-4 text-xl">{getMedal(index + 1)}</td>

                  {/* Avatar + Name */}
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={getAvatar(user.name)}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border"
                    />
                    {user.name}
                  </td>

                  {/* School */}
                  <td className="p-4">{user.school}</td>

                  {/* Points with progress bar */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span>{user.points}</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-green-500 h-2"
                          style={{
                            width: `${(user.points / topScore) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
