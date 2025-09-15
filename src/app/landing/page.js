"use client";
import React, { useState, useRef, useEffect } from "react";

// Example modules data (4 modules, 6 chapters each)
const initialModules = [
  {
    name: "Module 1: Basics",
    color: "bg-green-500",
    mascot: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Duolingo_logo_mascot.png",
    chapters: [
      { id: 1, name: "Greetings", completed: false, unlocked: true },
      { id: 2, name: "Numbers", completed: false, unlocked: false },
      { id: 3, name: "Colors", completed: false, unlocked: false },
      { id: 4, name: "Days", completed: false, unlocked: false },
      { id: 5, name: "Weather", completed: false, unlocked: false },
      { id: 6, name: "Time", completed: false, unlocked: false },
    ],
  },
  {
    name: "Module 2: Food",
    color: "bg-yellow-500",
    mascot: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    chapters: [
      { id: 1, name: "Fruits", completed: false, unlocked: false },
      { id: 2, name: "Vegetables", completed: false, unlocked: false },
      { id: 3, name: "Meals", completed: false, unlocked: false },
      { id: 4, name: "Drinks", completed: false, unlocked: false },
      { id: 5, name: "Snacks", completed: false, unlocked: false },
      { id: 6, name: "Desserts", completed: false, unlocked: false },
    ],
  },
  {
    name: "Module 3: Travel",
    color: "bg-blue-500",
    mascot: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    chapters: [
      { id: 1, name: "Transport", completed: false, unlocked: false },
      { id: 2, name: "Directions", completed: false, unlocked: false },
      { id: 3, name: "Booking", completed: false, unlocked: false },
      { id: 4, name: "Hotels", completed: false, unlocked: false },
      { id: 5, name: "Sightseeing", completed: false, unlocked: false },
      { id: 6, name: "Emergencies", completed: false, unlocked: false },
    ],
  },
  {
    name: "Module 4: People",
    color: "bg-purple-500",
    mascot: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    chapters: [
      { id: 1, name: "Family", completed: false, unlocked: false },
      { id: 2, name: "Friends", completed: false, unlocked: false },
      { id: 3, name: "Professions", completed: false, unlocked: false },
      { id: 4, name: "Hobbies", completed: false, unlocked: false },
      { id: 5, name: "Culture", completed: false, unlocked: false },
      { id: 6, name: "Community", completed: false, unlocked: false },
    ],
  },
];

