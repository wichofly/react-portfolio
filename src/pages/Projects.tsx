import ProjectIcons from '@/components/ProjectIcons';
import { LinkButton } from '@/components/ui/link-button';
import { projects } from '@/data/db';
import { Box, Card, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

const Projects = () => {
  return (
    <>
      <Box textAlign="center" mb="8">
        <Heading fontSize="3xl">Projects</Heading>
        <Text fontSize="xl" mt="2">
          Explore some of the personal projects I've built using modern
          technologies.
        </Text>
        <Text fontSize="xl" mt="1">
          Each project showcases my skills and dedication to creating
          high-quality web applications.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap="4" p="2">
        {projects.map((project) => (
          <Card.Root
            key={project.id}
            maxW="sm"
            overflow="hidden"
            variant="elevated"
            display="flex"
          >
            <Image src={project.image} alt={project.name} />

            <Card.Body gap="2">
              <Card.Title>{project.name}</Card.Title>
              <Card.Description>{project.description}</Card.Description>
              <ProjectIcons iconImages={project.iconImages} />
            </Card.Body>
            <Card.Footer justifyContent="center" gap="2">
              <LinkButton
                variant="subtle"
                colorPalette="teal"
                href={project.github}
                target="_blank"
              >
                Github
              </LinkButton>
              <LinkButton
                variant="ghost"
                colorPalette="teal"
                href={project.deploy}
                target="_blank"
              >
                Deploy
              </LinkButton>
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
