import * as React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

export default function MediaCard({cardTitle, cardBody}) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={require("../images/backdrop.jpg")}
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