export default function LandingPage() {
  const [modules, setModules] = useState(initialModules);
  const [points, setPoints] = useState(0);
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  // Refs for each module section
  const moduleRefs = useRef([]);

  // Scroll handler to highlight module in view
  useEffect(() => {
    const handleScroll = () => {
      const offsets = moduleRefs.current.map(ref =>
        ref ? ref.getBoundingClientRect().top : Infinity
      );
      const idx = offsets.findIndex(offset => offset > 100);
      setActiveModuleIdx(idx === -1 ? modules.length - 1 : Math.max(0, idx - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [modules.length]);

  // Find current chapter (first unlocked & not completed in all modules)
  const current = (() => {
    for (let m = 0; m < modules.length; m++) {
      const ch = modules[m].chapters.find(c => c.unlocked && !c.completed);
      if (ch) return { moduleIdx: m, chapter: ch };
    }
    // fallback: last chapter of last module
    const lastModule = modules[modules.length - 1];
    return { moduleIdx: modules.length - 1, chapter: lastModule.chapters[lastModule.chapters.length - 1] };
  })();

  // Complete chapter logic
  const completeChapter = (moduleIdx, chapterIdx) => {
    setModules(prev =>
      prev.map((mod, mIdx) => {
        if (mIdx !== moduleIdx) return mod;
        return {
          ...mod,
          chapters: mod.chapters.map((ch, cIdx) => {
            if (cIdx === chapterIdx) return { ...ch, completed: true };
            if (cIdx === chapterIdx + 1) return { ...ch, unlocked: true };
            return ch;
          }),
        };
      })
    );
    setPoints(p => p + 10);
  };

  // For snake effect, alternate left/right offset (more pronounced)
  const offsets = [
    "ml-0", "ml-20", "ml-40", "ml-20", "ml-0", "ml-20", "ml-40", "ml-20", "ml-0"
  ];

  // For mascot alternation: left for even modules, right for odd
  const mascotSide = idx => (idx % 2 === 0 ? "left" : "right");

  return (
  <div className="flex min-h-screen">
      {/* ===== Left Sidebar ===== */}
      <aside className="w-56 bg-white  p-4 flex flex-col items-start fixed top-0 left-0 h-screen">
        <h1 className="text-2xl font-bold text-green-600 mb-6">Green-vision</h1>
        <nav className="flex flex-col gap-4 w-full">
          <a
            href="/landing"
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-green-100 text-green-700 font-semibold"
         >
          
            🏠 Learn
          </a>
          <a
            href="/diy"
            className="flex items-center gap-2 px-3 py-2 rounded-md  text-gray-700 hover:bg-green-50"
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

      {/* Right Sidebar - Fixed */}
      <aside className="fixed right-0 top-0 w-96 h-screen bg-white p-8 flex flex-col space-y-8 z-20">
        {/* Points */}
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl shadow-2xl px-10 py-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.25)]">
          <span className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
              alt="India"
              className="w-8 h-6"
            />
            <p className="font-semibold text-gray-700 text-lg">Points</p>
          </span>
          <p className="font-bold text-green-600 text-2xl">{points}</p>
        </div>
        {/* Leaderboards */}
        <div className="bg-gray-100 rounded-2xl shadow-2xl px-10 py-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(250,204,21,0.25)]">
          <h2 className="font-bold mb-4 flex items-center text-xl">
            <span className="mr-3 text-yellow-600 text-2xl">🏆</span> Leaderboard
          </h2>
          <p className="text-gray-600 text-base">Complete chapters to rank up!</p>
        </div>
        {/* Daily Quests */}
        <div className="bg-gray-100 rounded-2xl shadow-2xl px-10 py-10 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(34,197,94,0.25)]">
          <h2 className="font-bold mb-4 flex items-center text-xl">
            <span className="mr-3 text-green-600 text-2xl">⚡</span> Daily Quests
          </h2>
          <p className="text-gray-600 text-base">Earn 10 XP by completing 1 chapter</p>
        </div>
      </aside>

    {/* Main Content - Scrollable */}
<main className="ml-48 mr-96 min-h-screen overflow-y-auto relative">
  {/* Fixed Module Header */}
  <div
    key={`${activeModuleIdx}-${current.chapter?.id ?? ""}`}
    className={`
      fixed left-1/2 top-0 z-30
      -translate-x-1/2 mt-4
      w-[400px]
      rounded-xl px-8 py-3 flex flex-col items-center gap-2 shadow-lg
      transition-all duration-300
      ${modules[activeModuleIdx].color} text-white
      animate-fadeInDown
    `}
    style={{
      pointerEvents: "auto",
      userSelect: "none"
    }}
  >
    <span className="text-lg font-bold">
      {modules[activeModuleIdx].name}
    </span>
    <span className="font-bold text-xl">
      {current.chapter
        ? `Chapter ${current.chapter.id}: ${current.chapter.name}`
        : ""}
    </span>
  </div>

  {/* Main Content */}
  <div className="w-full flex justify-center pt-32 pb-28">
    <div className="w-[400px]">
      {modules.map((module, mIdx) => {
        const moduleUnlocked = module.chapters.some(ch => ch.unlocked);
        const side = mascotSide(mIdx);
        const mascotChapterIdx = Math.floor(module.chapters.length / 2);

        return (
          <div
            key={module.name}
            ref={el => (moduleRefs.current[mIdx] = el)}
            className="flex flex-col items-center mb-16"
          >
            {/* Module Title */}
            {/* <div
              className={`mb-2 font-bold text-lg ${
                activeModuleIdx === mIdx
                  ? module.color + " text-white px-4 py-1 rounded"
                  : "text-gray-700"
              }`}
            >
              {module.name}
            </div> */}

            {/* Chapters */}
            <div className="flex flex-col items-center gap-10 relative">
              {module.chapters.map((chapter, cIdx) => (
                <div
                  key={chapter.id}
                  className={`relative ${offsets[cIdx % offsets.length]}`}
                  style={{ zIndex: 10 }}
                >
                  <a
                    href={`/chapter/${module.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}/${chapter.id}`}
                    tabIndex={chapter.unlocked ? 0 : -1}
                    aria-disabled={!chapter.unlocked || chapter.completed}
                    onClick={e => {
                      if (!chapter.unlocked || chapter.completed)
                        e.preventDefault();
                    }}
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold
                      transition-transform duration-300
                      border-4 border-white shadow-[0_4px_16px_0_rgba(34,197,94,0.15)]
                      ${
                        chapter.completed
                          ? "bg-gradient-to-br from-green-300 to-green-100 text-green-700 animate-pop pointer-events-none"
                          : chapter.unlocked
                          ? "bg-gradient-to-br from-green-400 via-green-300 to-green-200 text-white animate-bounce"
                          : "bg-gray-100 text-gray-300 pointer-events-none"
                      }
                      ${
                        chapter.unlocked && !chapter.completed
                          ? "hover:scale-110 active:scale-95 ring-2 ring-green-200"
                          : ""
                      }
                      three-d-btn
                    `}
                    style={{
                      display: "inline-flex",
                      boxShadow:
                        chapter.unlocked && !chapter.completed
                          ? "0 6px 16px 0 #a7f3d0"
                          : "0 2px 8px 0 #d1d5db"
                    }}
                  >
                    {chapter.completed ? "⭐" : chapter.unlocked ? "★" : "🔒"}
                  </a>

                  {/* Mascot image */}
                  {cIdx === mascotChapterIdx && (
                    <img
                      src={module.mascot}
                      alt="Mascot"
                      className={`
                        w-16 h-16 absolute top-1/2 -translate-y-1/2
                        ${side === "left" ? "-left-20" : "-right-20"}
                        ${
                          moduleUnlocked
                            ? "animate-float cursor-pointer hover:scale-110 transition-transform"
                            : "grayscale"
                        }
                        pointer-events-none
                      `}
                      style={{
                        filter: moduleUnlocked
                          ? "drop-shadow(0 4px 16px #a7f3d0)"
                          : "grayscale(100%)"
                      }}
                      draggable={false}
                    />
                  )}

                  {/* Complete button */}
                  {chapter.unlocked && !chapter.completed && (
                    <button
                      onClick={() => completeChapter(mIdx, cIdx)}
                      className="absolute left-1/2 -bottom-8 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 text-xs"
                    >
                      Complete Chapter
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</main>

      <style jsx global>{`
        @keyframes pop {
          0% { transform: scale(1); }
          60% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-pop { animation: pop 0.5s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn { animation: fadeIn 0.8s; }
        .animate-fadeInDown { animation: fadeIn 0.8s; }
        @keyframes float {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-16px);}
        }
        .animate-float { animation: float 2s infinite; }
        /* 3D button effect */
        .three-d-btn {
          box-shadow:
            0 4px 16px 0 #a7f3d0,
            0 8px 32px 0 #a7f3d0,
            0 1.5px 0 #fff inset;
          border-bottom: 6px solid #059669;
        }
      `}</style>
    </div>
  );

}
