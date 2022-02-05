import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
  return <div>

<Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Xyz Organization
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          India
        </Typography>
        <Typography variant="body2" >
          Learning is the
          <br />
          Key to sucess
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact US</Button>
      </CardActions>
    </Card>
  </div>;
}

export default Cards;
