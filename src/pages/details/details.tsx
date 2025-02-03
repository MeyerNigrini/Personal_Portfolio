import { Container, Grid, SimpleGrid } from "@mantine/core";
import KeyValueTable from "../../components/KeyValueTable";
import SectionTitle from "../../components/SectionTitle";
import { AccordionComponent } from "../../components/Accordion";
import useFetchData from "../../hooks/useFetchData";
import { Info } from "./models";

function Details() {

  // Use the custom hook to fetch data from the API endpoint
  const { data, error } = useFetchData<Info>("/Details", {
    education: [],
    experience: [],
    info: [],
    skills: [],
  });

  // Handling error state
  if (error) {
    return <div>Error: {error}</div>; // Display error message if the request fails
  }


  return (
    <Container my="md" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Personal Info Table */}
        <KeyValueTable data={data.info} title="Personal Info" fontSize="20px"/>

        <Grid gutter="md">
          <Grid.Col>
            {/* Technical Skills Table */}
            <KeyValueTable data={data.skills} title="Technical Skills" fontSize="20px" />
          </Grid.Col>

          {/* Work Experience Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Work Experience" />
            <AccordionComponent characters={data.experience} />
          </Grid.Col>

          {/* Education Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Education" />
            <AccordionComponent characters={data.education} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Details;
