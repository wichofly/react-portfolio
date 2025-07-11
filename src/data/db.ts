import { Project } from '@/interface/interface';

import {
  projectImages,
  myFlixImages,
  videoGameImages,
  vetImages,
  cryptoImages,
  recipeImages,
} from '@/assets/img';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Pokemon App',
    image: projectImages.pokemonImg,
    description:
      'A dynamic web application built with HTML, CSS, and JavaScript that fetches data from an external API. Users can browse the first 151 Pokémon, and clicking on a name opens a modal displaying the Pokémon’s image, type, height, weight, and abilities. The app utilizes API calls to provide real-time information and enhances user interaction with a sleek, responsive design.',
    github: 'https://github.com/wichofly/Pokemon-App',
    deploy: 'https://wichofly.github.io/Pokemon-App/',
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
    iconImages: [
      'NodeJS',
      'HTTP',
      'Express',
      'MongoDB',
      'DataBase',
      'Postman',
      'Render',
    ],
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
      overview:
        'myFlix is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides users with a seamless way to explore movies, view details about directors and genres, manage their profiles, and curate a list of their favorite movies. The app features a secure authentication system, a responsive UI, and a RESTful API backend for managing movie and user data. The backend was built using Node.js and Express to create a RESTful API that supports CRUD operations (Create, Read, Update, Delete). And The frontend was designed using React and React-Redux to create a single-page application (SPA) with smooth user interactions.',
      process: [
        {
          title: 'Backend (Server-Side Development)',
          steps: [
            'MongoDB was used as the database to store movie and user data, while Mongoose handled database interactions.',
            'Authentication & Security: Implemented JWT authentication to secure user data.',
            'API Documentation: Postman was used for endpoint testing and validation.',
          ],
        },
        {
          title: 'Frontend (Client-Side Development)',
          steps: [
            'React-Router enabled navigation between different views, including movie details and user profiles.',
            'Main View: Displays a grid of movies.',
            'Movie Details View: Provides movie descriptions, director details, and genre overviews.',
            'User Profile View: Allows users to update their information and manage favorites.',
          ],
        },
      ],
      features: [
        'User Authentication',
        'Favorite Movies List',
        'Movie Search',
        'Update User Profile Management',
        'Delete Favorite Movies Selected',
        'RESTful API',
        'Database Integration',
      ],
      toolsUsed: [
        'React',
        'Node.js',
        'Express',
        'Redux',
        'MongoDB',
        'React Bootstrap',
        'JWT (JSON Web Tokens)',
        'HTTP authentication',
        'Postman',
        'Netlify (Frontend)',
        'Render (Backend)',
      ],
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
      overview:
        'VideoGames-App is a web application designed to help users discover new and old video games. It allows users to search, filter, and sort games based on various criteria such as platform, genre, and popularity. The application integrates with the RAWG API to provide real-time game data and features a modern, responsive UI with both dark and light mode options. The project was created to combine a passion for gaming with front-end development while improving TypeScript proficiency. It focuses on state management, performance optimization, and API integration to deliver a smooth user experience.',
      process: [
        {
          title: 'API Integration & Data Fetching',
          steps: [
            'The application fetches game data from the RAWG API using Axios.',
            'React Query optimizes API calls, caches responses, and supports pagination with useInfiniteQuery.',
            'Dynamic filters enable users to sort games by genre, platform, or rating.',
          ],
        },
        {
          title: 'Frontend Development & UI Design',
          steps: [
            'Built with React & TypeScript for type safety and maintainability.',
            'Chakra UI ensures a clean and accessible interface.',
            'Infinite scrolling was integrated using react-infinite-scroll-component for seamless navigation.',
          ],
        },
        {
          title: 'State Management',
          steps: [
            'Zustand was used as a lightweight alternative to Redux for managing global state.',
            'Filters, themes, and user preferences are efficiently handled without unnecessary re-renders.',
          ],
        },
      ],
      features: [
        'Game Discovery',
        'Dynamic Filtering & Sorting',
        'Responsive UI',
        'Infinite Scrolling',
        'Optimized API Requests',
        'Game Details',
      ],
      toolsUsed: [
        'React',
        'TypeScript',
        'Chakra UI',
        'React Query',
        'Axios',
        'React Infinite Scroll',
        'Zustand ',
        'RAWG API',
        'Vercel ',
      ],
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
    deploy: 'https://veterinary-patients-app.vercel.app/',
    iconImages: ['React', 'Typescript', 'TailwindCss', 'Vercel'],
    showCaseStudy: true,
    caseStudy: {
      title: 'Veterinary Patients Case Study',
      overview:
        'The Veterinary Patients App is a patient management system designed for veterinarians and pet caretakers. It allows users to add, edit, view, and delete patient records while ensuring data persistence and seamless user interactions. Built with React, Zustand, and Tailwind CSS, this app delivers an intuitive and efficient way to manage veterinary patient information.',
      process: [
        {
          title: 'State Management with Zustand',
          steps: [
            'Zustand was used instead of Redux or Context API for simplified state management.',
            'Persist Middleware ensures that patient data is stored in local storage, preventing loss on refresh.',
            'The devtools middleware helps in debugging the application state.',
          ],
        },
        {
          title: 'Form Handling with react-hook-form',
          steps: [
            'Used register() to handle form inputs efficiently.',
            'Implemented real-time validation to guide users when entering data.',
            'Reduced unnecessary re-renders, improving form performance.',
          ],
        },
        {
          title: 'Notifications with react-toastify',
          steps: [
            'Toast messages notify users of success, errors, and actions performed.',
            'Example: When a patient is added successfully, a toast appears with "Patient Added" message.',
          ],
        },
      ],
      features: [
        'Patient Management ',
        'Patient List',
        'Form Validation',
        'Persistent State',
        'Real-time Notifications',
        'Modern UI',
      ],
      toolsUsed: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'react-hook-form',
        'react-toastify',
        'Zustand ',
        'UUID',
        'Vercel ',
      ],
      images: vetImages,
    },
  },
  {
    id: '6',
    name: 'Crypto Currency',
    image: projectImages.crypto,
    description:
      'A cryptocurrency price tracker built with React and the CoinDesk API. This app provides real-time price updates based on user-selected cryptocurrencies. It features a clean UI, interactive charts, and a responsive design, making it an ideal tool for crypto enthusiasts to stay updated with market trends.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-money-five.vercel.app/',
    iconImages: ['React', 'Typescript', 'Css', 'Zod', 'Vercel'],
    showCaseStudy: true,
    caseStudy: {
      title: 'Crypto Currency Case Study',
      overview:
        'The Cryptocurrency App is a React-based web application that allows users to fetch real-time cryptocurrency quotations by selecting a fiat currency and a cryptocurrency. It integrates the CryptoCompare API to display live price updates, high/low trading values, and percentage changes. The app features Zustand for state management, react-hook-form for form validation, and Zod for data validation, ensuring a smooth, error-free experience.',
      process: [
        {
          title: 'API Handling & Data Fetching',
          steps: [
            'Used Axios for making API requests.',
            'Implemented error handling for API failures.',
            'React Query (optional upgrade) can further optimize caching and data fetching.',
          ],
        },
        {
          title: 'State Management with Zustand',
          steps: [
            'Zustand manages user selections and API responses, ensuring minimal re-renders.',
            'Persist Middleware can be added to retain selected currency data across sessions.',
          ],
        },
        {
          title: 'Form Handling & Validation',
          steps: [
            'Used react-hook-form to reduce re-renders and enhance form performance.',
            'Zod ensures valid API responses and prevents unexpected errors.',
          ],
        },
      ],
      features: [
        'Real-time Cryptocurrency Data',
        'Dynamic Coin Selection',
        'Form Handling & Validation',
        'Error Handling & API Reliability',
        'State Management with Zustand',
        'Simple Loading Spinner',
      ],
      toolsUsed: [
        'React',
        'TypeScript',
        'CSS',
        'Axios',
        'react-hook-form',
        'react-toastify',
        'Zustand',
        'Zod',
        'CryptoCompare API',
        'Vercel ',
      ],
      images: cryptoImages,
    },
  },
  {
    id: '7',
    name: 'Drink Recipes - Generate with AI',
    image: projectImages.recipes,
    description:
      'An interactive and elegant web app that allows users to browse drink recipes by category or ingredients and generate personalized cocktail ideas using AI — combining TheCocktailDB API with OpenRouter’s AI capabilities.',
    github: 'https://github.com/wichofly/drinks-and-recipes-app',
    deploy: 'https://drink-recipes-five.vercel.app/',
    iconImages: [
      'React',
      'Typescript',
      'TailwindCss',
      'ReactRouter',
      'AI',
      'Zod',
      'Vercel',
    ],
    showCaseStudy: true,
    caseStudy: {
      title: 'Drink Recipes - Generate with AI Case Study',
      overview:
        'A React + TypeScript application designed to explore and generate drink recipes. It integrates with TheCocktailDB API for drink data and uses OpenRouter with the Vercel AI SDK for personalized AI-powered recipe suggestions. The UI is clean and responsive, optimized with lazy-loaded routes and animated modals. ',
      process: [
        {
          title: 'AI Integration & Data Handling',
          steps: [
            'Fetched data via Axios from CocktailDB API.',
            'Used Zod for runtime validation of API responses.',
            'Streamed AI-generated recipes using Vercel AI SDK + OpenRouter.',
            'Managed favorites state using Zustand with persistent storage.',
          ],
        },
        {
          title: 'Frontend Architecture',
          steps: [
            'TailwindCSS and Headless UI were used for responsive, accessible UI components.',
            'React Router and Suspense enabled lazy-loading of key routes.',
            'React Markdown rendered AI-generated content beautifully with prose styling.',
          ],
        },
      ],
      features: [
        'Explore drinks by category and ingredients',
        'Animated modal for drink details',
        'Favorites management with Zustand + localStorage',
        'AI-powered drink recipe generator based on user input',
        'Lazy-loaded routes for performance optimization',
        'Markdown rendering of AI results',
        'Toast notifications for user feedback',
      ],
      toolsUsed: [
        'React',
        'TypeScript',
        'TailwindCSS',
        'Axios',
        'Zod',
        'Zustand',
        'CocktailDB API',
        'OpenRouter API',
        'Vercel AI SDK',
        'React Markdown',
        'Headless UI',
        'Heroicons',
        'Vercel',
      ],
      images: recipeImages,
    },
  },
];
