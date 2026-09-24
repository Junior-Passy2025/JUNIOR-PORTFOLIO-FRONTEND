import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "../data/contact";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nom */}
        <div className="text-xl font-bold text-white">
          Junior<span className="text-cyan-400">Passy</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
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
 {/* Réseaux */}
<div className="flex items-center gap-4">

  <a
    href={contact.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-cyan-400 transition"
  >
    <FaGithub size={20} />
  </a>


  <a
    href={contact.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-cyan-400 transition"
  >
    <FaLinkedin size={20} />
  </a>


  <a
    href={`mailto:${contact.email}`}
    className="text-gray-300 hover:text-cyan-400 transition"
  >
    <FaEnvelope size={20} />
  </a>

</div>
      </div>
    </nav>
  );
};

export default Navbar;
