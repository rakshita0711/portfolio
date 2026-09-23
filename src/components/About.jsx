import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const stats = [
  { number: "5+", label: "Production Projects" },
  { number: "1", label: "Companies Worked" },
  { number: "10+", label: "Technologies" },
  { number: "1+", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="text-blue-400 uppercase tracking-[4px] text-center">
            About Me
          </p>

          <h2 className="text-5xl font-bold text-center mt-4">
            Building Modern Digital Experiences
          </h2>

          <p className="text-slate-400 max-w-4xl mx-auto text-center mt-8 leading-8 text-lg">
            I'm a Frontend Developer passionate about creating modern,
            responsive and user-friendly web applications.
            I have worked on enterprise banking platforms,
            healthcare websites, e-commerce platforms and
            admin dashboard applications using React,
            WordPress, PHP and JavaScript.
          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-8 text-center hover:border-blue-500 transition"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* What I Do */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500 transition">
            <FaLaptopCode className="text-5xl text-blue-500" />
            <h3 className="text-2xl font-bold mt-6">
              Frontend
            </h3>
            <p className="text-slate-400 mt-4 leading-7">
              Responsive websites, React applications,
              landing pages and UI development.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500 transition">
            <FaCode className="text-5xl text-cyan-400" />
            <h3 className="text-2xl font-bold mt-6">
              Backend
            </h3>
            <p className="text-slate-400 mt-4 leading-7">
              PHP, WordPress, Node.js,
              REST APIs and MySQL integration.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500 transition">
            <FaProjectDiagram className="text-5xl text-purple-400" />
            <h3 className="text-2xl font-bold mt-6">
              Projects
            </h3>
            <p className="text-slate-400 mt-4 leading-7">
              Banking, Healthcare,
              E-Commerce and
              Admin Dashboard solutions.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-500 transition">
            <FaUsers className="text-5xl text-green-400" />
            <h3 className="text-2xl font-bold mt-6">
              Collaboration
            </h3>
            <p className="text-slate-400 mt-4 leading-7">
              Working closely with teams,
              clients and stakeholders to
              deliver quality solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}