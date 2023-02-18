import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useImage from '../../comman/useImage';
function Slide(props) {
    const { loading, error, image } = useImage(props.imglink)
    
    return (
        <Card sx={{ minWidth: 345}}>
          <CardActionArea>
            {error&&
            <CardMedia
            component="img"           
            alt={props.name}
          />}
          {!error&&loading?<Typography gutterBottom variant="h5" component="div">
                Loading...
              </Typography>:
            <CardMedia
              component="img"
              height="220px"
              width="220px"
              image={image}
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              alt={props.name}
            />
          }
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>              
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Slide