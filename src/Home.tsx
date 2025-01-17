import { Button, Container, Title, Text } from "@mantine/core";


function Home(){
    return (
        <Container>
            <section style={{textAlign: "center", padding: "50px 0"}}>
                <Title> Welcome </Title>
                <Text size="lg" mt="sm"> My name is Meyer Nigrini</Text>
                <Button>Details</Button>
            </section>
        </Container>
    )
}

export default Home