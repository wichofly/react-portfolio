import { Project } from '@/interface/interface';

import { projectImages, myFlixImages, videoGameImages } from '@/assets/img';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Pokemon App',
    image: projectImages.pokemonImg,
    description:
      'A dynamic web application built with HTML, CSS, and JavaScript that fetches data from an external API. Users can browse the first 151 Pokémon, and clicking on a name opens a modal displaying the Pokémon’s image, type, height, weight, and abilities. The app utilizes API calls to provide real-time information and enhances user interaction with a sleek, responsive design.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['Html', 'Css', 'JS'],
    showCaseStudy: false,
  },
  {
    id: '2',
    name: 'Movie API',
    image: projectImages.movieAPI,
    description:
      'A RESTful API developed with Node.js, Express, and MongoDB to manage movie and user data. This backend service allows users to register, log in, and manage their movie favorites. It interacts with a non-relational MongoDB database via Mongoose, ensuring efficient data retrieval and security. Designed for scalability, the API includes full CRUD operations and authentication features.',
    github: 'https://github.com/wichofly/movie-api',
    deploy: 'https://wichoflix.onrender.com/documentation',
    iconImages: ['NodeJS', 'HTTP', 'Express', 'MongoDB', 'DataBase'],
    showCaseStudy: false,
  },
  {
    id: '3',
    name: 'My Flix',
    image: projectImages.myFlix,
    description:
      'A full-stack movie application built using the MERN (MongoDB, Express, React, Node.js) stack. This app provides a seamless user experience where users can sign up, log in, search for movies, add/remove favorites, and update their profile. It integrates with the Movie API backend, ensuring smooth data flow between the client and server.',
    github: 'https://github.com/wichofly/myFlix-client',
    deploy: 'https://wichoflix-client-react.netlify.app/',
    iconImages: ['React', 'Css', 'ReactBootstrap', 'Redux', 'Netlify'],
    showCaseStudy: true,
    caseStudy: {
      title: 'My Flix Case Study',
      overview: 'MyFlix is a web app for managing movie preferences...',
      features: ['User Authentication', 'Favorites List', 'Movie Search'],
      toolsUsed: ['React', 'Redux', 'Node.js', 'MongoDB'],
      images: myFlixImages,
    },
  },
  {
    id: '4',
    name: 'Video Games',
    image: projectImages.videoGames,
    description:
      'A modern gaming discovery app built with React, TypeScript, and Chakra UI. It fetches and displays data on various video games, allowing users to explore both trending and classic games. Features include genre filtering, platform selection, and detailed game information. The responsive UI ensures a great experience across all devices.',
    github: 'https://github.com/wichofly/videoGames-app',
    deploy: 'https://video-games-app-fawn.vercel.app/',
    iconImages: ['React', 'Typescript', 'ChakraUI', 'ReactQuery', 'Vercel'],
    showCaseStudy: true,
    caseStudy: {
      title: 'Video Games Case Study',
      overview: 'A platform for discovering new and old video games...',
      features: ['Genre Filtering', 'Platform Selection', 'Game Details'],
      toolsUsed: ['React', 'TypeScript', 'Chakra UI'],
      images: videoGameImages,
    },
  },
  {
    id: '5',
    name: 'Veterinary Patients',
    image: projectImages.vet,
    description:
      'A veterinary patient management system built with React, featuring full CRUD operations. Users can add, edit, view, and delete patient records in an intuitive interface. The app incorporates local storage for persistent data and offers a smooth user experience for veterinary clinics or pet owners.',
    github: 'https://github.com/wichofly/veterinaryPatients-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['React', 'Typescript', 'TailwindCss', 'Vercel'],
    showCaseStudy: true,
  },
  {
    id: '6',
    name: 'Crypto Currency',
    image: projectImages.crypto,
    description:
      'A cryptocurrency price tracker built with React and the CoinDesk API. This app provides real-time price updates based on user-selected cryptocurrencies. It features a clean UI, interactive charts, and a responsive design, making it an ideal tool for crypto enthusiasts to stay updated with market trends.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['React', 'Typescript', 'Css', 'Zod', 'Vercel'],
    showCaseStudy: true,
  },
];
