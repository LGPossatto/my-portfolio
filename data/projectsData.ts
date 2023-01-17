import { TECHTYPES } from "./techTypes";

export interface IFav {
  id: string;
  title: string;
  desc: string;
  techList: string[];
}

export interface IProjectsData extends IFav {
  date: string;
  stack: string;
  textList: string[];
  techList: string[];
  gitLink: string;
  siteLink: string;
  imgList: {
    imgName: string;
    title: string;
    desc: string;
  }[];
}

export const projectsFavIdList = [
  "meu_portfolio",
  "untitled_camp",
  "e_commerce_clay",
  "graphql_server",
  "twitter_clone",
  "news_site",
];

export const projectsData: IProjectsData[] = [
  {
    id: "meu_portfolio",
    date: "01/01/2023",
    title: "Meu Portfólio",
    desc: "Meu portfólio pessoal",
    stack: "Fullstack",
    gitLink: "https://github.com/LGPossatto/my-portfolio",
    siteLink: "https://lgpossatto.netlify.app",
    textList: [
      "Esse projeto é um portfólio pessoal, o seu principal objectivo é a exibição de outros projetos.",
      "O design do site é feito de modo a ser simples e limpo, para que os projetos possam receber mais atenção.",
    ],
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.NEXTJS,
    ],
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
    id: "untitled_camp",
    date: "06/01/2022",
    title: "untitled-camp",
    desc: "Site de motocross e off-road",
    stack: "FullStack",
    gitLink: "https://github.com/LGPossatto/untitled-camp",
    siteLink: "https://untitledcamp.netlify.app",
    textList: [
      "Este projeto é um app fullstack, onde, na parte frontend é possível navegar por páginas, encontrar produtos e adicioná-los em um carrinho e criar contas pessoais. Já o backend é uma API que da suporte ao frontend.",
      "O frontend é um site sobre natureza, motocross e off-road. O site possui uma seção de shopping onde se é possível procurar por produtos e os adicioná-los a um carrinho, o site também oferece a opção de criação de uma conta pessoal simples.",
      "O backend é uma API, que oferece toda a lógica necessária para o funcionamento da parte frontend, como, criar conta, adicionar produtos ao carrinho de um usuário, etc.",
      "*O objetivo desse projeto era criar uma aplicação fullstack, onde o frontend interagia e consumia as informações providas pelo backend.",
    ],
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.NODEJS,
      TECHTYPES.EXPRESS,
      TECHTYPES.MONGODB,
    ],
    imgList: [
      {
        imgName: "untitled-camp_01",
        title: "Página inicial",
        desc: '"Topo da página inicial, contém uma barra de navegação simples e um "header" com um botão "cta".',
      },
      {
        imgName: "untitled-camp_02",
        title: "Página inicial",
        desc: "Cartões especiais para equipamentos e promoções.",
      },
      {
        imgName: "untitled-camp_03",
        title: "Página inicial",
        desc: 'Cartões para as diferentes categorias da sessão de "shopping".',
      },
      {
        imgName: "untitled-camp_04",
        title: "Página inicial",
        desc: "Carrossel mostrando alguns produtos em promoção.",
      },
      {
        imgName: "untitled-camp_05",
        title: "Página inicial",
        desc: 'Últimas sessões da página inicial, mostrando tanto uma sessão "About us" e o "footer" do site.',
      },
      {
        imgName: "untitled-camp_06",
        title: 'Página "shop"',
        desc: "Página contendo produtos e opções de busca.",
      },
      {
        imgName: "untitled-camp_07",
        title: 'Página "shop"',
        desc: 'Página "shop" contendo somente produtos que batem com as opções de busca.',
      },
      {
        imgName: "untitled-camp_08",
        title: "Página do produto",
        desc: "Página contendo os detalhes do produto e opções de compra.",
      },
      {
        imgName: "untitled-camp_09",
        title: "Página do produto",
        desc: "Mais informações sobre o produto.",
      },
      {
        imgName: "untitled-camp_10",
        title: "Página do produto",
        desc: "Seção oferecendo mais produtos com base nas compras passadas e produtos recentemente procurados.",
      },
      {
        imgName: "untitled-camp_11",
        title: 'Página "About us"',
        desc: "Página contendo informações sobre o site e a empresa.",
      },
      {
        imgName: "untitled-camp_12",
        title: 'Página de "sign up"',
        desc: "Nessa página é possível se conectar a uma conta pessoal.",
      },
      {
        imgName: "untitled-camp_13",
        title: 'Página "cart"',
        desc: '"Cart" contendo produtos adicionados pelo usuário.',
      },
      {
        imgName: "untitled-camp_14",
        title: "Mobile",
        desc: "O site é completamente responsivo, se adaptando a diferentes tamanhos de tela.",
      },
      {
        imgName: "untitled-camp_15",
        title: "Mobile",
        desc: "Mais exemplos da versão de tela menores.",
      },
    ],
  },
  {
    id: "twitter_clone",
    date: "06/02/2021",
    title: "Twitter Clone",
    desc: "Um site clone do Twitter feito com React e Firebase",
    stack: "Fullstack",
    gitLink:
      "https://github.com/LGPossatto/twitter-clone-with-react-and-firebase",
    siteLink: "https://lg-twitter-clone.netlify.app",
    textList: [
      'Este site foi um dos meus primeiros projetos feitos utilizando React. O site é um clone do Twitter, onde o usuário pode criar posts, comentar e dar um "Like" tanto no post, quanto no comentário. O site também possui um "feed" onde os posts serão mostrados.',
      'Como esse foi um dos primeiros projetos criados por min, ele possui várias coisas que me desagradam, como, por exemplo, a não utilização de "tokens" para o processo de “login”, e a organização dos dados no Firebase.',
    ],
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.FIREBASE,
    ],
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
    id: "e_commerce_clay",
    date: "11/04/2021",
    title: "E-Commerce",
    desc: "Um e-commerce feito com React",
    stack: "Frontend",
    gitLink: "https://github.com/LGPossatto/e-commerce-clay",
    siteLink: "https://claycommerce.netlify.app",
    textList: [
      "Este site é um E-Commerce, onde é possível navegar por páginas e encontrar produtos, os adicionando em um carrinho para realizar a compra mais tarde.",
      "O site foi feito com base no “design” Clay Shop E-Commerce encontrado no site UI Store Design. Também foi utilizado a Fake Store API para mostrar alguns produtos e poder, assim, adicionar ou remover produtos do carrinho.",
      "*O projeto não esta finalizado, portanto, não contém todas as funcionalidades necessárias. O objetivo principal desse app é a tradução do design para o navegador, utilizando o que o React tem a oferecer.",
    ],
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.REACT,
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
        title: "Produto",
        desc: "Mais detalhes sobre o produto escolhido.",
      },
    ],
  },
  {
    id: "graphql_server",
    date: "08/07/2021",
    title: "Servidor GraphQL",
    desc: "Um servidor backend feito com GraphQl e TypeScript",
    stack: "Backend",
    gitLink:
      "https://github.com/LGPossatto/graphql-apollo-mongodb-typescript-event-booking",
    siteLink:
      "https://graphql-apollo-mongodb-typescript-event.onrender.com/graphql",
    textList: [
      'Este projeto é uma API backend em GraphQL. Nesta API é possível criar e fazer "login" em uma conta, onde se pode criar e salvar "eventos".',
      "O projeto faz parte de um curso em que toda a parte frontend e backend é desenvolvida. Aqui só se encontra a parte backend, onde foi modificada para utilizar TypeScript e outras tecnologias.",
      "O site foi um exercício para aprender mais sobre backend, GraphQL e TypeScript.“",
    ],
    techList: [
      TECHTYPES.NODEJS,
      TECHTYPES.EXPRESS,
      TECHTYPES.TYPESCRIPT,
      TECHTYPES.MONGODB,
      TECHTYPES.GRAPHQL,
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
    id: "news_site",
    date: "03/07/2021",
    title: "Site de Notícias",
    desc: "Um site de Notícias utilizando uma API externa",
    stack: "Frontend",
    gitLink: "https://github.com/LGPossatto/news-site",
    siteLink: "https://salaodenoticias.netlify.app",
    textList: [
      "Este projeto é um site de notícias inspirado no site da Jovem Pan e do G1. O site possui uma página inicial onde há varias sessões com notícias de diferentes tipos exibidas em vários grids. O site também Possui uma barra de busca e varias abas para as diferentes categorias.",
      "O projeto foi feito para um melhor entendimento do funcionamento do Redux, dos layouts de grid e de APIs externas",
      "*O site não mostra notícias dinâmicas, já que ele não está conectado a API por motivos de restrição a desenvolvedores impostas pela própria API.",
    ],
    techList: [
      TECHTYPES.HTML,
      TECHTYPES.CSS,
      TECHTYPES.SASS,
      TECHTYPES.JAVASCRIPT,
      TECHTYPES.REACT,
      TECHTYPES.REDUX,
    ],
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
