import KeyValueTable from "../../components/KeyValueTable";
import { Grid, Image, Text } from '@mantine/core';
import karateImg from "../../assets/karate.jpg"; // Karate image asset
import gamingImg from "../../assets/gaming.jpg"; // Gaming image asset
import SectionTitle from "../../components/SectionTitle";


import { HobbyData } from "./models";
import useFetchData from "../../hooks/useFetchData";


function Hobbies(){
      // Use the custom hook to fetch data from the API endpoint
    const { data, error, loading } = useFetchData<HobbyData>("/Hobbies", {
        karate: { title: "", details: [], paragraph: "" },
        gaming: { title: "", details: [], paragraph: ""},
    });

    // Handling error state
    if (error) {
        return <div>Error: {error}</div>; // Display error message if the request fails
    }

    // Display loading message while data is being fetched
    if (loading) {
        return <div>Loading...</div>; // Or use a spinner component here
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
                    <SectionTitle title={data?.karate?.title ?? "No title available"} />
                    <Text>{data?.karate?.paragraph ?? "No description available"}</Text>
                    <KeyValueTable data={data?.karate?.details ?? []}/>
                </Grid.Col>

                {/* Gaming Section - Description */}
                <Grid.Col span={{base: 12, xs: 6}}> 
                    <SectionTitle title={data?.gaming?.title ?? "No title available"} />
                    <Text>{data?.gaming?.paragraph ?? "No description available"}</Text>
                    <KeyValueTable data={data?.gaming?.details ?? []}/>
                </Grid.Col>
                
                <Grid.Col span={{base: 12, xs: 6}} style={{padding:5}}>
                    <Image src={gamingImg} style={{width: "100%", height: "100%"}}></Image>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Hobbies