import React from 'react'
import Header from '../componets/Header';
import SwipeSlider from '../componets/SwipeSlider';
import ProductDisplay from '../componets/ProductDisplay/ProductDisplay';
import Footer from '../componets/Footer/Footer';
function Home(props) {
  return (
    <React.Fragment>   
     <Header /> 
    <SwipeSlider products = {props.products}/>
    <hr style={{margin: "2%"}} id="Products"/>
    <ProductDisplay products = {props.products} />
    <hr style={{margin: "2%"}} id=""/>
    <hr style={{margin: "2%"}} id=""/>
    <Footer/>
    </React.Fragment>
  )
}

export default Home