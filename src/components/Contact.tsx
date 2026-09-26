import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { contact } from "../data/contact";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    console.log(form.current);
    console.log("SERVICE:", "service_e0arfye");
    console.log("TEMPLATE:", "template_9z949n2");
    console.log("PUBLIC KEY:", "wIZp4egv6TjjTAboq");
    emailjs
      .sendForm(
        "service_e0arfye",
        "template_9z949n2",
        form.current,
        "wIZp4egv6TjjTAboq",
      )
      .then(() => {
        setStatus("Message envoyé avec succès !");
        form.current?.reset();
      })

      .catch((error) => {
        console.log("DETAIL ERREUR EMAILJS :", error);

        setStatus("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <section
      id="contact"
      className="
  bg-white
  dark:bg-slate-900
  text-slate-900
  dark:text-white
  pb-20
  transition-colors
  duration-500
"
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >
        {/* Titre */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            mb-12
          "
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Me <span className="text-cyan-400">contacter</span>
          </h2>

          <p
            className="
              mt-4
              text-slate-600
dark:text-gray-400
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Une idée, un projet ou une opportunité ? N'hésitez pas à me
            contacter.
          </p>
        </motion.div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {/* Informations */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              bg-slate-100
dark:bg-slate-950
border
border-cyan-500/30
rounded-xl
p-8
transition-colors
duration-500
            "
          >
            <h3
              className="
                text-2xl
                font-semibold
                text-cyan-400
                mb-6
              "
            >
              Informations
            </h3>

            <div className="space-y-5">
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <Mail className="text-cyan-400" />

                <span className="text-slate-700 dark:text-gray-300">
                  {contact.email}
                </span>
              </div>

              <div
                className="
                flex
                items-center
                gap-4
              "
              >
                <Phone className="text-cyan-400" />

                <span className="text-slate-700 dark:text-gray-300">
                  {contact.phone}
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <MapPin className="text-cyan-400" />

                <span className="text-slate-700 dark:text-gray-300">
                  {contact.location}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-5">Me suivre sur :</h4>

              <div className="flex gap-5">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        w-12
        h-12
        rounded-full
        bg-white
dark:bg-slate-900
        flex
        items-center
        justify-center
        hover:bg-cyan-400
        hover:text-slate-900
        transition
        border
border-slate-200
dark:border-slate-700
      "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        w-12
        h-12
        rounded-full
        bg-white
dark:bg-slate-900
        flex
        items-center
        justify-center
        hover:bg-cyan-400
        hover:text-slate-900
        transition
        border
border-slate-200
dark:border-slate-700
      "
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="
        w-12
        h-12
        rounded-full
        bg-white
dark:bg-slate-900
        flex
        items-center
        justify-center
        hover:bg-cyan-400
        hover:text-slate-900
        transition
        border
border-slate-200
dark:border-slate-700
      "
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div
              className="
                mt-8
                border-t
                border-slate-300
dark:border-slate-800

                pt-6
              "
            >
              <p
                className="
    text-slate-600
    dark:text-gray-400
    text-sm
  "
              >
                {contact.availability}
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              bg-slate-100
dark:bg-slate-950
border
border-cyan-500/30
rounded-xl
p-8
space-y-5
transition-colors
duration-500
            "
          >
            <input
              name="name"
              placeholder="Votre nom"
              required
              className="
                w-full
                bg-white
dark:bg-slate-900

border-slate-300
dark:border-slate-700

text-slate-900
dark:text-white
                border
                rounded-lg
                p-3
                outline-none
                focus:border-cyan-400
                transition-colors
duration-300
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Votre email"
              required
              className="
                w-full
                bg-white
dark:bg-slate-900

border-slate-300
dark:border-slate-700

text-slate-900
dark:text-white
                border
                rounded-lg
                p-3
                outline-none
                focus:border-cyan-400
                transition-colors
duration-300
              "
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              required
              className="
                w-full
                bg-white
dark:bg-slate-900

border-slate-300
dark:border-slate-700

text-slate-900
dark:text-white
                border
                rounded-lg
                p-3
                outline-none
                focus:border-cyan-400
                transition-colors
duration-300
              "
            />

            <button
              type="submit"
              className="
                flex
                items-center
                justify-center
                gap-3
                w-full
                py-3
                rounded-lg
                bg-cyan-400
                text-slate-900
                font-semibold
                hover:bg-cyan-300
                transition
              "
            >
              Envoyer
              <Send size={18} />
            </button>

            {status && (
              <p
                className="
                  text-center
                  text-cyan-400
                "
              >
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
