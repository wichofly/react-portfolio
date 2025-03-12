import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react';
import { BsEnvelopeAt } from 'react-icons/bs';

const Contact = () => {
  return (
    <Box textAlign="center">
      <Heading fontSize="3xl">Let's Connect!</Heading>
      <Text fontSize="xl" mt="2">
        I'm always open to new opportunities, collaborations, and discussions.
      </Text>
      <Text fontSize="xl" mt="1">
        Whether you have a question, a project, or just want to say hi, feel
        free to reach out!
      </Text>

      <HStack mt="12" display="flex" justifyContent="center">
        <Link
          href="mailto:antonierazo13@gmail.com"
          colorPalette="teal"
          fontSize="8xl"
          _hover={{ color: 'teal.600', scale: '1.1' }}
          transition="0.3s ease-in-out"
        >
          <BsEnvelopeAt />
        </Link>
      </HStack>
    </Box>
  );
};

export default Contact;
