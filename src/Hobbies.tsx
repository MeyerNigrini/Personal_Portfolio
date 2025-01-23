import { Grid, Image } from '@mantine/core';

function Hobbies(){
    return (
        <Grid gutter="md">
        <Grid.Col span={6}>Block 1
            <Image></Image>

        </Grid.Col>
        <Grid.Col span={6}>Block 2</Grid.Col>
        <Grid.Col span={6}>Block 3</Grid.Col>
        <Grid.Col span={6}>Block 4</Grid.Col>
      </Grid>
    )
}

export default Hobbies