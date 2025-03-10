import { IconType } from 'react-icons';
import { FaBrain, FaRunning } from 'react-icons/fa';
import { FaMountainCity, FaPeopleRobbery } from 'react-icons/fa6';
import { GiHiking, GiRead, GiSoccerBall } from 'react-icons/gi';
import { MdOutlineComputer } from 'react-icons/md';
import { TbBeach } from 'react-icons/tb';

export const techSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'JWT (JSON Web Tokens)',
  'Postman',
  'RestAPI',
  'React',
  'React Query',
  'Zustand',
  'Zod',
  'AWS Lambda',
  'Redux',
  'Test-Driven Development (TDD)',
  'Behavior-Driven Development (BDD)',
  'Google Firebase',
  'GIT',
  'Github',
  'Responsive Design',
  'React Bootstrap',
  'Chakra UI',
  'Tailwind CSS',
];

export const enjoyList: { element: IconType; label: string }[] = [
  { element: GiSoccerBall, label: 'Playing soccer' },
  { element: MdOutlineComputer, label: 'Programming' },
  { element: FaBrain, label: 'Learning new skills' },
  { element: FaPeopleRobbery, label: 'Getting to know people' },
  { element: FaMountainCity, label: 'Getting to know new places' },
  { element: GiHiking, label: 'Hiking' },
  { element: FaRunning, label: 'Jogging' },
  { element: GiRead, label: 'Reading' },
  { element: TbBeach, label: 'Going to the beach, rivers and lakes' },
];
