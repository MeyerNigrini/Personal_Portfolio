import { useState } from 'react';
import { TextInput, Textarea, Button, Group, Container, Title, Notification } from '@mantine/core';


function ContactMe(){
    // State for the user's name input
    const [name, setName] = useState('');

    // State for the user's email input
    const [email, setEmail] = useState('');

    // State for the user's message input
    const [message, setMessage] = useState('');

    // State for the notification, 'notification' holds an object with 'visible' (boolean) and 'message' (string)
    // This state determines if a notification is shown or not and its content 
    const [notification, setNotification] = useState<{ visible: boolean, message: string } | null>(null);
  
    // Handles form submission
    const handleSubmit = () => {
      // Check if all fields are filled
      if (name && email && message) {
        // Success notification
        setNotification({ visible: true, message: 'Thank you for your message! I will get back to you soon.' });
      } else {
        // Error notification if any field is empty.
        setNotification({ visible: true, message: 'Please fill out all fields.' });
      }
    };
  
    return (
      <Container size="sm">
        <Title order={2} mb="xl">
          Contact Me
        </Title>
  
        {/* Check if notification is set and visible. If true render <notification> */}
        {notification && notification.visible && (
          <Notification
            title="Message Status"
            onClose={() => setNotification(null)} // Close notification
            color={notification.message.includes('Thank you') ? 'green' : 'red'}
          >
            {notification.message}
          </Notification>
        )}
  
        <TextInput
          label="Your Name"
          placeholder="John Doe"
          value={name} // Controlled input: This links the textarea value with the state, synching the input with the state.
          onChange={(e) => setName(e.target.value)} // Updates the state as the user is inputting or changing values
          mb="sm"
        />
  
        <TextInput
          label="Your Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb="sm"
        />
  
        <Textarea
          label="Your Message"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minRows={4}
          mb="sm"
        />
  
        <Group>
          {/* Call the handleSubmit to display message */}
          <Button onClick={handleSubmit}>Send Message</Button>
        </Group>
      </Container>
    );
  };
  
  export default ContactMe;