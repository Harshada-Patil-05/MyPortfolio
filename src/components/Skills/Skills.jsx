// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise built through
          projects and hands-on experience.
        </p>
      </div>

      {/* Categories Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="
              bg-gray-900/70
              backdrop-blur-md
              p-5 sm:p-6
              rounded-2xl
              border border-white/10
              shadow-[0_0_25px_rgba(130,69,236,0.25)]
              hover:shadow-[0_0_40px_rgba(130,69,236,0.4)]
              transition-all duration-500
              w-full
            "
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-8 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1000}
              scale={1.02}
              transitionSpeed={600}
              gyroscope={true}
            >
              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 max-w-[90%] mx-auto">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="
                      flex items-center justify-center gap-2
                      border border-gray-700
                      rounded-xl
                      py-3 px-2
                      bg-black/40
                      hover:border-[#8245ec]
                      hover:shadow-[0_0_10px_rgba(130,69,236,0.4)]
                      transition-all duration-300
                    "
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;