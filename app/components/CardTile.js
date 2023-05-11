import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardTile() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We are an agricultural company Incorporated in Kenya in 2015 and we have been in the export of organic exotic fruits since 2015.
        We partner with thousands of enthusiastic small holder farmers, selected orchardists and wild collectors to bring you the acclaimed super fruits:
        the avocado, passion fruit, mango, and the king of fruits the baobab.
        With an endowed sunny climate all year round, rich volcanic soils combined with a dedicated and competent personnel with a delicate keenness
        towards food safety assurance and quality we are delighted to fulfill your need for a natural, nutritious products that also promotes health and wellbeing. This is what excites us every day and makes us wonder in the wild
        to craft something new that enriches life.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}