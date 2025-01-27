import { Container, Grid, Title, Text } from "@mantine/core";
import SocialLinks from "./components/SocialLinks";
import { socialLinks, desc } from "./data";
import ProfileImage from "./components/ProfileImage";
import myImage from "../../assets/ProfilePic.jpg"; // Profile Picture asset

function Home() {
  return (
        <Container>
          <Grid
              align="center"
              justify="space-between"
              style={{ padding: "10px 0" }}
          >
              {/* Left Column: Text and social media links */}
              <Grid.Col span={{ base: 12, xs: 6 }}>
                <Title order={1}>Hi, I'm Meyer Nigrini</Title>
                <Title order={2}>Full-Stack Developer</Title>
                <Text size="lg" mt="sm">
                  {desc}
                </Text>
                {/* Social Media Action Icons */}
                <SocialLinks links={socialLinks} />
              </Grid.Col>

              {/* Right Column: Profile Picture */}
              <Grid.Col span={{ base: 12, xs: 6 }}>
                <ProfileImage src={myImage} alt="Meyer Nigrini" />
              </Grid.Col>
          </Grid>
        </Container>
  );
};

export default Home;
