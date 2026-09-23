import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-5xl font-bold text-center"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-slate-400 mt-5">
          Let's build something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex gap-5 items-center">

              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p className="text-slate-400">
                  chougalerakshita@gmail.com
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-center">

              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Phone</h3>
                <p className="text-slate-400">
                  +91 8971019108
                </p>
              </div>

            </div>

            <div className="flex gap-5 items-center">

              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaLinkedin />
              </div>

              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/rakshita-chougale-0630402b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400"
                >
                  View Profile
                </a>
              </div>

            </div>

            <div className="flex gap-5 items-center">

              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                <FaGithub />
              </div>

              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/rakshita0711"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-blue-400"
                >
                  github.com/rakshita0711
                </a>
              </div>

            </div>

          </div>

          {/* Right */}

          <form className="bg-slate-950 rounded-3xl p-8 border border-slate-800">

            <input
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none mb-5"
            />

            <input
              placeholder="Email"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none mb-5"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none"
            />

            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}