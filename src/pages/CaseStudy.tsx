import { projects } from '@/data/db';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams(); // Get the project ID from the URL

  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    return <Text fontSize="xl">Project case study not found.</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt="4">
      <Box>
        <Heading mb="4" size="2xl">
          {project.caseStudy.title}
        </Heading>
        <Text fontSize="xl">{project.caseStudy.overview}</Text>

        <Heading size="lg" mt={6}>
          Key Features:
        </Heading>
        <Box display="flex" gap="4" flexWrap="wrap">
          {project.caseStudy.features.map((feature, index) => (
            <Text key={index} border="1.5px solid" p={1} rounded="md" mt="2">
              {feature}
            </Text>
          ))}
        </Box>

        <Heading size="lg" mt={6}>
          Technologies Used:
        </Heading>
        <Box display="flex" gap="4" flexWrap="wrap">
          {project.caseStudy.toolsUsed.map((tool, index) => (
            <Text key={index} border="1.5px solid" p={1} rounded="md" mt="2">
              {tool}
            </Text>
          ))}
        </Box>
      </Box>

      <Box columns={{ base: 1, md: 2 }}>
        {project.caseStudy.images.map((img, index) => (
          <Image key={index} src={img} alt={project.name} py={2} />
        ))}
      </Box>
    </SimpleGrid>
  );
};

export default CaseStudy;

/**
 * The flexWrap="wrap" property is added to ensure that the features and tools used are displayed properly on smaller screens.
 
 */
