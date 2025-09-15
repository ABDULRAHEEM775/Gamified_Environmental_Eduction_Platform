// "use client";
// import Link from "next/link";
// import { Fredoka } from "next/font/google";

// // Playful font
// const fredoka = Fredoka({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${fredoka.className} flex items-center justify-center min-h-screen bg-white px-6`}
//     >
//       {/* Left side image */}
//       <div className="flex-1 flex justify-center">
//         <div className="w-80 h-80 rounded-xl shadow-md flex items-center justify-center overflow-hidden bg-gray-100">
//           <img
//             src="/images/enivornment.png"
//             alt="Environment"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Right side content */}
//       <div className="flex-1 flex flex-col items-center justify-center text-center">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-snug">
//           The free, fun, and effective way to <br /> learn anything!
//         </h1>

//         <div className="flex flex-col gap-4 w-64">
//           <Link href="/signup">
//             <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md transition">
//               Get Started
//             </button>
//           </Link>

//           <Link href="/login">
//             <button className="w-full border border-gray-300 hover:border-gray-400 text-blue-600 font-semibold py-3 rounded-xl shadow-md transition">
//               I Already Have an Account
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import { Fredoka } from "next/font/google";

// Playful font
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  return (
    <div
      className={`${fredoka.className} flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 px-6`}
    >
      {/* Left side image */}
      <div className="flex-1 flex justify-center">
        <div className="w-80 h-80 rounded-3xl shadow-2xl border-4 border-green-200 bg-white overflow-hidden transform hover:scale-105 transition duration-500">
          <img
            src="/images/enivornment.png"
            alt="Environment"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 leading-snug drop-shadow-sm">
          Learn. Grow. Protect 🌱
        </h1>
        <p className="text-lg md:text-xl text-green-700 mb-10 max-w-md">
          Join us on a journey to learn about our planet and take action for a
          greener, brighter future!
        </p>

        <div className="flex flex-col gap-4 w-72">
          <Link href="/signup">
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-105">
              🌍 Get Started
            </button>
          </Link>

          <Link href="/login">
            <button className="w-full border-2 border-green-400 text-green-700 hover:bg-green-50 font-semibold py-3 rounded-xl shadow-md transition">
              I Already Have an Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
