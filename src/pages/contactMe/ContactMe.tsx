import { useState } from 'react';
import { TextInput, Textarea, Button, Group, Container, Title } from '@mantine/core';
import { useAppContext } from '../../contexts/AppContext';
import { validateForm } from './utils/validateForm';
import NotificationComponent from './components/notificationComponent';
import { submitContactForm } from './services/contactService';

function ContactMe(){
    // Use context to get and set the form values
    const {name, email, message, setName, setEmail, setMessage} = useAppContext();

    // State for the notification, 'notification' holds an object with 'visible' (boolean) and 'message' (string)
    const [notification, setNotification] = useState<{ visible: boolean; message: string; color: 'green' | 'red' } | null>(null);

    // Handles form submission
    const handleSubmit = async () => {
      const errorMessage = validateForm(name, email, message);
      if (errorMessage) {
        setNotification({ visible: true, message: errorMessage, color: 'red' });
      } else {
        try {
          await submitContactForm(name, email, message);
          setNotification({ visible: true, message: 'Thank you for your message! I will get back to you soon.', color: 'green' });
          setName('');
          setEmail('');
          setMessage('');
        } catch {
            setNotification({ visible: true, message: 'Something went wrong. Please try again.', color: 'red' });  
        }
      }
    };
  
    return (
      <Container size="sm">
        <Title order={2} mb="xl">
          Contact Me
        </Title>
  
        {/* Check if notification is set and visible. If true render <notification> */}
        {notification && notification.visible && <NotificationComponent message={notification.message} onClose={() => setNotification(null)} />}
  
        <TextInput
          label="Your Name"
          placeholder="John Dory"
          value={name} // Controlled input: This links the textarea value with the state, synching the input with the state.
          onChange={(e) => setName(e.target.value)} // Update context with new name
          mb="sm"
        />
  
        <TextInput
          label="Your Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update context with new email
          mb="sm"
        />
  
        <Textarea
          label="Your Message"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update contect with new message
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