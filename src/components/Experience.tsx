import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        min-h-screen
        bg-white
        dark:bg-slate-900
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
            Mon{" "}
            <span className="text-cyan-400">
              expérience
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
            Un parcours construit autour de la maintenance électrique,
            du diagnostic technique et de l'évolution vers les technologies
            numériques.
          </p>
        </motion.div>


        {/* Timeline */}
        <div
          className="
            space-y-8
          "
        >

          {experiences.map((experience, index) => (

            <motion.div
              key={experience.company}

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.7
              }}

              viewport={{
                once: true
              }}

              className="
                bg-slate-100
                dark:bg-slate-950
                border
                border-slate-300
                dark:border-cyan-500/30
                rounded-xl
                p-6
                hover:border-cyan-400
                transition-all
                duration-500
              "
            >

              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:justify-between
                  md:items-center
                  mb-4
                "
              >

                <div>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-cyan-400
                    "
                  >
                    {experience.company}
                  </h3>


                  <p
                    className="
                      text-slate-700
                      dark:text-gray-300
                      mt-1
                    "
                  >
                    {experience.role}
                  </p>

                </div>


                <span
                  className="
                    text-sm
                    text-slate-500
                    dark:text-gray-400
                    mt-2
                    md:mt-0
                  "
                >
                  {experience.period}
                </span>

              </div>


              <p
                className="
                  text-slate-700
                  dark:text-gray-300
                  leading-relaxed
                  mb-5
                "
              >
                {experience.description}
              </p>



              {/* Compétences associées */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {experience.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-white
                      dark:bg-slate-900
                      border
                      border-slate-300
                      dark:border-slate-700
                      text-sm
                      text-slate-700
                      dark:text-gray-300
                      hover:text-cyan-400
                      hover:border-cyan-400
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>


            </motion.div>

          ))}

        </div>


      </div>
    </section>
  );
};

export default Experience;