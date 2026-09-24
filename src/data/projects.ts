import type { Project } from "../types/project";
import jobdomImage from "../assets/images/projects/jobdom/jobdom-cover.png";
import ecommerceImage from "../assets/images/projects/ecommerce/ecommerce-cover.png";
import iotImage from "../assets/images/projects/iot/prototype.jpg";
import shoeImage from "../assets/images/projects/shoe/shoe-cover.png";


export const projects: Project[] = [

  {
    title: "JobDom",

    description:
      "Projet collaboratif de plateforme web permettant de faciliter la mise en relation entre recruteurs et chercheurs d'emploi au Cameroun.",

    image: jobdomImage,

    category:
      "Application Web",

    status:
      "Réalisé",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "API REST"
    ],

  github: "",
  demo: "https://jobdom.smartskills.ovh/"
  },


  {
    title: "Application E-commerce",

    description:
      "Application Full Stack de commerce électronique permettant la gestion des produits, utilisateurs et commandes avec une interface moderne.",

    image:
      ecommerceImage,

    category:
      "Web Application",

    status:
      "Réalisé",

technologies: [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "API REST"
],
  github: "",
  demo: "https://entry.jan2025.smartskills.ovh/home"
  },


  {
  title: "Application Mobile Shoe",

  description:
  "Application mobile développée en équipe permettant la consultation de produits et l'interaction avec une plateforme e-commerce depuis un smartphone.",

  image:
  shoeImage,

  category:
  "Application Mobile",

  status:
  "Réalisé",

  technologies:[
    "React Native",
    "TypeScript",
    "Node.js",
    "API REST"
  ],

  github:"",
  demo:""
},

  {
    title: "Exploration IoT & Systèmes embarqués",

    description:
      "Projet d'orientation vers les systèmes embarqués et l'Internet des Objets, basé sur l'exploration des microcontrôleurs, capteurs et architectures connectées. Cette section sera enrichie par mes futures réalisations IoT.",

    image:
      iotImage,

    category:
      "IoT & Systèmes embarqués",

    status:
      "En préparation",

    technologies: [
      "Arduino",
      "Microcontrôleurs",
      "Capteurs"
    ],

    github: "",

    demo: ""
  }

];