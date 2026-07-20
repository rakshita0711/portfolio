import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {

  return (

    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-blue-500">
            Rakshita Chougale
          </h2>

          <p className="text-slate-400 mt-2">
            Frontend Developer
          </p>

        </div>

        <div className="flex gap-5 text-2xl mt-6 md:mt-0">

          <a
            href="https://github.com/rakshita0711"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rakshita-chougale-0630402b5/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="#home">
            <FaArrowUp />
          </a>

        </div>

      </div>

      <p className="text-center text-slate-500 mt-8">
        © 2026 Rakshita Chougale. All Rights Reserved.
      </p>

    </footer>

  );

}