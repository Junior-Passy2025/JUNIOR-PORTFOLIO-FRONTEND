import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { contact } from "../data/contact";

const Footer = () => {
  return (
    <footer
      className="
        bg-white
        dark:bg-slate-950
        text-slate-700
        dark:text-gray-400
        border-t
        border-slate-200
        dark:border-slate-800
        transition-colors
        duration-500
        py-10
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-8
          "
        >
          {/* Identité */}
          <div>
            <h3
              className="
                text-xl
                font-bold
              "
            >
              <span className="text-cyan-400">Junior</span>

              <span className="text-slate-900 dark:text-white">Passy</span>
            </h3>

            <p
              className="
                text-sm
                mt-2
                text-slate-500
                dark:text-gray-400
              "
            >
              Électrotechnicien • Développeur Full Stack • IoT
            </p>

            <p
              className="
                mt-3
                text-sm
              "
            >
              © 2026 — Conçu avec passion.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div
            className="
              flex
              gap-4
            "
          >
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                flex
                items-center
                justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12
                h-12
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                flex
                items-center
                justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="
                w-12
                h-12
                rounded-xl
                border
                border-slate-200
                dark:border-slate-700
                flex
                items-center
                justify-center
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Retour haut */}
          <a
            href="#"
            className="
              flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              bg-cyan-400
              text-slate-950
              font-semibold
              hover:bg-cyan-300
              transition
            "
          >
            Retour en haut
            <ArrowUp size={18} />
          </a>
        </div>

        {/* Bas footer */}

        <div
          className="
    mt-10
    pt-8
    border-t
    border-slate-200
    dark:border-slate-800
    flex
    justify-center
    gap-8
    text-sm
    uppercase
    tracking-wider
  "
        >
          <span
            className="
      cursor-pointer
      text-slate-400
      dark:text-gray-500
      hover:text-cyan-400
      transition
      duration-300
    "
          >
            Politique de confidentialité
          </span>

          <span
            className="
      cursor-pointer
      text-slate-400
      dark:text-gray-500
      hover:text-cyan-400
      transition
      duration-300
    "
          >
            Conditions d'utilisation
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
