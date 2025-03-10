import { LinkButton } from '@/components/ui/link-button';
import { projects } from '@/data/db';
import { Box, Heading, Image, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams(); // Get the project ID from the database
  // console.log(useParams())

  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    return <Text fontSize="xl">Project case study not found.</Text>;
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt="4">
        <Box>
          <Heading mb="4" size="2xl" textDecoration="underline">
            {project.caseStudy.title}
          </Heading>
          <Text fontSize="xl">{project.caseStudy.overview}</Text>

          <Heading size="lg" mt={6} textDecoration="underline">
            Development Process
          </Heading>
          <SimpleGrid gap="2" mt="4">
            {project.caseStudy.process?.map((step, index) => (
              <>
                <Box key={index}>
                  <Heading size="md">{step.title}</Heading>
                </Box>
                <Box as="ul" listStyleType="circle" ml={4}>
                  {step.steps.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </Box>
              </>
            ))}
          </SimpleGrid>

          <Heading size="lg" mt={6} textDecoration="underline">
            Key Features:
          </Heading>
          <Box display="flex" gap="4" flexWrap="wrap">
            {project.caseStudy.features.map((feature, index) => (
              <Tag.Root
                key={index}
                size="lg"
                colorPalette="teal"
                variant="subtle"
                mt="2"
              >
                <Tag.Label>{feature}</Tag.Label>
              </Tag.Root>
            ))}
          </Box>

          <Heading size="lg" mt={6} textDecoration="underline">
            Technologies Used:
          </Heading>
          <Box display="flex" gap="4" flexWrap="wrap">
            {project.caseStudy.toolsUsed.map((tool, index) => (
              <Tag.Root
                key={index}
                size="lg"
                colorPalette="teal"
                variant="subtle"
                mt="2"
              >
                {tool}
              </Tag.Root>
            ))}
          </Box>
        </Box>

        <Box columns={{ base: 1, lg: 2 }}>
          {project.caseStudy.images.map((img, index) => (
            <Image key={index} src={img} alt={project.name} py={2} />
          ))}
        </Box>
      </SimpleGrid>

      <Box display="flex" mt="10" justifyContent="space-between">
        <Box>
          <LinkButton
            variant="outline"
            colorPalette="teal"
            href={project.github}
            target="_blank"
            mr="2"
          >
            Github
          </LinkButton>
          <LinkButton
            variant="ghost"
            colorPalette="teal"
            href={project.deploy}
            target="_blank"
          >
            Live Demo
          </LinkButton>
        </Box>

        <LinkButton href="/projects" variant="outline" colorPalette="teal">
          <Text>Go Back</Text>
        </LinkButton>
      </Box>
    </>
  );
};

export default CaseStudy;

/**
 * The flexWrap="wrap" property is added to ensure that the features and tools used are displayed properly on smaller screens.
 
 */
