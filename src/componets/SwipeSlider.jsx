import React from 'react'
import { useRef} from 'react';
import Slide from './Slide/Slide'
import { register } from 'swiper/element/bundle';

register();

function SwipeSlider(props) {
  const swiperElRef = useRef(null);
  return (
    <div style={{paddingTop:"5px", marginTop:"3%"}}>
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="false"
      loop="true"
      speed="800" 
      autoplay="true"
      delay="1000"
    >
      
      {props.products.map((item) => {
              return (
                <swiper-slide>
                <Slide
                  imglink={item.imglink}
                  name={item.name}
                />
                </swiper-slide>
              );
            })}
      
      
    </swiper-container>
    </div>
  );

}

export default SwipeSlider