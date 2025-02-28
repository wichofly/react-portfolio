import { LinkButton } from '@/components/ui/link-button';
import { projects } from '@/data/db';
import { Card, Image, SimpleGrid } from '@chakra-ui/react';

const Projects = () => {
  return (
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
  );
};

export default Projects;
