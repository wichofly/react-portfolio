import { enjoyList, techSkills } from '@/data/skills';
import { Box, Heading, SimpleGrid, Tag, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Box textAlign="center">
        <Heading fontSize="3xl">About Me</Heading>
        <Text fontSize="xl" mt="2">
          Hi, I'm Mauricio! Passionate about web development and always eager to
          learn new technologies.
        </Text>
        <Text fontSize="xl" mt="1">
          Here, you'll find more about my journey, the technologies I work with,
          and the projects I've built.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt="10">
        <Box>
          <Heading fontSize="2xl">Get to know me!</Heading>
          <Box fontSize="lg">
            <Text mt="1">
              I'm a <strong>Full Stack Web Developer</strong> with a unique
              background as a former <strong>Military Pilot</strong>. My
              experience in aviation taught me
              <strong> discipline, adaptability, and problem-solving </strong>—
              skills that now fuel my approach to software development.
            </Text>
            <Text mt="1">
              While living in Germany, I discovered my passion for programming
              and made a deliberate choice to transition into tech. Through{' '}
              <strong>CareerFoundry</strong>, I gained hands-on experience
              building real-world projects and mastering modern web
              technologies. My enthusiasm for solving problems and creating
              intuitive digital solutions led me to an intensive{' '}
              <strong>
                Software Engineering internship at Digital Product School by
                UnternehmerTUM
              </strong>
              .
            </Text>
            <Text mt="1">
              During my <strong>internship</strong>, I collaborated with a{' '}
              <strong>cross-functional agile team</strong> in partnership with{' '}
              <strong>MAN Company</strong> to build a{' '}
              <strong>technical MVP</strong> that helps purchasing officers make
              better-informed decisions. I worked within the{' '}
              <strong>Scrum framework</strong>, applying{' '}
              <strong>Design Thinking</strong> and making key tech stack
              decisions to deliver a user-centered solution.
            </Text>

            <Text mt="1">
              I'm actively looking for new opportunities where I can{' '}
              <strong>contribute, learn, and grow</strong>. I’m eager to apply
              my{' '}
              <strong>
                problem-solving mindset, technical skills, and collaborative
                spirit
              </strong>{' '}
              in a dynamic team. If you're hiring for a{' '}
              <strong>web development role</strong>, let’s connect!
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl">My technical skills</Heading>
          <Box display="flex" gap="4" flexWrap="wrap">
            {techSkills.map((skill, idx) => (
              <Tag.Root
                key={idx}
                size="lg"
                colorPalette="teal"
                variant="subtle"
                mt="2"
              >
                <Tag.Label>{skill}</Tag.Label>
              </Tag.Root>
            ))}
          </Box>

          <Heading fontSize="2xl" mt="6">
            I enjoy ...
          </Heading>
          <Box display="flex" gap="4" flexWrap="wrap">
            {enjoyList.map((list, idx) => (
              <Tag.Root
                key={idx}
                size="lg"
                colorPalette="teal"
                variant="subtle"
                mt="2"
              >
                <Tag.StartElement>
                  <list.element />
                </Tag.StartElement>
                <Tag.Label>{list.label}</Tag.Label>
              </Tag.Root>
            ))}
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default About;
