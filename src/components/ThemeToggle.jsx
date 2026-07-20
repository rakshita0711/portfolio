import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center text-white"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}