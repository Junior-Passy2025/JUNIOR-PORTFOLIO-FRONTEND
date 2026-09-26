import { motion } from "framer-motion";
import { Zap, Code2, Cpu, Settings } from "lucide-react";
import { skills } from "../data/skills";

const icons = {
  zap: Zap,
  code: Code2,
  cpu: Cpu,
  settings: Settings,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-white
        dark:bg-slate-950
        text-slate-900
        dark:text-white
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
        "
      >
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Mes{" "}
            <span className="text-cyan-400">
              compétences
            </span>
          </h2>

          <p
            className="
              mt-4
              text-slate-600
              dark:text-gray-400
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Un profil hybride combinant l'électrotechnique,
            le développement logiciel et une orientation vers
            les systèmes embarqués et l'IoT.
          </p>
        </motion.div>

        {/* Cartes compétences */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
              ? icons[skill.icon as keyof typeof icons]
              : null;

            return (
              <motion.div
                key={skill.category}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  y: -5,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-300
                  dark:border-slate-700
                  rounded-xl
                  p-6
                  hover:border-cyan-400
                  dark:hover:border-cyan-400
                  hover:shadow-lg
                  hover:shadow-cyan-500/10
                  transition
                "
              >
                {/* Titre avec icône */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-5
                  "
                >
                  {Icon && (
                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />
                  )}

                  <h3
                    className="
                      text-xl
                      font-semibold
                      text-cyan-400
                    "
                  >
                    {skill.category}
                  </h3>
                </div>

                {/* Liste des compétences */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {skill.skills.map((item) => (
                    <motion.span
                      key={item}

                      whileHover={{
                        scale: 1.05,
                        y: -3,
                      }}

                      transition={{
                        duration: 0.2,
                      }}

                      className="
                        px-3
                        py-2
                        rounded-lg
                        bg-white
                        dark:bg-slate-950
                        border
                        border-slate-300
                        dark:border-slate-700
                        text-slate-700
                        dark:text-gray-300
                        text-sm
                        cursor-default
                        hover:border-cyan-400
                        hover:text-cyan-500
                        dark:hover:text-cyan-400
                        transition
                      "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;