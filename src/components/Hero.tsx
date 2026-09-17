import { motion } from "framer-motion";
import imageProfil from "../assets/images/profile/imageProfile.jpg";

const firstName = "Junior Passy";
const lastName = "SUFFO NZOKOU";

const Hero = () => {
  return (
    <section
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        items-center
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Partie texte */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-4">
            Bonjour, je suis
          </p>

          <motion.h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              mb-6
            "
          >
            <motion.span>
              {firstName.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 8,
                    times: [0, 0.25, 0.9, 1],
                    delay: index * 0.12,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            <br />

            <motion.span className="text-cyan-400">
              {lastName.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 8,
                    times: [0, 0.25, 0.9, 1],
                    delay: (firstName.length + index) * 0.12,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <h2
            className="
              text-2xl
              md:text-3xl
              text-cyan-400
              mb-4
            "
          >
            Électrotechnicien | Développeur Full Stack JavaScript
          </h2>

          <p
            className="
              text-lg
              text-gray-400
              mb-6
            "
          >
            En évolution vers les systèmes embarqués et l'IoT
          </p>

          <p
            className="
              text-lg
              text-gray-300
              leading-relaxed
              max-w-xl
            "
          >
            Électrotechnicien de formation avec plusieurs années
            d'expérience dans la maintenance des systèmes électriques,
            j'ai développé par la suite des compétences en programmation
            web et mobile. Mon objectif est aujourd'hui d'évoluer vers
            les systèmes embarqués et l'IoT.
          </p>

          <div
            className="
              mt-8
              flex
              gap-4
              flex-wrap
            "
          >
            <a
              href="#projects"
              className="
                px-6
                py-3
                bg-cyan-500
                text-slate-950
                rounded-lg
                font-semibold
                hover:bg-cyan-400
                transition
              "
            >
              Découvrir mes projets
            </a>

            <a
              href="/cv.pdf"
              className="
                px-6
                py-3
                border
                border-cyan-500
                rounded-lg
                font-semibold
                hover:bg-cyan-500
                hover:text-slate-950
                transition
              "
            >
              Télécharger mon CV
            </a>
          </div>
        </motion.div>

        {/* Partie image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            justify-center
            relative
          "
        >
          {/* Halo lumineux */}
          <div
            className="
              absolute
              w-96
              h-96
              bg-cyan-500/20
              rounded-full
              blur-3xl
            "
          ></div>

          {/* Badge haut */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -top-6
              left-1/2
              -translate-x-1/2
              bg-slate-800/90
              border
              border-cyan-400
              px-4
              py-2
              rounded-xl
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              shadow-lg
            "
          >
            Électrotechnique 
          </motion.div>

          {/* Badge gauche */}
          <motion.div
            animate={{ x: [0, -2, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-25
              bg-slate-800/90
              border
              border-cyan-400
              px-4
              py-2
              rounded-xl
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              shadow-lg
            "
          >
            Maintenance électrique
          </motion.div>

          {/* Badge droite */}
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-1
              bg-slate-800/90
              border
              border-cyan-400
              px-4
              py-2
              rounded-xl
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              shadow-lg
            "
          >
            React.js
          </motion.div>

          {/* Badge bas */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-6
              left-1/2
              -translate-x-1/2
              bg-slate-800/90
              border
              border-cyan-400
              px-4
              py-2
              rounded-xl
              text-cyan-400
              text-sm
              md:text-base
              font-semibold
              shadow-lg
            "
          >
            Embedded Systems / IoT
          </motion.div>

          {/* Photo flottante */}
          <motion.img
            src={imageProfil}
            alt="Junior Passy SUFFO NZOKOU"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              w-72
              h-72
              md:w-96
              md:h-96
              object-cover
              rounded-full
              border-4
              border-cyan-400
              shadow-lg
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;