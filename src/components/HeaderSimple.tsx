import { useState } from 'react'; // useState is a React hook to manage stare
import { Burger, Container, Group } from '@mantine/core'; // Mantine UI components
import { useDisclosure } from '@mantine/hooks'; // useDisclosure is a hook from Mantine to toggle visibility
import { Link } from 'react-router-dom';
import classes from './HeaderSimple.module.css'; // Import custom CSS styling for the Header component

// Defining an array of links, each having a label and a URL to link to
const links = [
  { link: '/', label: 'Home' },
  { link: '/details', label: 'Details' },
  { link: '/hobbies', label: 'Hobbies' },
  { link: '/cv', label: 'CV'},
  { link: '/contactme', label: 'Contact Me' },
];

export function HeaderSimple() {
  // useDisclosure is a hook from Mantine to manage the state of the burger menu (opened or closed)
  const [opened, { toggle }] = useDisclosure(false); // 'opened' is the boolean state and 'toggle' is a function to change the state.
  
  // State to track which link is currently active (clicked)
  const [active, setActive] = useState(links[0].link); // Default active link is the first one in the array

  // Create a list of Link components for navigation
  const items = links.map((link) => (
    <Link
      key={link.label} // Use the link's label as a unique key for React to trach the element.
      to={link.link} // 'to' prop defines where the link should navigate to
      className={classes.link} // Apply the custom CSS class for styling the link
      data-active={active === link.link || undefined} // Add 'data-active' attribute to the link if it is the active one (for styling)
      onClick={() => { // Click event handle
        setActive(link.link); // Update the state to mark the clicked link as active, causing a 're-render'
        console.log(`Navigating to ${link.link}`); // Debugging line
      }}
    >
      {link.label} {/* Display the label of the link */}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}> {/* Container used to hold the content*/}
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        {/* Burger component is a mobile menu toggle that shows/hides the header meny */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}