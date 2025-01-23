import { Grid, Image, List, ListItem, Text, Title } from '@mantine/core';
import karate from "./assets/karate.jpg"; // Karate image asset
import gaming from "./assets/gaming.jpg"; // Gaming image asset

function Hobbies(){
    return (
        <div
        style={{
          display: 'flex', // Set flex container for centering content
          justifyContent: 'center', // Center content horizontally
          padding: "0 10px", // Add horizontal padding
          width:"100%", // Full width for responsiveness
          maxWidth:"1600px", // Limit max width
          margin: "0 auto" // Center container
        }}
      >
            <Grid gutter="lg">
                {/* Karate Image section */}
                <Grid.Col 
                    span={{base: 12, xs: 6}} // Full width on small screens, half width on larger screens
                    style={{padding:5}} // Adds padding to the column
                > 
                    <Image 
                        src={karate} // Karate image source
                        style={{width: "100%", height: "100%"}} // Set full width and height for responsiveness
                    />
                </Grid.Col>

                {/* Karate Description section */}
                <Grid.Col span={{base: 12, xs: 6}} // Full width on small screens, half width on larger screens
                >
                    <Title 
                        order={2} 
                        style={{textAlign:"center"}} // Center title text within column
                    > Karate </Title>
                    <Text 
                        style={{paddingTop:"10px"}} // Add top padding
                    >I started practicing karate when I was just 4 years old, and it quickly became a huge part of my life. I trained in 
                        Shotokan Karate at my local dojo, where I dedicated myself to improving and eventually earned my black belt in 2016. 
                        That year, I had the incredible opportunity to travel to Japan, the birthplace of karate, to complete my black belt 
                        certification. It was an unforgettable experience, training with some of the most respected senseis in the world. 
                        Over the years, I competed in several regional and national tournaments, winning numerous medals, and attending 
                        international seminars. Though I don’t train as intensely now, karate still holds a special place in my heart, and I 
                        occasionally participate in local competitions when I can.
                    </Text>

                    {/* List of karate details */}
                    <List 
                        style={{paddingTop:"10px"}} // Add top padding
                    >
                        <ListItem>Style: GojuKai Karate, known for its emphasis on powerful strikes and precise techniques.</ListItem>
                        <ListItem>Dedication: Started at the age of 4 and trained consistently for over a decade to achieve black belt status.</ListItem>
                        <ListItem>Japan Experience: Traveled to Japan in 2016 to complete black belt certification, immersing yourself in the birthplace of karate and learning from world-renowned senseis.</ListItem>
                        <ListItem>Competitions: Participated in numerous regional and national tournaments, earning multiple medals.</ListItem>
                        <ListItem>Current Engagement: While no longer training intensively, you remain connected to karate through occasional participation in local competitions and by cherishing its values in daily life.</ListItem>
                    </List>
                </Grid.Col>

                {/* Gaming Section - Description */}
                <Grid.Col span={{base: 12, xs: 6}} // Full width on small screens, half width on larger screens
                > 
                    <Title 
                        order={2} 
                        style={{textAlign:"center"}} // Align text center in column
                    > Gaming </Title>
                    <Text style={{paddingTop:"10px"}} // Add top topping padding
                    >
                    I’ve been into gaming for as long as I can remember. It started when I was really young, with simple games on the family 
                    computer, but over the years, it became a bigger part of my life. I’ve played just about everything—from RPGs and strategy 
                    games to fast-paced FPS titles. My favorite games are those that offer a deep storyline and immersive worlds, like The 
                    Witcher 3 and Elder Scrolls V: Skyrim. I’ve always enjoyed competing with friends and online players, especially in games 
                    like Fortnite and Valorant. Gaming has been a way for me to unwind, challenge myself, and connect with others, and even 
                    though I don’t game as much as I used to, it’s still a hobby I hold dear. 
                    </Text>

                     {/* List of gaming details */}
                    <List style={{paddingTop:"10px"}} // Add top padding
                    >
                        <ListItem>Diverse Interests: Enjoy playing a variety of genres, including RPGs, strategy games, and fast-paced FPS titles.</ListItem>
                        <ListItem>Favorite Games: The Witcher 3 and Elder Scrolls V: Skyrim for their deep storylines and immersive worlds.</ListItem>
                        <ListItem>Competitive Edge: Enjoy competing with friends and online players in multiplayer games like Fortnite and Valorant.</ListItem>
                        <ListItem>Purpose: Gaming serves as a way to unwind, challenge yourself, and connect with others.</ListItem>
                        <ListItem>Current Engagement: While not gaming as much as before, it remains a cherished hobby.</ListItem>
                    </List>
                </Grid.Col>
                <Grid.Col span={{base: 12, xs: 6}} style={{padding:5}}>
                    <Image src={gaming} style={{width: "100%", height: "100%"}}></Image>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Hobbies