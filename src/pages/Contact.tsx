import { useColorModeValue } from '@/components/ui/color-mode';
import { toaster } from '@/components/ui/toaster';
import { ContactFormData } from '@/interface/interface';
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.900');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const serviceID = 'service_07g4rbo';
      const templateID = 'template_4sousrs';
      const publicKey = 'M0apN-3Xr6_0OU6_m';

      const emailParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        title: 'New Contact Request',
        time: new Date().toLocaleString(),
      };

      console.log('Sending email with:', emailParams);

      const response = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        publicKey
      );

      console.log('EmailJS response:', response);

      toaster.create({
        description: "Message sent successfully! I'll get back to you soon.",
        type: 'success',
      });

      reset(); // Clear the form after submission
    } catch (error) {
      console.error('EmailJS Error:', error);
      toaster.create({
        description: 'Oops! Something went wrong. Please try again later.',
        type: 'error',
      });
    }
  };

  return (
    <Box maxW="500px" mx="auto" mt="8" textAlign="center">
      <Heading fontSize="3xl">Get in Touch</Heading>
      <Text fontSize="lg" mt="2">
        Fill out the form below to send me a message.
      </Text>

      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        mt="6"
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="md"
        p="6"
        boxShadow="md"
        bg={bgColor}
      >
        <VStack gap="4">
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Name</Field.Label>
            <Input
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
            />
          </Field.Root>

          <Field.Root invalid={!!errors.name}>
            <Field.Label>Email</Field.Label>
            <Input
              type="email"
              placeholder="me@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea
              placeholder="Enter your Message"
              {...register('message', { required: 'Message is required' })}
            />
          </Field.Root>

          <Button
            type="submit"
            colorPalette="teal"
            variant="subtle"
            loading={isSubmitting}
            width="full"
          >
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
