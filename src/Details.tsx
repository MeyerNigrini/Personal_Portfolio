import { Title, Container, Grid, SimpleGrid, Table } from '@mantine/core';
import { AccordionComponent } from './components/Accordion';

const education = [
  {
    id: 'eduvos',
    image: '/src/assets/eduvos.png',
    label: 'Eduvos | Jan 2021 - Jul 2024',
    description: 'BSc Software Engineering',
    content: "I completed my BSc in Software Engineering at Eduvos, where I gained a solid foundation in software development principles and practices. Throughout my studies, I was exposed to a wide range of topics, including algorithms, data structures, software architecture, programming languages, and systems design. The program equipped me with the skills necessary to build robust, scalable applications and understand the full software development lifecycle. My education at Eduvos also emphasized teamwork, problem-solving, and practical applications, preparing me for a successful career in the field of software engineering.",
  },
  {
    id: 'highschool',
    image: '/src/assets/bellvillehighschool.png',
    label: 'Bellville HighSchool | 2014 - 2019',
    description: 'HighSchool Student',
    content: "I completed my high school education at Bellville High School, where I developed a strong academic foundation and honed my problem-solving skills. During my time there, I was actively involved in various subjects, particularly those related to mathematics and technology, which sparked my interest in software engineering. Bellville High School fostered an environment of discipline and curiosity, where I participated in extracurricular activities and collaborated with peers, which further shaped my work ethic and passion for technology. My experiences there played a crucial role in guiding me toward a career in software engineering.",
  },
];

const experience = [
  {
    id: 'nebula',
    image: '/src/assets/1nebula.png',
    label: '1Nebula | Jan 2025 - Present',
    description: 'Software Development Intern',
    content: "As a Software Development Intern at 1Nebula, I embraced a no-nonsense approach to problem-solving and coding, much like Bender’s pragmatic bending style. Despite being new to the team, I quickly developed the ability to work under pressure and balance multiple tasks efficiently. Although my skills weren’t fully polished initially, I have already started contributing to the team's success by fixing bugs and building features, much like Bender continuously upgrades his bending abilities.",
  },
  {
    id: 'oceanbasket',
    image: '/src/assets/oceanbasket.png',
    label: 'Ocean Basket | Nov 2022 - Jan 2025',
    description: 'Waiter',
    content: "In my role as a Waiter at Ocean Basket Holdings, I managed fast-paced service with a mix of laziness and quick bursts of activity—finding a balance between hard work and relaxation, much like Homer Simpson’s laid-back yet diligent approach. I relied on good humor and strong communication skills to handle high-pressure situations and ensure customer satisfaction. I also learned to juggle tasks, demonstrating resilience to work hard under any circumstances.",
  },
  {
    id: 'rocomamas',
    image: '/src/assets/rocomamas.png',
    label: 'RocoMamas | Dec 2021 - Oct 2022',
    description: 'Waiter',
    content: 'As a Waiter at RocoMamas, I showcased my leadership qualities in providing excellent customer service, much like Carol Miller runs a multi-billion-dollar empire. I helped oversee service quality, managed team coordination, and developed a strong work ethic, all while ensuring our customers enjoyed a flawless experience.',
  },
];


function Details() {
  

  const info = [
    ['Full Name:', 'Meyer Hendrik Nigrini'],
    ['Date of Birth:', '29 August 2001'],
    ['Phone:', '074 444 5533'],
    ['Email:', 'MeyerNigrini25@gmail.com'],
    ['Adress:', '123 Maple Street, Springfield, IL, 62701'],
    ['Nationality:', 'South African'],
    ['Occupation:', 'Software Developer'],
    ['Company:', '1Nebula'],
    ['Marital Status:', 'Single'],
    ['Languages:', 'Afrikaans, English'],
  ];

  const skills = [
    ['Programming Languages:', 'JavaScript, TypeScript, Python, Java.'],
    ['Frontend Development:', 'HTML, CSS, React, Tailwind CSS.'],
    ['Backend Development: ', 'Node.js, Django, RESTful APIs.'],
    ['Database Management:', 'MySQL, PostgreSQL, MongoDB.'],
  ];

  return (
    <Container my="md" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <div style={{textAlign:"left"}}>
          <Title order={1} style={{textDecoration:"underline", paddingBottom:"15px"}}>Personal Info:</Title>

          <Table style={{fontSize:"20px"}}>
            <tbody>
              {info.map((row, index) => (
                <tr key={index}>
                  <td style={{fontWeight:"bold"}}>{row[0]}</td>
                  <td>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Grid gutter="md">
          <Grid.Col>
            <div>
              <Title order={2} style={{textAlign:"center", textDecoration:"underline"}}>Technical Skills:</Title>

              <Table style={{fontSize:"18px"}}>
                <tbody>
                  {skills.map((row, index) => (
                    <tr key={index}>
                      <td style={{fontWeight:"bold"}}>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{textAlign:"center", paddingBottom:"10px"}}>
              <Title order={2} style={{textDecoration:"underline"}}> Work Experience </Title>
            </div>
            <AccordionComponent characters={experience} />
          </Grid.Col>
          <Grid.Col span={6}>
            <div style={{textAlign:"center", paddingBottom:"10px"}}>
              <Title order={2} style={{textDecoration:"underline"}} > Education </Title>
            </div>
            <AccordionComponent characters={education} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>


    // <div>
    //   <div style={{textAlign:"center", paddingBottom:"10px"}}>
    //     <Title order={1} > Work Experience </Title>
    //   </div>
    //   <AccordionComponent characters={experience} />
    //   <div style={{textAlign:"center", padding:"10px"}}>
    //     <Title order={1} > Education </Title>
    //   </div>
    //   <AccordionComponent characters={education} />
    // </div>
  );
}

export default Details;
