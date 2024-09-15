import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thoughtCatalog from "../../assets/images/b3.jpg";
import banner_2 from '../../assets/images/b4.jpg'
import banner_3 from '../../assets/images/thought-catalog.jpeg'
import banner_4 from '../../assets/images/b1.jpg'
import sliderimg from '../../assets/images/sliderimg.jpeg'

export default function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Slider {...settings}>
        <div className="h-[508px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={sliderimg}
            alt="Thought catalog banner"
          />
        </div>
        <div className="h-[508px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={thoughtCatalog}
            alt="Thought catalog banner"
          />
        </div>
        <div className="h-[508px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={banner_2}
            alt="Thought catalog banner"
          />
        </div>
        <div className="h-[508px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={banner_3}
            alt="Thought catalog banner"
          />
        </div>
        <div className="h-[508px]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={banner_4}
            alt="Thought catalog banner"
          />
        </div>
      </Slider>
    );
  }
  