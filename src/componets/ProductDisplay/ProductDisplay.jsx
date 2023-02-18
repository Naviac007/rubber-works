import React from 'react'
import ProductTile from './ProductTile';
import './ProductDisplay.css'
import Typography from '@mui/material/Typography';

function ProductDisplay(props) {

  return (
    <React.Fragment>
    <Typography
    variant="h4"                        
>
    Some of our products
</Typography>
    <div className="wrap">

    {props.products.map((item) => {
              return (
                <ProductTile
                imglink={item.imglink}
                name={item.name}                
                />
              );
            })}
    </div>
    </React.Fragment>
  )
}

export default ProductDisplay