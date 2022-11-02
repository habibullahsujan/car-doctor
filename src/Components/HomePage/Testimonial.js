import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="mt-20">
      <div className="text-center w-3/5 mx-auto mb-[50px]">
        <span className="text-[#FF3811] font-semibold text-lg">
          Testimonial
        </span>
        <h2 className="text-4xl font-bold">What Customer Says</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="lg:flex justify-between gap-5">
        <div className="border border-gray-400 p-4">
          <div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <h4> Awlad Hossain</h4>
                <span>Businessman</span>
              </div>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
        </div>
        <div className="border border-gray-400 p-4">
          <div>
            <div className="flex">
              <img src="" alt="" />
              <div>
                <h4> Awlad Hossain</h4>
                <span>Businessman</span>
              </div>
            </div>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="flex">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
