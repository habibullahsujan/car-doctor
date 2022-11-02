import React from "react";

import "./Carousel.css";
const Slider = ({ bannerItem }) => {
  const { image, id, prev, next } = bannerItem;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex flex-col text-white gap-5  transform -translate-y-1/2 left-5 top-1/2">
        <h1 className="lg:text-6xl font-bold md:w-1/2">
          Affordable Price For Car Servicing
        </h1>
        <p className="w-1/2 hidden lg:block">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn mr-5">Discover More</button>
          <button className="btn btn-outline text-white">Latest Project</button>
        </div>
      </div>
      <div className="absolute flex justify-end gap-5  transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slider;
