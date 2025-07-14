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
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-container h-[400px] px-4 md:px-20">
      <Slider {...settings}>
        <div>
          <img
            src="/Images/t-shirt1.jpg"
            alt="T-shirt 1"
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>
        <div>
          <img
            src="/b1.png"
            alt="Banner 1"
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>
        <div>
          <img
            src="/ro.jpg"
            alt="Promo"
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>
      </Slider>
    </div>
  );
}

export default AdaptiveHeight;
