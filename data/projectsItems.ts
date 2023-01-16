import { TECHTYPES } from "./techTypes";

export interface IProjectsItems {
  title: string;
  desc: string;
  date: string;
  gitLink: string;
  techList: string[];
}

export const projectsItems: IProjectsItems[] = [
  {
    title: "flutter-list-app",
    desc: 'Projeto feito para aprender Flutter no curso "Flutter Tutorial for Beginners" por The Net Ninja.',
    date: new Date("12/01/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/flutter-list-app/",
    techList: [TECHTYPES.ANDROID, TECHTYPES.DART, TECHTYPES.FLUTTER],
  },
  {
    title: "flutter-simple-card",
    desc: 'Projeto feito para aprender Flutter no curso "Flutter Tutorial for Beginners" por The Net Ninja.',
    date: new Date("12/01/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/flutter-simple-card",
    techList: [TECHTYPES.ANDROID, TECHTYPES.DART, TECHTYPES.FLUTTER],
  },
  {
    title: "flutter-crash-course",
    desc: 'Projeto feito para aprender Flutter no curso "Flutter Crash Course" pela Traversy Media.',
    date: new Date("11/19/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/flutter-crash-course",
    techList: [TECHTYPES.ANDROID, TECHTYPES.DART, TECHTYPES.FLUTTER],
  },
  {
    title: "android-fundamentals-course",
    desc: 'Projeto feito para aprender sobre desenvolvimento android no curso "ANDROID FUNDAMENTALS FOR BEGINNERS" por Philipp Lackner.',
    date: new Date("10/20/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/android-fundamentals-course",
    techList: [TECHTYPES.ANDROID, TECHTYPES.KOTLIN],
  },
  {
    title: "react-native-crash-course",
    desc: 'Projeto feito para aprender sobre React Native no curso "The React Native Crash Course".',
    date: new Date("08/29/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/my-old-portfolio",
    techList: [TECHTYPES.TYPESCRIPT, TECHTYPES.REACT_NATIVE],
  },
  {
    title: "untitled-camp",
    desc: "Site de motocross e off-road.",
    date: new Date("06/01/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/untitled-camp",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.NODEJS,
      TECHTYPES.MONGODB,
    ],
  },
  {
    title: "my-old-portfolio",
    desc: "Portfólio antecessor ao atual portfólio.",
    date: new Date("02/03/2022 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/my-old-portfolio",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
    ],
  },
  {
    title: "ztm-shop",
    desc: 'Projeto feito no curso "Complete React Developer" pela ZTM',
    date: new Date("11/18/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/ztm-shop",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.JEST,
    ],
  },
  {
    title: "e-commerce-clay",
    desc: "Site de E-commerce feito para estudar CSS.",
    date: new Date("11/04/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/e-commerce-clay",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
    ],
  },
  {
    title: "algorithms-and-data-structures",
    desc: 'Algoritmos e Estruturas de Dados que fazem parte do curso "JavaScript Algorithms and Data Structures Masterclass" por Colt Steele.',
    date: new Date("08/11/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/algorithms-and-data-structures",
    techList: [TECHTYPES.JAVASCRIPT, TECHTYPES.TYPESCRIPT],
  },
  {
    title: "react-testing-library-crash-course",
    desc: 'Projeto feito no curso "React Testing Library Crash Course" pela Laith Academy.',
    date: new Date("08/11/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/react-testing-library-crash-course",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.JEST,
    ],
  },
  {
    title: "graphql-apollo-mongodb-typescript-event-booking",
    desc: 'Backend do site "Event Booking", que faz parte do curso "Build a Project with GraphQL, Node, MongoDB and React.js" pela Academind.',
    date: new Date("08/07/2021 UTC").toISOString(),
    gitLink:
      "https://github.com/LGPossatto/graphql-apollo-mongodb-typescript-event-booking",
    techList: [
      TECHTYPES.NODEJS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.MONGODB,
      TECHTYPES.GRAPHQL,
    ],
  },
  {
    title: "react-apollo-typescript-event-booking",
    desc: 'Frontend do site "Event Booking", que faz parte do curso "Build a Project with GraphQL, Node, MongoDB and React.js" pela Academind.',
    date: new Date("08/06/2021 UTC").toISOString(),
    gitLink:
      "https://github.com/LGPossatto/react-apollo-typescript-event-booking",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
    ],
  },
  {
    title: "twitter-clone-with-react-and-firebase",
    desc: "Site clone do Twitter.",
    date: new Date("06/02/2021 UTC").toISOString(),
    gitLink:
      "https://github.com/LGPossatto/twitter-clone-with-react-and-firebase",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.FIREBASE,
    ],
  },
  {
    title: "it-logger",
    desc: 'Projeto feito no curso "React Front To Back" pela Traversy Media.',
    date: new Date("04/06/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.JAVASCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.REDUX,
    ],
  },
  {
    title: "wood-furniture-site",
    desc: "Teste de layout usando um design encontrado na internet.",
    date: new Date("03/22/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/wood-furniture-site",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
    ],
  },
  {
    title: "news-site",
    desc: "Site utilizando uma API externa.",
    date: new Date("03/07/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/news-site",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
    ],
  },
  {
    title: "github-finder",
    desc: 'Site que busca usuários do GitHub feito no curso "React Front To Back" pela Traversy Media.',
    date: new Date("03/04/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/github-finder",
    techList: [TECHTYPES.HTML, TECHTYPES.CSS, TECHTYPES.REACT],
  },
  {
    title: "e-commerce-course",
    desc: 'Projeto feito no curso "Complete React Developer" pela ZTM.',
    date: new Date("02/25/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/e-commerce-course",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.REDUX,
    ],
  },
  {
    title: "grid-site-layout",
    desc: "Site genérico feito para aprender e testar o formato grid.",
    date: new Date("02/18/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/grid-site-layout",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
    ],
  },
  {
    title: "materialize-project",
    desc: 'Projeto para test o framework "Materialize" feito no curso "Build A Travel Agency Theme With Materialize CSS 1.0.0" pela Traversy Media.',
    date: new Date("02/06/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/materialize-project",
    techList: [TECHTYPES.HTML],
  },
  {
    title: "discord-gta-clan-site",
    desc: "Um site feito para um amigo, como forma de exercício.",
    date: new Date("01/18/2021 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/discord-gta-clan-site",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
    ],
  },
  {
    title: "forntend-mentor-challenges",
    desc: 'Desafios do site "Frontend Mentor", feitos para aprender HTML e CSS.',
    date: new Date("12/27/2020 UTC").toISOString(),
    gitLink: "https://github.com/LGPossatto/forntend-mentor-challenges",
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
    ],
  },
];
