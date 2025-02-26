import { Box, HStack, Text, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLaptop, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <Box
      as="footer"
      borderTop="2px solid"
      borderColor="gray.600"
      width="100%"
      mt="auto"
      p="4"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mt="2"
        fontSize="xl"
      >
        <Text as="b">Copyrights &copy; {footerYears} All Rights Reserved</Text>
        <Box textAlign="center">
          <Text as="b">Find me on</Text>
          <HStack my="2">
            <IconButton variant="ghost">
              <Link
                href="https://www.linkedin.com/in/mauricio-erazo-/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </IconButton>

            <IconButton variant="ghost">
              <Link href="https://github.com/wichofly/" target="_blank">
                <FaGithub />
              </Link>
            </IconButton>

            <IconButton variant="ghost">
              <Link href="/">
                <FaLaptop />
              </Link>
            </IconButton>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
