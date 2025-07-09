import { HStack, Text } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
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
  SiRender,
  SiTypescript,
  SiZod,
  SiReactrouter,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

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
  Render: SiRender,
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
  ReactRouter: SiReactrouter,
  AI: GiArtificialIntelligence,
};

interface ProjectIconsProps {
  iconImages: string[];
}

const ProjectIcons = ({ iconImages }: ProjectIconsProps) => {
  return (
    <HStack mt={4} justifyContent="center" color="teal.500">
      {iconImages.map((iconName) => {
        const iconImage = iconMap[iconName];
        return (
          iconImage && (
            <Tooltip key={iconName} content={iconName}  contentProps={{ css: { "--tooltip-bg": "teal" } }} showArrow>
              <Text as={iconImage} boxSize="6" />
            </Tooltip>
          )
        );
      })}
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
