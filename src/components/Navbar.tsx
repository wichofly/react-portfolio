import { HStack, Link, Text } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode';

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={4}>
      <Link href="/">
        <Text textStyle="2xl" padding="1">
          Mauricio's Portfolio
        </Text>
      </Link>
      <HStack spaceX="8" textStyle="lg" fontWeight="medium" colorPalette="teal">
        <Link href="/" padding="1">
          Home
        </Link>
        <Link href="/about" padding="1">
          About
        </Link>
        <Link href="/projects" padding="1">
          Projects
        </Link>
        <Link href="/contact" padding="1">
          Contact
        </Link>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
