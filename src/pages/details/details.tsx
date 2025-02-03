import { Container, Grid, SimpleGrid } from "@mantine/core";
import KeyValueTable from "../../components/KeyValueTable";
import SectionTitle from "../../components/SectionTitle";
import { AccordionComponent } from "../../components/Accordion";
import { useEffect, useState } from "react";
import api from "../../services/apiService";


function Details() {

  const [details, setDetails] = useState({
    education: [],
    experience: [],
    info: [],
    skills: [],
  });

  useEffect(() => {
    api.get("/Details") // Adjust the port if needed
        .then((response) => {
            setDetails(response.data);  // Axios automatically parses JSON
        })
}, []);

  return (
    <Container my="md" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Personal Info Table */}
        <KeyValueTable data={details.info} title="Personal Info" fontSize="20px"/>

        <Grid gutter="md">
          <Grid.Col>
            {/* Technical Skills Table */}
            <KeyValueTable data={details.skills} title="Technical Skills" fontSize="20px" />
          </Grid.Col>

          {/* Work Experience Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Work Experience" />
            <AccordionComponent characters={details.experience} />
          </Grid.Col>

          {/* Education Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Education" />
            <AccordionComponent characters={details.education} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Details;
