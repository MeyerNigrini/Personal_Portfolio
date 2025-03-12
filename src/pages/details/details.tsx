import { Container, Grid, SimpleGrid } from "@mantine/core";
import KeyValueTable from "../../components/KeyValueTable";
import SectionTitle from "../../components/SectionTitle";
import { AccordionComponent } from "../../components/Accordion";
import useFetchData from "../../hooks/useFetchData";
import { accordionData, Info } from "./models";

function Details() {

  // Use the custom hook to fetch data from the API endpoint
  const { data: accData, error: accError } = useFetchData<accordionData>("/Details/accordion", {
    education: [],
    experience: [],
  });

  const { data: infoData, error: infoError } = useFetchData<Info>("/Details/info", {
    info: [],
    skills: [],
  });

  // Combine error messages
  const errorMessage = [accError, infoError].filter(Boolean).join(" | ");

  if (errorMessage) {
      return <div>Error: {errorMessage}</div>;
  }

  

    // Handling error state
    if (infoError) {
      return <div>Error: {infoError}</div>; // Display error message if the request fails
    }

  return (
    <Container my="md" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Personal Info Table */}
        <KeyValueTable data={infoData.info} title="Personal Info" fontSize="20px"/>

        <Grid gutter="md">
          <Grid.Col>
            {/* Technical Skills Table */}
            <KeyValueTable data={infoData.skills} title="Technical Skills" fontSize="20px" />
          </Grid.Col>

          {/* Work Experience Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Work Experience" />
            <AccordionComponent characters={accData.experience} />
          </Grid.Col>

          {/* Education Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Education" />
            <AccordionComponent characters={accData.education} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Details;
