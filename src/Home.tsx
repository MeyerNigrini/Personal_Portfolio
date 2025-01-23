import { Container, Title, Text, Image, Grid, ActionIcon, Group} from "@mantine/core";
import getSocialIcon  from "./functions/getSocialIcon"; // Import function to get social media icons
import myImage from "./assets/ProfilePic.jpg"; // Profile Picture asset



function Home(){

    // Array of social media links used for ActionIcons
    const socialLinks = [
        {name: "linkedin", url: "https://www.linkedin.com/in/meyernigrini", label: "LinkedIn"},
        {name: "facebook", url: "https://www.facebook.com/meyer.nigrini.3/", label: "FaceBook"},
        {name: "github", url: "https://github.com/MeyerNigrini/", label: "GitHub"}];

    return (
        <div>
            <Container>
                <Grid 
                    align="center" // Vertically centers grid items
                    justify="space-between" // Spaces out items evenly with space in between 
                    style={{padding: "10px 0"}} // Add vertical padding
                >
                    {/* Left Column: Text and social media links */}
                    <Grid.Col 
                        span={{base: 12, xs: 6}} // Defines the column span, full width on small screens and half width on larger screens
                    >
                        <Title order={1}> Hi, I'm Meyer Nigrini </Title>
                        <Title order={2}>Full-Stack Developer</Title>
                        <Text 
                            size="lg" // Set font size
                            mt="sm" // Add top margin
                        >   Hi, I'm Meyer Nigrini, a full-stack developer with a passion for building innovative digital 
                            solutions. I specialize in creating dynamic, responsive web applications that provide great user experiences. 
                            Take a look at my work and get in touch if you'd like to collaborate on something exciting.
                        </Text>
                    

                        {/* Social Media Action Icons */}
                        <Group style={{padding: "15px 0"}}>
                            
                            {socialLinks.map((link) => (
                                <div 
                                    style={{textAlign: "center"}} // Centers text and icons within the div
                                >
                                    <ActionIcon
                                        key={link.name} // Unique key for React rendering optimization
                                        component="a" // Renders the ActionIcon as an anchor 'a' element
                                        href={link.url} // Social media URL
                                        target="_blank" // Opens the link in a new browser tab
                                        size="xl" // Set icon size
                                        variant="transparent" // Change background for icon to transparent
                                        title={link.label} // Set icon tooltip to display the name
                                    >
                                        {/* Call the getSocialIcon function with the name to get the appropriate icon */}
                                        {getSocialIcon(link.name, 100)}
                                    </ActionIcon>
                                    {/* Label text under ActionIcons */}
                                    <Text>{link.label}</Text>
                                </div>
                            ))}
                        </Group>
                    </Grid.Col>
                    
                    {/* Right Column: Profile Picture */}
                    <Grid.Col span={{base: 12, xs: 6}}>
                        <Image 
                            src={myImage} // Profile image source
                            radius="50%" // Set radius to 50% making image round
                            style={{
                                width: "100%", // Set full width for responsiveness
                                maxWidth: 1000, // Limit max width
                                height: "100%", // Set full height for responsiveness
                                maxHeight: 1000 // Limit max height
                            }}
                        />
                    </Grid.Col>    
                </Grid>
            </Container>
        </div>
    )
}

export default Home