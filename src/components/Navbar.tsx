import { HStack, Link, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={4}>
      <Text textStyle="2xl">Mauricio's Portfolio</Text>
      <HStack spaceX="8" textStyle="lg">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
