import { HStack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { MdHttp } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiTypescript,
  SiZod,
} from 'react-icons/si';

const iconMap: { [key: string]: IconType } = {
  Html: FaHtml5,
  Css: FaCss3Alt,
  JS: FaJsSquare,
  HTTP: MdHttp,
  NodeJS: FaNodeJs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  DataBase: FaDatabase,
  Postman: SiPostman,
  React: FaReact,
  ReactBootstrap: FaBootstrap,
  Redux: SiRedux,
  Netlify: SiNetlify,
  Typescript: SiTypescript,
  ChakraUI: SiChakraui,
  ReactQuery: SiReactquery,
  Vercel: IoLogoVercel,
  Zod: SiZod,
  TailwindCss: RiTailwindCssFill,
};

interface ProjectIconsProps {
  iconImages: string[];
}

const ProjectIcons = ({ iconImages }: ProjectIconsProps) => {
  return (
    <HStack mt={4} justifyContent="center" color="teal.500">
      {iconImages.map((index) => (
        <Text key={index} as={iconMap[index]} boxSize="6" />
      ))}
    </HStack>
  );
};

export default ProjectIcons;

/**
 * Reduce the code from Projects.tsx Focus on getting the icons.
 * iconMap is better to place it outside of the component.
 *  - Better performance (avoids re-creating iconMap on every render)
 *  - Less memory consumption (only one instance of the object exists).
 *  - More scalable (can be imported elsewhere if needed).
 */
