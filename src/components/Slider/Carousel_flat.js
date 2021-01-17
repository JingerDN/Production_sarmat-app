import React from "react";

import Slider from "react-slick";
import "./styles.css";

import slide_one from "../../images/flat_img/airplane-montaine.jpg";
import slide_two from "../../images/flat_img/cargo-ship1.jpg";
import slide_three from "../../images/flat_img/chopin-airport.jpg";
import slide_four from "../../images/flat_img/cargo-ship0.jpg";
import slide_five from "../../images/flat_img/truck0.jpg";
import slide_six from "../../images/flat_img/truck1.jpg";
import slide_seven from "../../images/flat_img/truck2.jpg";



const Carousel = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay: true,
        speed: 300,
      }
  return (
    <div
    className="carrousel_wrapper">
    <Slider {...settings}>
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_one})`,
            overflow:'hidden',
          }}
          
        />
      </div>
      
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_two})`,
            overflow:'hidden',
          }}
        />
    
      </div>
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_three})`,
            overflow:'hidden',
          }}
        />
     
      </div>
      
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_four})`,
            overflow:'hidden',
          }}
        />
     
      </div>
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_five})`,
            overflow:'hidden',
          }}
        />
     
      </div>
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_six})`,
            overflow:'hidden',
          }}
        />
      
      </div>
      <div>
        <div
          className="carrousel_image"
          style={{
            background: `url(${slide_seven})`,
            overflow:'hidden',
          }}
        />
      
      </div>
      
    </Slider>
  </div>
);

};

export default Carousel;