"use client";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [media, setMedia] = useState([]);

  // Load media from localStorage
  useEffect(() => {
    const storedMedia = JSON.parse(localStorage.getItem("media")) || [];
    setMedia(storedMedia);
  }, []);

  // Handle file upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newMedia = [...media, reader.result];
        setMedia(newMedia);
        localStorage.setItem("media", JSON.stringify(newMedia));
      };
      reader.readAsDataURL(file);
    });
  };

  // Delete media
  const handleDelete = (index) => {
    const newMedia = media.filter((_, i) => i !== index);
    setMedia(newMedia);
    localStorage.setItem("media", JSON.stringify(newMedia));
  };

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
            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-green-50"
          >
            🎯 Quests
          </a>
          <a
            href="/profile"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold"
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
      <main className="flex-1 p-6 bg-gray-50 ml-56">
        {/* Profile Header */}
        <div className="flex items-center gap-6 bg-white shadow p-6 rounded-lg mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-300 text-3xl font-bold rounded-full">
            P
          </div>
          <div>
            <h1 className="text-2xl font-bold">Guest User</h1>
            <p className="text-gray-600">guest@example.com</p>
            <p className="text-gray-600">+91 9876543210</p>
            <p className="text-gray-600">ABC Engineering College</p>
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/guest_insta"
                className="text-blue-600"
              >
                @guest_insta
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/guestuser" className="text-blue-600">
                github.com/guestuser
              </a>
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 text-center bg-white shadow rounded-lg p-6 mb-6">
          <div>
            <p className="text-xl font-bold">1120</p>
            <p className="text-gray-600">Points</p>
          </div>
          <div>
            <p className="text-xl font-bold">7</p>
            <p className="text-gray-600">Plants Planted</p>
          </div>
          <div>
            <p className="text-xl font-bold">2</p>
            <p className="text-gray-600">Hackathon Wins</p>
          </div>
        </div>

        {/* My Media Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">My Media</h2>

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* + Button */}
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-2xl rounded-full shadow hover:bg-blue-600 mb-4"
          >
            +
          </button>

          {media.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No media uploaded yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {media.map((item, index) => (
                <div key={index} className="relative group">
                  {item.startsWith("data:image") ? (
                    <img
                      src={item}
                      alt={`media-${index}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={item}
                      controls
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-80 hover:opacity-100"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
