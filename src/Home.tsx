import { Container, Title, Text, Image, Grid, ActionIcon, Group} from "@mantine/core";
import getSocialIcon  from "./functions/getSocialIcon";
import myImage from "./assets/ProfilePic.jpg";



function Home(){

    const socialLinks = [
        {name: "linkedin", url: "https://www.linkedin.com/in/meyernigrini", label: "LinkedIn"},
        {name: "facebook", url: "https://www.facebook.com/meyer.nigrini.3/", label: "FaceBook"},
        {name: "github", url: "https://github.com/MeyerNigrini/", label: "GitHub"}];

    return (
        <div>
            <Container>
                <Grid align="center" justify="space-between" style={{padding: "10px 0"}}>
                    <Grid.Col span={{base: 12, xs: 6}} >
                        <Title order={1}> Hi, I'm Meyer Nigrini </Title>
                        <Title order={2}>Full-Stack Developer</Title>
                        <Text size="lg" mt="sm"> Hi, I'm Meyer Nigrini, a full-stack developer with a passion for building innovative digital 
                            solutions. I specialize in creating dynamic, responsive web applications that provide great user experiences. 
                            Take a look at my work and get in touch if you'd like to collaborate on something exciting.
                        </Text>
                    

                        {/* Social Media Action Icons */}
                        <Group style={{padding: "15px 0"}}>
                            
                            {socialLinks.map((link) => (
                                <div key={link.name} style={{textAlign: "center"}}>
                                    <ActionIcon
                                        key={link.name}
                                        component="a"
                                        href={link.url}
                                        target="_blank"
                                        size="xl"
                                        variant="transparent"
                                        title={link.label}
                                    >
                                        {getSocialIcon(link.name, 100)}
                                    </ActionIcon>
                                    <Text>{link.label}</Text>
                                </div>
                            ))}
                        </Group>
                    </Grid.Col>
                    
                    {/* Image Section */}
                    <Grid.Col span={{base: 12, xs: 6}}>
                        <Image 
                            src={myImage} 
                            
                            radius="50%" 
                            
                            style={{width: "100%", maxWidth: 1000, height: "100%", maxHeight: 1000}}/>
                    </Grid.Col>    
                </Grid>
            </Container>
        </div>
    )
}

export default Home