import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#07061b] text-white pt-12 pb-8 px-[10vw] border-t border-purple-900/40 mt-5">
      <div className="max-w-6xl mx-auto text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Harshada Patil
        </h2>

        {/* Short Tagline */}
        <p className="text-gray-400 mt-2 text-sm">
          Building modern web experiences with passion and precision.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://www.linkedin.com/in/harshada-g-patil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-125 duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Harshada-Patil-05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition transform hover:scale-125 duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs mt-6">
          © {new Date().getFullYear()} Harshada Patil. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;