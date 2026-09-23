import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBuilding,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    number: "5+",
    title: "Production Projects",
    color: "text-blue-400",
  },
  {
    icon: <FaBuilding />,
    number: "2",
    title: "Companies Worked",
    color: "text-green-400",
  },
  {
    icon: <FaCode />,
    number: "12+",
    title: "Technologies",
    color: "text-purple-400",
  },
  {
    icon: <FaGraduationCap />,
    number: "B.E",
    title: "AI & Data Science",
    color: "text-orange-400",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-blue-400">
            Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Quick Overview
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-blue-500 transition hover:-translate-y-2"
            >

              <div className={`text-5xl mb-6 ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}