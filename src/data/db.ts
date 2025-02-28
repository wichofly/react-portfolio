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
      'This is a Good App using JavaScript to show pokemon you are interested in.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
  },
  {
    id: '2',
    name: 'Movie API',
    image: movieAPI,
    description:
      'Interact with HTTP request and responses. The API created is able to interact with and respond to data request about movies or users, returning the requested data to the client.',
    github: 'https://github.com/wichofly/movie-api',
    deploy: 'https://wichoflix.onrender.com/documentation',
  },
  {
    id: '3',
    name: 'My Flix',
    image: myFlix,
    description:
      'In this project, I created the client-side using React from my movie-api database. In it, you can register as a user and navigate through the app. You can add movies to your favorites list as well as remove them, search for a movie and update your user.',
    github: 'https://github.com/wichofly/myFlix-client',
    deploy: 'https://wichoflix-client-react.netlify.app/',
  },
  {
    id: '4',
    name: 'Video Games',
    image: videoGames,
    description:
      'VideoGames-App is a web application designed to help users discover or see old video games.',
    github: 'https://github.com/wichofly/videoGames-app',
    deploy: 'https://video-games-app-fawn.vercel.app/',
  },
  {
    id: '5',
    name: 'Crypto Currency',
    image: crypto,
    description:
      'This project is to provide an easy-to-use cryptocurrency that fetches real-time its prices based on user selection.',
    github: 'https://github.com/wichofly/cryptoMoney-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
  },
  {
    id: '6',
    name: 'Veterinary Patients',
    image: vet,
    description:
      'This project is a Veterinary Patient App where users can add, edit, view, and delete patient information. It is built using React and various modern tools for state management, form handling, and notifications.',
    github: 'https://github.com/wichofly/veterinaryPatients-app',
    deploy: 'https://crypto-app-flax-ten.vercel.app/',
  },
];
