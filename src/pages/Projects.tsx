import ProjectIcons from '@/components/ProjectIcons';
import { projects } from '@/data/db';
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
              <Link to={project.github} target="_blank">
                <Button variant="subtle" colorPalette="teal">
                  Github
                </Button>
              </Link>
              <Link to={project.deploy} target="_blank">
                <Button variant="ghost" colorPalette="teal">
                  Deploy
                </Button>
              </Link>
              {project.showCaseStudy && (
                <Link to={`/case-study/${project.id}`}>
                  <Button variant="outline" colorPalette="teal">
                    Case Study
                  </Button>
                </Link>
              )}
            </Card.Footer>
          </Card.Root>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
