import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Stats {
  elementsSorted: number;
  algorithmCount: number;
  algorithmRun: string;
}

export default function App() {
  const [data, setData] = useState<Stats>({
    elementsSorted: 0,
    algorithmCount: 0,
    algorithmRun: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    async function fetchStats() {
      const response = await fetch(
        "https://sorting-visualizer-backend.onrender.com/api/stats"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch stats");
      }

      const data: Stats = await response.json();
      setData(data);
    }
    fetchStats();
    setLoading(false);
  }, []);

  const getAlgorithm = (algorithm: string): string => {
    switch (algorithm) {
      case "merge":
        return "Merge Sort";
      case "bubble":
        return "Bubble Sort";
      case "quick":
        return "Quick Sort";
      case "insertion":
        return "Insertion Sort";
      case "selection":
        return "Selection Sort";
      default:
        return "Unknown Algorithm";
    }
  };
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  if (loading) return <div>Loading..</div>;
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans overflow-hidden">
      {/* Grid Background (Behind Everything) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none" />

      {/* Page Content (Stacked above grid) */}
      <div className="relative z-10">
        {/* Top Right Social Icons */}
        <div className="absolute top-4 right-6 z-10 flex gap-4 text-white text-2xl">
          <a
            href="https://github.com/yuvrajkarna2717"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition-colors cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yuvrajkarna2717"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors cursor-pointer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center text-center px-6 py-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight md:leading-[1.2] bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-8 pb-1">
            Sorting Visualizer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Experience the beauty of algorithms in motion. Watch various sorting
            techniques unfold live with speed control and color transitions.
          </p>
          <Link to="/sorting-visualizer">
            <button className="px-6 py-3 text-lg font-medium bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300 shadow-md">
              Let's Visualize
            </button>
          </Link>
        </section>

        {/* Stats Section */}
        {data?.algorithmCount !== 0 ? (
          <section className="py-10 px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Project Stats
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-blue-400">
                  {formatNumber(data?.algorithmCount)}
                </p>
                <p className="mt-2 text-gray-300">Algorithms Run</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-purple-400">
                  {formatNumber(data?.elementsSorted)}
                </p>
                <p className="mt-2 text-gray-300">Elements Sorted</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
                <p className="text-4xl font-bold text-pink-400">
                  {getAlgorithm(data?.algorithmRun)}
                </p>
                <p className="mt-2 text-gray-300">Most Used</p>
              </div>
            </div>
          </section>
        ) : (
          <div className="md:mt-[284px]"></div>
        )}

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-sm">
          Made with <span className="text-red-500">♥</span> by{" "}
          <a
            href="https://www.linkedin.com/in/yuvrajkarna27"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 font-bold hover:text-white"
          >
            Yuvraj
          </a>
        </footer>
      </div>
    </div>
  );
}
