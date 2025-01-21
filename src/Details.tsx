import { Title } from '@mantine/core';
import { AccordionComponent } from './components/Accordion';

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
  return (
    <div>
      <Title order={1} > Work Experience </Title>
      <AccordionComponent characters={experience} />
      <Title order={1}> Education </Title>
      <AccordionComponent characters={experience} />
    </div>
  );
}

export default Details;
