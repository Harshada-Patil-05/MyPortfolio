import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-12 grid-cols-1 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => {
          const isLastOdd =
            projects.length % 2 !== 0 &&
            index === projects.length - 1;

          return (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className={`group border border-white/10 bg-gray-900/70 backdrop-blur-md 
              rounded-2xl shadow-[0_0_25px_rgba(130,69,236,0.25)]
              hover:shadow-[0_0_45px_rgba(130,69,236,0.4)]
              transition-all duration-500 cursor-pointer overflow-hidden
              ${
                isLastOdd
                  ? "md:col-span-2 md:w-1/2 md:justify-self-center"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="p-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
      {/* Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded-xl shadow-2xl 
                   w-[95%] max-w-3xl 
                   max-h-[90vh] overflow-y-auto 
                   relative"
      >
        {/* Sticky Close Button */}
        <div className="sticky top-0 z-10 bg-gray-900 flex justify-end p-4">
          <button
            onClick={() => setSelectedProject(null)}
            className="text-white text-3xl font-bold hover:text-purple-500"
          >
            &times;
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col">
          <div className="w-full flex justify-center px-4">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full object-contain rounded-xl shadow-xl"
            />
          </div>

          <div className="p-6 lg:p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 px-4 py-2 rounded-xl text-center font-semibold transition"
              >
                View Code
              </a>

              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.section>
  );
};

export default Work;