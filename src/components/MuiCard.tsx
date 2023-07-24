import React from 'react'
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material'

export default function MuiCard() {
  return (
    <Box width="500px">
      <Card elevation={4}>
        <CardMedia
          component="img"
          height="300px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">React</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia harum
            quaerat explicabo voluptas dolores sint minus dolor quis,
            consequuntur pariatur. Nihil necessitatibus eius obcaecati
            veritatis, praesentium officia velit quis architecto!
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Share</Button>
          <Button variant="contained">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
