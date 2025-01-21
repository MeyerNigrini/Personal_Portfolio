import { Button, Container, Grid, Title, Text } from "@mantine/core"

function Details(){
    return (
        <div>
    
            <Container>
                <Grid align="center" justify="space-between" style={{padding: "10px 0"}}>
                    <Grid.Col span={{base: 12, xs: 6}} >
                        <Title order={1}> Work Experience: </Title>
                        <Title order={3}>Software Development Intern - Jan 2025 - Present</Title>
                        <Text size="lg" mt="sm"> Hi, I'm Meyer Nigrini, a full-stack developer with a passion for building innovative digital solutions. I specialize in creating dynamic, responsive web applications that provide great user experiences. Take a look at my work and get in touch if you'd like to collaborate on something exciting.</Text>
                        <Button>Details</Button>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, xs: 6}}>

                    </Grid.Col>    
                </Grid>
            </Container>
        </div>
    )
}

export default Details