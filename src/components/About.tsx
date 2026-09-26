import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
  min-h-screen
  bg-white
  dark:bg-slate-900
  text-slate-900
  dark:text-white
  flex
  items-center
  py-20
  transition-colors
  duration-500
"
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Parcours */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mb-6
            "
          >
            À propos de <span className="text-cyan-400">moi</span>
          </h2>

          <p
            className="text-slate-700
dark:text-gray-300 text-lg leading-relaxed mb-6"
          >
            Électrotechnicien de formation, j'ai acquis une expérience dans la
            maintenance des systèmes électriques, l'analyse des installations et
            le diagnostic des problèmes techniques.
          </p>

          <p
            className="text-slate-700
dark:text-gray-300 text-lg leading-relaxed mb-6"
          >
            J'ai ensuite développé des compétences en programmation web et
            mobile afin de concevoir des applications modernes. Je travaille
            notamment avec React, TypeScript et les technologies JavaScript pour
            créer des solutions numériques adaptées aux besoins des
            utilisateurs.
          </p>

          <p
            className="text-slate-700
dark:text-gray-300 text-lg leading-relaxed"
          >
            Mon objectif est aujourd'hui de rapprocher le monde industriel et le
            monde numérique en évoluant vers les systèmes embarqués et
            l'Internet des Objets (IoT).
          </p>
        </motion.div>

        {/* Axes professionnels */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <div
            className="
bg-slate-100
dark:bg-slate-950
border
border-slate-300
dark:border-slate-700
hover:-translate-y-0.5
rounded-xl
p-6
transition-all
duration-500
hover:border-cyan-400
hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Électrotechnique
            </h3>

            <p
              className="
text-slate-600
dark:text-gray-400
"
            >
              Maintenance électrique, automatisme industriel, diagnostic des
              systèmes et analyse technique.
            </p>
          </div>

          <div
            className="
bg-slate-100
dark:bg-slate-950
border
border-slate-300
dark:border-slate-700
hover:-translate-y-0.5
rounded-xl
p-6
transition-all
duration-500
hover:border-cyan-400
hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Développement logiciel
            </h3>

            <p
              className="
text-slate-600
dark:text-gray-400
"
            >
              Développement d'applications web et mobiles avec React,
              TypeScript, Node.js et conception d'API REST.
            </p>
          </div>

          <div
            className="
bg-slate-100
dark:bg-slate-950 
border
border-slate-300
dark:border-slate-700
hover:-translate-y-0.5
rounded-xl
p-6
transition-all
duration-500
hover:border-cyan-400
hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Évolution vers l'IoT
            </h3>

            <p
              className="
text-slate-600
dark:text-gray-400
"
            >
              Concevoir des solutions intelligentes associant électronique,
              programmation et systèmes connectés.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
