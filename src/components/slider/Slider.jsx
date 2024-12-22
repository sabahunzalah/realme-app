
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css"
import imageData from "../../components/slider/Data";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: false,
    // autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={styles.slider}>
        {imageData.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={item.title} className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const NextArrow = ({ onClick }) => {
  return (
    <div className={styles.arrowNext} onClick={onClick}
    style={{
      fontSize: "32px", 
      width: "50px", 
      height: "50px", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      &gt;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className={styles.arrowPre} onClick={onClick}
    style={{
      fontSize: "32px", 
      width: "50px", 
      height: "50px", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      &lt;
    </div>
  );
};


export default CustomSlider;

