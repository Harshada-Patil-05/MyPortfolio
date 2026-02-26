import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-black via-[#0f0f1a] to-black"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-700 opacity-20 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto">
          My education journey and academic growth in technology and problem-solving.
        </p>
      </motion.div>

      <div className="relative">

        {/* Vertical Timeline Line */}
        <div className="absolute left-2 3xl:left-1/2 transform -translate-x-1/2 3xl:-translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 h-full shadow-[0_0_20px_rgba(130,69,236,0.7)]"></div>

        {education.map((edu, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative flex flex-col 3xl:flex-row items-center mb-20 ${
                isEven ? "3xl:justify-start" : "3xl:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 3xl:left-1/2 transform -translate-x-1/2 3xl:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-black shadow-lg shadow-purple-500 animate-pulse"></div>

              {/* Card */}
              <div
                className={`w-full 3xl:max-w-md p-6 3xl:p-8 rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-lg
                shadow-[0_0_30px_rgba(130,69,236,0.2)]
                transform transition-all duration-500
                hover:-translate-y-3 hover:shadow-purple-500/40
                ${isEven ? "3xl:ml-20" : "3xl:mr-20"}`}
              >
                {/* Top Section */}
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl 3xl:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-400">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-purple-400 mt-1">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <p className="text-gray-300 font-semibold">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;