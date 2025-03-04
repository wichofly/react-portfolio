import { projects } from '@/data/db';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams(); // Get the project ID from the URL

  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    return <Text fontSize="xl">Project case study not found.</Text>;
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={6}
      mt="4"
      columns={{ base: 1, md: 2 }}
    >
      <Box>
        <Heading mb="4" size="2xl">
          {project.caseStudy.title}
        </Heading>
        <Text fontSize="xl">{project.caseStudy.overview}</Text>

        <Heading size="lg" mt={6}>
          Key Features:
        </Heading>
        <Box display="flex" gap="4">
          {project.caseStudy.features.map((feature, index) => (
            <Text key={index} border="1.5px solid" p={1} rounded="md" mt="2">
              {feature}
            </Text>
          ))}
        </Box>

        <Heading size="lg" mt={6}>
          Technologies Used:
        </Heading>
        <Box display="flex" gap="4">
          {project.caseStudy.toolsUsed.map((tool, index) => (
            <Text key={index} border="1.5px solid" p={1} rounded="md" mt="2">
              {tool}
            </Text>
          ))}
        </Box>
      </Box>

      <Box columns={{ base: 1, md: 2 }} gap={4}>
        {project.caseStudy.images.map((img, index) => (
          <Image key={index} src={img} alt={project.name} py={2} />
        ))}
      </Box>
    </Box>
  );
};

export default CaseStudy;

/**
 * 


 */

/**
 * return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt="4">
      <SimpleGrid colSpan={2}>
        <Heading mb={4}>{project.caseStudy.title}</Heading>
        <Text fontSize="lg">{project.caseStudy.overview}</Text>

        <Heading size="md" mt={6}>
          Technologies Used:
        </Heading>
        {project.caseStudy.toolsUsed.map((tool, index) => (
          <Text key={index}>{tool}</Text>
        ))}
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }} // Responsive: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
        gap={4} // ✅ Add spacing between images
        mt={6}
        colSpan={2}
      >
        {project.caseStudy.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`${project.name} screenshot ${index + 1}`}
            borderRadius="md"
            boxShadow="lg" // ✅ Add shadow for better visibility
            objectFit="cover" // ✅ Ensure images are fully displayed
          />
        ))}
      </SimpleGrid>
    </Grid>
 */
