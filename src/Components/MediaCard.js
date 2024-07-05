import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
console.log("render");
export default function MediaCard({ cardTitle, cardBody, inMode }) {
  return (
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        sx={{ height: 200}}
        image={require("../images/projecttech.jpg")}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardBody}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}