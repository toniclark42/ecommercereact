import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#5D616C", borderRadius: "100%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#5D616C", borderRadius: "100%"}}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="wrapper">
        <Slider className="slider"{...settings}>
            <div><img className="mySlides" src="./Img/simplyBeautiful.jpg" alt="Simply Beautiful Cake" /></div>
            <div><img className="mySlides" src="./Img/cinnamonCraze.jpg" alt="Cinnamon Craze Cupcakes" /></div>
            <div><img className="mySlides" src="./Img/fruitFrenzy.jpg" alt="Fruit Frenzy Cake" /></div>
            <div><img className="mySlides" src="./Img/honeyGlazedBerries.jpg" alt="Honey Glazed Berries Cake" /></div>
            <div><img className="mySlides" src="./Img/succulentSeries.jpg" alt=" Succulent Series Cupcakes" /></div>
            <div><img className="mySlides" src="./Img/darkChocolateDelight.jpg" alt=" Dark Chocolate Delight Cake" /></div>
        </Slider>
      </div>
    );
  }
}