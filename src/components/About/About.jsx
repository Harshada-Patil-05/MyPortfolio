import React from "react";
import profileImage from "../../assets/Harshu.jpeg";
import resume from "../../assets/Harshada Resume.pdf"
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-[7vw] lg:px-[15vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Harshada Patil
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "MERN Stack Specialist",
                2000,
                "DSA Problem Solver",
                2000,
                "AI/ML Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
            I am a passionate Full-Stack Developer specializing in the MERN
            stack, with a strong foundation in Data Structures and Algorithms. I
            enjoy building scalable web applications and solving complex
            problems with clean and efficient code. Alongside web development, I
            am exploring Machine Learning to create intelligent and data-driven
            solutions.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Harshada Resume.pdf"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 25px rgba(130,69,236,0.6)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="relative md:w-1/2 flex justify-center items-center">
          {/* Glow */}
          <div
            className="absolute
              w-72 h-72
              sm:w-80 sm:h-80
              md:w-96 md:h-96
              lg:w-[30rem] lg:h-[30rem]
              bg-[#8245ec]/30 blur-[120px] rounded-full"
          ></div>

          {/* Bottom Purple Arc */}
          <div
            className="absolute
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-[26rem] lg:h-[26rem]
              rounded-full
              bg-gradient-to-b from-[#7c3aed] via-[#8245ec] to-[#5b21b6]
              translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12"
          ></div>

          {/* Image */}
          <div
            className="relative z-10 animate-float
              w-56 h-56
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-[26rem] lg:h-[28rem]
              rounded-full overflow-hidden
              shadow-[0_20px_60px_rgba(130,69,236,0.5)]"
          >
            <img
              src={profileImage}
              alt="Harshada Patil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
