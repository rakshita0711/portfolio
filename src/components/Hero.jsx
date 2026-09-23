import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-400 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Available for Opportunities
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Rakshita
            <br />
            <span className="text-blue-500">Chougale</span>
          </h1>

          <div className="text-3xl font-semibold mt-8 text-slate-300 h-12">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "React Developer",
                1500,
                "WordPress Developer",
                1500,
                "UI Developer",
                1500,
              ]}
              repeat={Infinity}
              speed={45}
            />
          </div>

          <p className="text-slate-400 text-lg leading-9 mt-8 max-w-xl">
            Frontend Developer with experience building enterprise banking
            websites, healthcare platforms, e-commerce applications and admin
            dashboards.
          </p>

          <div className="flex gap-5 mt-12">
            <a
              href="#projects"
              className="rounded-full px-8 py-4 bg-blue-600 hover:bg-blue-700 transition"
            >
              Explore My Work →
            </a>

            <a
              href="/Rakshita_Chougale.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-8 py-4 border border-blue-500 hover:bg-blue-600 transition"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Rakshita"
              className="relative w-96 h-96 rounded-full object-cover border-8 border-slate-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
