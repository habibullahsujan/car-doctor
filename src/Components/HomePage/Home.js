import React from "react";
import About from "./About";
import Banner from "./Banner";
import Carousel from "./Carousel";
import CoreFeature from "./CoreFeature";
import PopularProducts from "./PopularProducts";
import Services from "./Services";

import Teams from "./Teams";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="my-5 w-[85%] mx-auto">
      <Carousel />
      <About />
      <Services />
      <Banner />
      <PopularProducts />
      <div className="w-full">
        <Teams />
      </div>
      <div>
        <CoreFeature/>
      </div>
      <div>
        <Testimonial/>
      </div>
      
    </div>
  );
};

export default Home;
