import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { FaGithub, FaLaptop, FaLinkedin } from 'react-icons/fa';
import { useColorModeValue } from './ui/color-mode';
import { LinkButton } from './ui/link-button';

const Footer = () => {
  const footerYears = new Date().getFullYear();
  const color = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box
      as="footer"
      borderTop="2px solid"
      borderColor="gray.600"
      width="100%"
      mt="auto"
      p="4"
      color={color}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        mt="2"
        mb="-5"
        fontSize="xl"
      >
        <Text as="b">Copyrights &copy; {footerYears} All Rights Reserved</Text>
        <Box textAlign="center" mt={{ base: '4', md: '0' }}>
          <Text as="b">Find me on</Text>
          <HStack my="2">
            <LinkButton
              variant="ghost"
              href="https://www.linkedin.com/in/mauricio-erazo-/"
              target="_blank"
            >
              <Icon fontSize={{ base: '2xl', md: '3xl' }}>
                <FaLinkedin />
              </Icon>
            </LinkButton>

            <LinkButton
              variant="ghost"
              href="https://github.com/wichofly/"
              target="_blank"
            >
              <Icon fontSize={{ base: '2xl', md: '3xl' }}>
                <FaGithub />
              </Icon>
            </LinkButton>

            <LinkButton variant="ghost" href="/">
              <Icon fontSize={{ base: '2xl', md: '3xl' }}>
                <FaLaptop />
              </Icon>
            </LinkButton>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
