import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGlobe,
} from "react-icons/fa";

const projects = [
  {
    title: "Newtek Bank",
    category: "Enterprise Banking Website",
    role: "Frontend Developer",
    description:
      "Worked on responsive UI development, landing pages, performance optimization, WordPress customization, ACF integration, production support, and bug fixing.",
    technologies: ["WordPress", "PHP", "Bootstrap", "MySQL"],
    link: "https://www.newtekbank.com/",
  },

  {
    title: "NewtekOne",
    category: "Corporate Website",
    role: "Frontend Developer",
    description:
      "Implemented UI enhancements, responsive layouts, website maintenance, and production updates for enterprise users.",
    technologies: ["WordPress", "PHP", "CSS"],
    link: "https://www.newtekone.com/",
  },

  {
    title: "The Manaha",
    category: "Healthcare Website",
    role: "Frontend Developer",
    description:
      "Developed responsive pages, optimized layouts, improved user experience, and implemented modern UI components.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://themanaha.com/",
  },

  {
    title: "Naari Hub",
    category: "E-Commerce Website",
    role: "Frontend Developer",
    description:
      "Worked on product pages, responsive layouts, UI enhancements, and shopping experience improvements.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://www.naarihub.com/",
  },

  {
    title: "ShowGrid Admin",
    category: "Admin Dashboard",
    role: "Frontend Developer",
    description:
      "Built admin dashboard screens, forms, tables, CRUD interfaces, and dashboard UI for application management.",
    technologies: ["React", "Bootstrap", "API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-slate-400 text-center mt-5 max-w-2xl mx-auto">
          A collection of production websites and applications
          that I've contributed to across multiple industries.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden hover:border-blue-500 transition"
            >

              {/* Image Placeholder */}

              <div className="h-60 bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center">

                <FaGlobe className="text-7xl text-white opacity-80" />

              </div>

              <div className="p-8">

                <p className="text-blue-400 font-medium">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  <strong>Role:</strong> {project.role}
                </p>

                <p className="text-slate-400 leading-8 mt-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {project.link !== "#" && (

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 mt-8 text-blue-400 hover:text-white transition"
                  >
                    Visit Website

                    <FaExternalLinkAlt />

                  </a>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}