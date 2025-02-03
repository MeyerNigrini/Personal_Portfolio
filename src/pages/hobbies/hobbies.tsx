import KeyValueTable from "../../components/KeyValueTable";
import { Grid, Image, Text } from '@mantine/core';
import karateImg from "../../assets/karate.jpg"; // Karate image asset
import gamingImg from "../../assets/gaming.jpg"; // Gaming image asset
import SectionTitle from "../../components/SectionTitle";

import { useEffect, useState } from 'react';
import api from '../../services/apiService';
import { HobbyData } from "./models";



function Hobbies(){
    const [hobbies, setHobbies] = useState<HobbyData | null>(null);

    useEffect(() => {
        api.get("/Hobbies") // Adjust the port if needed
            .then((response) => {
                setHobbies(response.data);  // Axios automatically parses JSON
            })
    }, []);

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
                <Grid.Col span={{base: 12, xs: 6}} style={{padding:5}}> 
                    <Image 
                        src={karateImg} // Karate image source
                        style={{width: "100%", height: "100%"}} // Set full width and height for responsiveness
                    />
                </Grid.Col>

                {/* Karate Description section */}
                <Grid.Col span={{base: 12, xs: 6}}>
                    <SectionTitle title={hobbies?.karate.title ?? ""} />
                    <Text>{hobbies?.karate.paragraph}</Text>
                    <KeyValueTable data={hobbies?.karate.details ?? []}/>
                </Grid.Col>

                {/* Gaming Section - Description */}
                <Grid.Col span={{base: 12, xs: 6}}> 
                    <SectionTitle title={hobbies?.gaming.title ?? ""} />
                    <Text>{hobbies?.gaming.paragraph}</Text>
                    <KeyValueTable data={hobbies?.gaming.details ?? []}/>
                </Grid.Col>
                
                <Grid.Col span={{base: 12, xs: 6}} style={{padding:5}}>
                    <Image src={gamingImg} style={{width: "100%", height: "100%"}}></Image>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Hobbies