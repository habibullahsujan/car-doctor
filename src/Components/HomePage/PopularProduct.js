import React from "react";
import { FaStar } from "react-icons/fa";

const PopularProduct = ({ product }) => {
  const { name, picture, price } = product;

  return (
    <div className="p-5 rounded-lg border border-[#E8E8E8]  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 cursor-pointer">
      <div className=" bg-[#F3F3F3] p-10 rounded-xl">
        <img
          src={picture}
          alt=""
          className="w-[156px] h-[153px] mx-auto rounded-2xl"
        />
      </div>

      <div>
        <div className="flex justify-center mt-5">
          <FaStar className="text-[#FF912C]" />
          <FaStar className="text-[#FF912C]" />
          <FaStar className="text-[#FF912C]" />
          <FaStar className="text-[#FF912C]" />
          <FaStar className="text-[#FF912C]" />
        </div>
        <div className=" flex justify-center">
          <h2 className="font-bold text-black mt-2">{name}</h2>
        </div>
        <div className="flex justify-center items-center">
          <h5 className="text-[#FF3811] font-bold mt-2">{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
