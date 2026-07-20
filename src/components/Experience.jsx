import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    year: "2026 - Present",
    company: "Invictosoft Technology",
    role: "Frontend Developer",
    achievements: [
      "Developed responsive websites",
      "WordPress development & customization",
      "UI enhancements and bug fixing",
      "Performance optimization",
    ],
  },
  {
    year: "2025",
    company: "VTricks Technology",
    role: "Frontend Developer",
    achievements: [
      "Built responsive web pages",
      "Worked on client projects",
      "Improved UI/UX",
      "Maintained production websites",
    ],
  },
  {
    year: "2024 - 2025",
    company: "Rooman Technologies",
    role: "AI & Machine Learning Intern",
    achievements: [
      "Worked on Machine Learning models",
      "Data preprocessing",
      "Python development",
      "AI project implementation",
    ],
  },
  {
    year: "2023",
    company: "Zeel Code",
    role: "Full Stack Developer Intern",
    achievements: [
      "HTML, CSS & JavaScript development",
      "PHP & MySQL",
      "Responsive websites",
      "CRUD applications",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-blue-400">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Professional Journey
          </h2>

          <p className="text-slate-400 mt-5">
            Companies and internships I've worked with.
          </p>
        </div>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14 ml-10 relative"
            >

              <div className="absolute -left-[58px] top-2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <FaBriefcase />
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition">

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {item.role}
                    </h3>

                    <p className="text-blue-400 mt-2">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <FaCalendarAlt />
                    {item.year}
                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  {item.achievements.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-green-400 mt-1" />

                      <p className="text-slate-300">
                        {point}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}