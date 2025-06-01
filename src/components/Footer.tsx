import React from "react";
import {FaGithub, FaLinkedin,FaEnvelope, FaArrowUp,} from "react-icons/fa";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-gray-400 py-5 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">© 2025 Anu Rajlliwal</p>
          <p className="text-sm">Built with React + Tailwind + TypeScript</p>
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-[#1e293b] hover:bg-indigo-500 transition text-white"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
          <a
            href="https://github.com/anusain123/"
            className="p-3 rounded-lg bg-[#1e293b] hover:bg-indigo-500 transition text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anu-sain-26b42931b/"
            className="p-3 rounded-lg bg-[#1e293b] hover:bg-indigo-500 transition text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:anurani.ittechxpert@gmail.com"
            className="p-3 rounded-lg bg-[#1e293b] hover:bg-indigo-500 transition text-white"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
