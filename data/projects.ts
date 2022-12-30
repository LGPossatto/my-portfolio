/*

{
  id: "",
  date: "",
  title: "",
  desc: "",
  textList: [],
  techList: [],
  imgList: [
    {
      imgName: "",
      title: "",
      desc: "",
    },
    {
      imgName: "",
      title: "",
      desc: "",
    },
    {
      imgName: "",
      title: "",
      desc: "",
    },
  ],
},

*/

export interface IProjectsData {
  id: string;
  date: string;
  title: string;
  desc: string;
  stack: string;
  textList: string[];
  techList: string[];
  imgList: {
    imgName: string;
    title: string;
    desc: string;
  }[];
}

export const projectsData = [
  {
    id: "test1",
    date: "01/01/2023",
    title: "meu_portfólio",
    desc: "Meu portfólio pessoal",
    stack: "Fullstack",
    textList: [
      "Esse projeto é um portfólio pessoal, o seu principal objectivo é a exibição de outros projetos.",
      "O design do site é feito de modo a ser simples e limpo, para que os projetos possam receber mais atenção.",
    ],
    techList: ["Nextjs", "TypeScript", "Sass", "mongoDB"],
    imgList: [
      {
        imgName: "",
        title: "Mobile",
        desc: "Design responsivo dependendo da largura da tela do dispositivo.",
      },
      {
        imgName: "",
        title: "Projetos",
        desc: "Seção para apresentação dos projetos.",
      },
      {
        imgName: "",
        title: "Sobre os Projetos",
        desc: "Página para ver mais detalhes sobre cada projeto.",
      },
    ],
  },
  {
    id: "test2",
    date: "01/01/2023",
    title: "untitled-camp",
    desc: "Site de Motocross e off-road",
    stack: "Frontend",
    textList: [
      "Este projeto é um app fullstack, onde, na parte frontend é possível navegar por páginas, encontrar produtos e adicioná-los em um carrinho e criar contas pessoais. Já o backend é uma API que da suporte ao frontend.",
      "O frontend é um site sobre natureza, motocross e off-road. O site possui uma seção de shopping onde se é possível procurar por produtos e os adicioná-los a um carrinho, o site também oferece a opção de criação de uma conta pessoal simples.",
      "O backend é uma API, que oferece toda a lógica necessária para o funcionamento da parte frontend, como, criar conta, adicionar produtos ao carrinho de um usuário, etc.",
      "*O objetivo desse projeto era criar uma aplicação fullstack, onde o frontend interagia e consumia as informações providas pelo backend.",
    ],
    techList: [
      "TypeScript",
      "React",
      "NodeJs",
      "Express",
      "MongoDB",
      "Mongoose",
      "jsonwebtoken",
    ],
    imgList: [
      {
        imgName: "",
        title: "Mobile",
        desc: "Design responsivo dependendo da largura da tela do dispositivo.",
      },
      {
        imgName: "",
        title: "Shop",
        desc: "Página para procurar produtos.",
      },
      {
        imgName: "",
        title: "Cards",
        desc: "Cards promocionais e especiais.",
      },
    ],
  },
  {
    id: "test3",
    date: "01/01/2023",
    title: "e-commerce",
    desc: "Um e-commerce feito com React",
    stack: "Frontend",
    textList: [
      "Este site é um E-Commerce, onde é possível navegar por páginas e encontrar produtos, os adicionando em um carrinho para realizar a compra mais tarde.",
      "O site foi feito com base no “design” Clay Shop E-Commerce encontrado no site UI Store Design. Também foi utilizado a Fake Store API para mostrar alguns produtos e poder, assim, adicionar ou remover produtos do carrinho.",
      "*O projeto não esta finalizado, portanto, não contém todas as funcionalidades necessárias. O objetivo principal desse app é a tradução do design para o navegador, utilizando o que o React tem a oferecer.",
    ],
    techList: ["HTML", "CSS", "SASS", "TypeScript", "React"],
    imgList: [
      {
        imgName: "",
        title: "Mobile",
        desc: "Design responsivo dependendo da largura da tela do dispositivo.",
      },
      {
        imgName: "",
        title: "Shop",
        desc: "Página para procurar produtos.",
      },
      {
        imgName: "",
        title: "Produto",
        desc: "Mais detalhes sobre o produto escolhido.",
      },
    ],
  },
  {
    id: "test4",
    date: "01/01/2023",
    title: "graphql_server",
    desc: "Um servidor backend feito com GraphQl e TypeScript",
    stack: "Backend",
    textList: [
      'Este projeto é uma API backend em GraphQL. Nesta API é possível criar e fazer "login" em uma conta, onde se pode criar e salvar "eventos".',
      "O projeto faz parte de um curso em que toda a parte frontend e backend é desenvolvida. Aqui só se encontra a parte backend, onde foi modificada para utilizar TypeScript e outras tecnologias.",
      "O site foi um exercício para aprender mais sobre backend, GraphQL e TypeScript.“",
    ],
    techList: [
      "NodeJs",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Typegoose GraphQL",
      "Type-GraphQl",
    ],
    imgList: [
      {
        imgName: "",
        title: "Query Events",
        desc: "Busque por eventos, e receba de volta só aquilo que foi pedido.",
      },
      {
        imgName: "",
        title: "Contas de Usuário",
        desc: "Crie contas de usuários e faça login através de JSON Web Tokens.",
      },
      {
        imgName: "",
        title: "Crie Eventos",
        desc: "Crie eventos, salve e exclua como desejar.",
      },
    ],
  },
  {
    id: "test5",
    date: "01/01/2023",
    title: "twitter_clone",
    desc: "Um site clone do Twitter feito com React e Firebase",
    stack: "Fullstack",
    textList: [
      'Este site foi um dos meus primeiros projetos feitos utilizando React. O site é um clone do Twitter, onde o usuário pode criar posts, comentar e dar um "Like" tanto no post, quanto no comentário. O site também possui um "feed" onde os posts serão mostrados.',
      'Como esse foi um dos primeiros projetos criados por min, ele possui várias coisas que me desagradam, como, por exemplo, a não utilização de "tokens" para o processo de “login”, e a organização dos dados no Firebase.',
    ],
    techList: ["HTML", "CSS", "SASS", "JavaScript", "React", "Firebase"],
    imgList: [
      {
        imgName: "",
        title: "Mobile",
        desc: "Design responsivo dependendo da largura da tela do dispositivo.",
      },
      {
        imgName: "",
        title: "Sua Conta",
        desc: "Crie uma conta e comece a postar na sua linha do tempo. Interaja com outras contas através de likes e comentários.",
      },
      {
        imgName: "",
        title: "Explore",
        desc: "Siga outras contas para ver suas publicações e interagir com elas.",
      },
    ],
  },
  {
    id: "test6",
    date: "01/01/2023",
    title: "news_site",
    desc: "Um site de Notícias utilizando uma API externa",
    stack: "Frontend",
    textList: [
      "Este projeto é um site de notícias inspirado no site da Jovem Pan e do G1. O site possui uma página inicial onde há varias sessões com notícias de diferentes tipos exibidas em vários grids. O site também Possui uma barra de busca e varias abas para as diferentes categorias.",
      "O projeto foi feito para um melhor entendimento do funcionamento do Redux, dos layouts de grid e de APIs externas",
      "*O site não mostra notícias dinâmicas, já que ele não está conectado a API por motivos de restrição a desenvolvedores impostas pela própria API.",
    ],
    techList: ["HTML", "CSS", "SASS", "JavaScript", "React", "Redux"],
    imgList: [
      {
        imgName: "",
        title: "Mobile",
        desc: "Design responsivo dependendo da largura da tela do dispositivo.",
      },
      {
        imgName: "",
        title: "Diferentes Categorias",
        desc: "Navegue e busque por diferentes notícias.",
      },
      {
        imgName: "",
        title: "Pesquise Por Mais",
        desc: "Busque notícias mais específicas através da barra de pesquisa.",
      },
    ],
  },
];
