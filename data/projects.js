import journalit from "../public/journalit2.png";
import uia from "../public/UIA_poster.png";
import difreese from "../public/difreese2.png";
import movif from "../public/movif.png";
import optifood from "../public/optifood.png";
import dog_breed from "../public/dog_breed1.png"
import cvflow from "../public/assets/cvflow.png"
import journalit_app from '../public/assets/journalit_app.png'
import wordleIt from "../public/wordleit.png"

export const webProjects = [
  {
    id:1,
    title: "Dog Adoption",
    subtitle: "React | Tailwind | Firebase",
    description: " Web application with a sole purpose to help dogs find a home and loving owners.",
    image : dog_breed 
  },
  {
    id: 2,
    title: "Di-Free-Se",
    subtitle: "Django | Jinja | Tailwind | SKLearn",
    description: "Providing free diagnosis using Machine Learning with a sole purpose to generate awareness about various health complications and help the less fortunate individuals",
    image: difreese,
  },
  {
    id: 3,
    title: "JournalIt",
    subtitle: "Node | Express | React | Bootstrap4 ",
    description:
      "Journaling website built using the MERN stack to help people organise their tasks and journal their progress",
    image: journalit,
  },
  {
    id: 4,
    title: "UIA",
    subtitle: "Django | Jinja | Bootstrap4",
    description:
      "Website built in Django to promote instagram artist by scraping artists with less reach from specific hashtags and displaying them on the website",
    image: uia,
  },

  {
    id: 5,
    title: "Optifood",
    subtitle: "Django | Jinja | Bootstrap | SKLearn",
    description:
      "ML driven website which gives the restaurant owner an estimate of how many orders a restaurant will receive throughout the week.",
    image: optifood,
  },
  
];

export const mobileProjects = [
  {
    id:1,
    title: "CVflow",
    subtitle: "Flutter | Dart | Play Store",
    description: "App that lets the user create their own resume. The user needs to fill in the required details and chose a suitable template to generate their resume. The user can print, save and share the newly created resume",
    image : cvflow
  },
  {
    id: 2,
    title: "Journalit",
    subtitle: "Flutter | Dart | Play Store",
    description: "Task management/ journaling app made using Flutter. The user can create, edit and delete new notes / journals/ checklists. The user can add new categories to categorize notes/journals.",
    image: journalit_app,
  },
  {
    id: 3,
    title: "WordleIt",
    subtitle: "Flutter | Dart | Play Store",
    description: "Wordle clone with ongoing implementation of multiplayer feature",
    image: wordleIt,
  },
  {
    id: 4,
    title: "MovieRate",
    subtitle: "Flutter | Dart ",
    description: "A flutter application which shows the rating and description of different movies",
    image: movif,
  },
  
];

