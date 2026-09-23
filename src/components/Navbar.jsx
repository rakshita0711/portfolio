import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
            RC
          </div>

          <div>

            <h2 className="font-bold">
              Rakshita
            </h2>

            <p className="text-xs text-slate-400">
              Frontend Developer
            </p>

          </div>

        </a>

        {/* Desktop */}

        <div className="hidden md:flex gap-8 items-center">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Resume
          </a>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 p-6 space-y-5">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}