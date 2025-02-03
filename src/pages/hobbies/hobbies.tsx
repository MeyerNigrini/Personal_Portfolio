import KeyValueTable from "../../components/KeyValueTable";
import { Grid, Image, Text } from '@mantine/core';
import karateImg from "../../assets/karate.jpg"; // Karate image asset
import gamingImg from "../../assets/gaming.jpg"; // Gaming image asset
import SectionTitle from "../../components/SectionTitle";


import { HobbyData } from "./models";
import useFetchData from "../../hooks/useFetchData";


function Hobbies(){
      // Use the custom hook to fetch data from the API endpoint
    const { data, error } = useFetchData<HobbyData>("/Hobbies", {
        karate: { title: "", paragraph: "", details: [] },
        gaming: { title: "", paragraph: "", details: [] },
    });

    // Handling error state
    if (error) {
        return <div>Error: {error}</div>; // Display error message if the request fails
    }

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
                    <SectionTitle title={data?.karate.title ?? ""} />
                    <Text>{data?.karate.paragraph}</Text>
                    <KeyValueTable data={data?.karate.details ?? []}/>
                </Grid.Col>

                {/* Gaming Section - Description */}
                <Grid.Col span={{base: 12, xs: 6}}> 
                    <SectionTitle title={data?.gaming.title ?? ""} />
                    <Text>{data?.gaming.paragraph}</Text>
                    <KeyValueTable data={data?.gaming.details ?? []}/>
                </Grid.Col>
                
                <Grid.Col span={{base: 12, xs: 6}} style={{padding:5}}>
                    <Image src={gamingImg} style={{width: "100%", height: "100%"}}></Image>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Hobbies