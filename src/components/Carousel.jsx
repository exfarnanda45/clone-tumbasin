import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div
        className="container"
        style={{
          padding: "0",
          marginTop: "60px"
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Joshua Earle on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Alisa Anton on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Igor Ovsyannykov on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Pierre Châtel-Innocenti on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Richard Nolan on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://picsum.photos/450/200"
              alt="Credit to Cristina Gottardi on Unsplash"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
