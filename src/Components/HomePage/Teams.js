import React from "react";

import slideImg1 from "../../Utility/Images/banner/1.jpg";
import slideImg2 from "../../Utility/Images/banner/2.jpg";
import slideImg3 from "../../Utility/Images/banner/3.jpg";
import slideImg4 from "../../Utility/Images/banner/4.jpg";
import slideImg5 from "../../Utility/Images/banner/5.jpg";
import slideImg6 from "../../Utility/Images/banner/6.jpg";
import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Teams = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    
    centerPadding: "60px",
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },  {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg1} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg2} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg3} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg4} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg5} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border border-gray-500 p-2 rounded-lg">
          <img src={slideImg6} alt="" className="rounded-lg" />
          <div className="text-center">
            <h1 className="text-xl font-bold">Car Engine Plug</h1>
            <p>Engine Expert</p>
            <div className="flex mt-3 justify-center  gap-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
    
      </Slider>
    </div>
  );
};

export default Teams;
