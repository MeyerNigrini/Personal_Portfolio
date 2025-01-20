import { Button, Container, Title, Text, Image, Grid } from "@mantine/core";
import { HeaderSimple } from "./components/HeaderSimple";
import myImage from "./assets/ProfilePic.jpg";

function Home(){
    return (
        <div>
            <HeaderSimple/>
            <Container>
                <Grid align="center" justify="space-between" style={{padding: "10px 0"}}>
                    <Grid.Col span={{base: 12, xs: 6}} >
                        <Title order={1}> Hi, I'm Meyer Nigrini </Title>
                        <Title order={2}>Full-Stack Developer</Title>
                        <Text size="lg" mt="sm"> Hi, I'm Meyer Nigrini, a full-stack developer with a passion for building innovative digital solutions. I specialize in creating dynamic, responsive web applications that provide great user experiences. Take a look at my work and get in touch if you'd like to collaborate on something exciting.</Text>
                        <Button>Details</Button>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, xs: 6}}>
                        <Image 
                            src={myImage} 
                            radius="50%" 
                            fit="cover" 
                            style={{width: "100%", maxWidth: 1000, height: "100%", maxHeight: 1000}}/>
                    </Grid.Col>    
                </Grid>
            </Container>
        </div>
    )
}

export default Home