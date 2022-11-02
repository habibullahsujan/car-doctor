import React from "react";
import slideImg1 from "../../Utility/Images/banner/1.jpg";
import slideImg2 from "../../Utility/Images/banner/2.jpg";
import slideImg3 from "../../Utility/Images/banner/3.jpg";
import slideImg4 from "../../Utility/Images/banner/4.jpg";
import slideImg5 from "../../Utility/Images/banner/5.jpg";
import slideImg6 from "../../Utility/Images/banner/6.jpg";

import Slider from "./Slider";

const Carousel = () => {
  const bannerData = [
    { image: slideImg1, id: 1, prev: 6, next: 2 },
    { image: slideImg2, id: 2, prev: 1, next: 3 },
    { image: slideImg3, id: 3, prev: 2, next: 4 },
    { image: slideImg4, id: 4, prev: 3, next: 5 },
    { image: slideImg5, id: 5, prev: 4, next: 6 },
    { image: slideImg6, id: 6, prev: 5, next: 1 },
  ];
  return (
    <div className="carousel w-full">
      {bannerData.map((bannerItem) => (
        <Slider key={bannerItem.id} bannerItem={bannerItem} />
      ))}
    </div>
  );
};

export default Carousel;
