import { Project } from '@/interface/interface';

import pokemonImg from '@/assets/img/pokemon.png';
import movieAPI from '@/assets/img/movieApi.png';
import myFlix from '@/assets/img/myFlix.png';
import videoGames from '@/assets/img/videoGames.png';
import crypto from '@/assets/img/cryptoCurrency.png';
import vet from '../assets/img/verterinary.png';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Pokemon App',
    image: pokemonImg,
    description:
      'A dynamic web application built with HTML, CSS, and JavaScript that fetches data from an external API. Users can browse the first 151 Pokémon, and clicking on a name opens a modal displaying the Pokémon’s image, type, height, weight, and abilities. The app utilizes API calls to provide real-time information and enhances user interaction with a sleek, responsive design.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['Html', 'Css', 'JS'],
  },
  {
    id: '2',
    name: 'Movie API',
    image: movieAPI,
    description:
      'A RESTful API developed with Node.js, Express, and MongoDB to manage movie and user data. This backend service allows users to register, log in, and manage their movie favorites. It interacts with a non-relational MongoDB database via Mongoose, ensuring efficient data retrieval and security. Designed for scalability, the API includes full CRUD operations and authentication features.',
    github: 'https://github.com/wichofly/movie-api',
    deploy: 'https://wichoflix.onrender.com/documentation',
    iconImages: ['NodeJS', 'Express', 'MongoDB', 'DataBase'],
  },
  {
    id: '3',
    name: 'My Flix',
    image: myFlix,
    description:
      'A full-stack movie application built using the MERN (MongoDB, Express, React, Node.js) stack. This app provides a seamless user experience where users can sign up, log in, search for movies, add/remove favorites, and update their profile. It integrates with the Movie API backend, ensuring smooth data flow between the client and server.',
    github: 'https://github.com/wichofly/myFlix-client',
    deploy: 'https://wichoflix-client-react.netlify.app/',
    iconImages: ['React', 'Css'],
  },
  {
    id: '4',
    name: 'Video Games',
    image: videoGames,
    description:
      'A modern gaming discovery app built with React, TypeScript, and Chakra UI. It fetches and displays data on various video games, allowing users to explore both trending and classic games. Features include genre filtering, platform selection, and detailed game information. The responsive UI ensures a great experience across all devices.',
    github: 'https://github.com/wichofly/videoGames-app',
    deploy: 'https://video-games-app-fawn.vercel.app/',
    iconImages: ['React', 'Typescript'],
  },
  {
    id: '5',
    name: 'Crypto Currency',
    image: crypto,
    description:
      'A cryptocurrency price tracker built with React and the CoinDesk API. This app provides real-time price updates based on user-selected cryptocurrencies. It features a clean UI, interactive charts, and a responsive design, making it an ideal tool for crypto enthusiasts to stay updated with market trends.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['React', 'Typescript'],
  },
  {
    id: '6',
    name: 'Veterinary Patients',
    image: vet,
    description:
      'A veterinary patient management system built with React, featuring full CRUD operations. Users can add, edit, view, and delete patient records in an intuitive interface. The app incorporates local storage for persistent data and offers a smooth user experience for veterinary clinics or pet owners.',
    github: 'https://github.com/wichofly/veterinaryPatients-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
    iconImages: ['React', 'Typescript'],
  },
];
  