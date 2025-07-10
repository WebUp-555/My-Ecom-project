import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';

function AdaptiveHeight() {
  const settings = {
    className: "h-auto",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div className="slider-container h-400px">
      <Slider {...settings} >
        <div>
          <img src="/Images/t-shirt1.jpg" alt=""  />
        </div>
        <div>
          <img src="/b1.png" alt="" />
        </div>
        <div>
          <img src="/ro.jpg" alt="" />
        </div>
       
        
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;

