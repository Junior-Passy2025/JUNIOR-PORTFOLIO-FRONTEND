import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";


const Projects = () => {

  return (
    <section
      id="projects"
      className="
        bg-slate-900
        text-white
        pb-20
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
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          viewport={{
            once: true
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
            Mes{" "}
            <span className="text-cyan-400">
              projets
            </span>
          </h2>


          <p
            className="
              mt-4
              text-gray-400
              text-lg
              max-w-3xl
              mx-auto
            "
          >
            Découvrez mes réalisations en développement logiciel
            ainsi que mon évolution vers les systèmes connectés.
          </p>

        </motion.div>



        {/* Cartes projets */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {projects.map((project, index) => (

            <motion.article

              key={project.title}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}

              viewport={{
                once: true
              }}

              whileHover={{
                y: -8
              }}

              className="
                bg-slate-950
                border
                border-cyan-500/30
                rounded-xl
                overflow-hidden
                hover:border-cyan-400
                transition
              "
            >


              {/* Image */}
              <div
                className="
                  h-60
                  overflow-hidden
                  bg-slate-900
                "
              >

                <motion.img

                  src={project.image}

                  alt={project.title}

                  whileHover={{
                    scale: 1.08
                  }}

                  transition={{
                    duration: 0.4
                  }}

                  className="
                    w-full
                    h-full
                    object-cover
                  "

                />

              </div>




              {/* Contenu */}
              <div
                className="
                  p-6
                "
              >


                {/* Titre + statut */}
                <div
                  className="
                    flex
                    justify-between
                    items-start
                    gap-3
                    mb-4
                  "
                >

                  <div>

                    <h3
                      className="
                        text-xl
                        font-semibold
                        text-cyan-400
                      "
                    >
                      {project.title}
                    </h3>


                    <p
                      className="
                        text-sm
                        text-gray-400
                        mt-1
                      "
                    >
                      {project.category}
                    </p>

                  </div>



                  {project.status && (

                    <span
                      className="
                        text-sm
                        px-4
                        py-2
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-400
                        border
                        border-cyan-500/30
                        whitespace-nowrap
                      "
                    >
                      {project.status}
                    </span>

                  )}

                </div>





                {/* Description */}
                <p
                  className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                    mb-5
                  "
                >
                  {project.description}
                </p>





                {/* Technologies */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mb-6
                  "
                >

                  {project.technologies.map((tech) => (

                    <span

                      key={tech}

                      className="
                        px-3
                        py-1
                        rounded-lg
                        bg-slate-900
                        border
                        border-slate-700
                        text-xs
                        text-gray-300
                      "

                    >
                      {tech}
                    </span>

                  ))}

                </div>





                {/* Actions projet */}
                <div
                  className="
                    border-t
                    border-slate-800
                    pt-5
                    flex
                    items-center
                    gap-6
                  "
                >


                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="
                        flex
                        items-center
                        gap-2
                        text-cyan-400
                        font-medium
                        hover:text-cyan-300
                        transition
                      "
                    >

                      Voir le projet

                      <ExternalLink size={18}/>

                    </a>

                  )}




                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"

                      className="
                        flex
                        items-center
                        gap-2
                        text-gray-400
                        hover:text-white
                        transition
                      "
                    >

                      Code

                      <FaGithub size={18}/>

                    </a>

                  )}


                </div>


              </div>


            </motion.article>

          ))}


        </div>



        {/* Bouton GitHub global */}
        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

          className="
            flex
            justify-center
            mt-16
          "

        >

          <a

            href="https://github.com/Junior-Passy2025"

            target="_blank"

            rel="noopener noreferrer"

            className="
              flex
              items-center
              gap-3
              px-8
              py-4
              rounded-xl
              bg-white
              text-slate-900
              font-semibold
              shadow-lg
              hover:bg-cyan-400
              transition
            "

          >

            Découvrir plus sur GitHub

            <FaGithub size={22}/>

          </a>


        </motion.div>


      </div>

    </section>
  );
};


export default Projects;