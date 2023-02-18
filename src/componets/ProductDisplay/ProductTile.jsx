import React from 'react'
import useImage from '../../comman/useImage';
import Typography from '@mui/material/Typography';
import './ProductDisplay.css'
function ProductTile(props) {
  const { loading, error, image } = useImage(props.imglink)
  return (
    <div className="tile">
       {!error&&loading?<Typography gutterBottom variant="h5">
                Loading...
              </Typography>: <img src={image} alt={props.name} />}
       
                <Typography
                    justifyContent={"center"}
                    position={"fixed"}
                    className='animate-text'
                    variant="h6"   
                    sx={{marginTop:"80%"}}                     
                >
                    {props.name}
                </Typography>

    </div>
  )
}

export default ProductTile