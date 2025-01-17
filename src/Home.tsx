import { Button, Container, Title, Text, Image } from "@mantine/core";
import myImage from "./assets/ProfilePic.jpg";

function Home(){
    return (
        <Container>
            <section style={{display: "flex", alignItems: "center", justifyContent: "space-between" , padding: "50px 50px"}}>
                <div style = {{textAlign: "left"}}>
                    <Title> Welcome </Title>
                    <Text size="lg" mt="sm"> My name is Meyer Nigrini</Text>
                    <Button>Details</Button>
                </div>
                <Image src={myImage} width={200} height={200} style={{borderRadius: "50%", objectFit: "cover"}}/>
            </section>
        </Container>
    )
}

export default Home