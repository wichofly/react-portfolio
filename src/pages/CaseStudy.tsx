import { projects } from '@/data/db';
import { Box, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams(); // Get the project ID from the URL

  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    return <Text fontSize="xl">Project case study not found.</Text>;
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="4">
      <GridItem colSpan={2}>
        <Heading mb="4">{project.caseStudy.title}</Heading>
        <Text fontSize="xl">{project.caseStudy.overview}</Text>

        <Heading size="md" mt={4}>
          Key Features:
        </Heading>
        <Box display="flex" gap="4">
          {project.caseStudy.features.map((feature, index) => (
            <Text key={index}>{feature}</Text>
          ))}
        </Box>

        <Heading size="md" mt={6}>
          Technologies Used:
        </Heading>
        <Box display="flex" gap="4">
          {project.caseStudy.toolsUsed.map((tool, index) => (
            <Text key={index}>{tool}</Text>
          ))}
        </Box>
      </GridItem>

      <GridItem colSpan={2} columns={{ base: 1, md: 2 }} gap={4}>
        {project.caseStudy.images.map((img, index) => (
          <Image key={index} src={img} alt={project.name} my={4} />
        ))}
      </GridItem>
    </Grid>
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
