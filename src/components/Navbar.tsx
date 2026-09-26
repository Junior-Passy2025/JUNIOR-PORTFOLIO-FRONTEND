import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "../data/contact";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        z-50 
        bg-slate-50/90
        dark:bg-slate-950/80 
        backdrop-blur-md 
        border-b 
        border-slate-200 
        dark:border-slate-800
        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nom */}
        <div className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-500">
          Junior<span className="text-cyan-400">Passy</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 dark:text-gray-300 transition-colors duration-500">
          <a href="#about" className="hover:text-cyan-400 transition">
            À propos
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Compétences
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Expérience
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projets
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Réseaux */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-500"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-500"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition-colors duration-500"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;