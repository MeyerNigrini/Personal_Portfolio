import { Container, Grid, SimpleGrid } from "@mantine/core";
import KeyValueTable from "../../components/KeyValueTable";
import SectionTitle from "../../components/SectionTitle";
import { education, experience, info, skills } from "./data";
import { AccordionComponent } from "../../components/Accordion";

function Details() {
  return (
    <Container my="md" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {/* Personal Info Table */}
        <KeyValueTable data={info} title="Personal Info" fontSize="20px"/>

        <Grid gutter="md">
          <Grid.Col>
            {/* Technical Skills Table */}
            <KeyValueTable data={skills} title="Technical Skills" fontSize="20px" />
          </Grid.Col>

          {/* Work Experience Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Work Experience" />
            <AccordionComponent characters={experience} />
          </Grid.Col>

          {/* Education Accordion */}
          <Grid.Col span={6}>
            <SectionTitle title="Education" />
            <AccordionComponent characters={education} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default Details;
