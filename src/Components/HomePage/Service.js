import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <Link to={`/serviceDetails/${_id}`} className="p-5 rounded-lg border border-[#E8E8E8] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 cursor-pointer">
      <img src={img} alt="" className="w-[314px] h-[204px] rounded-2xl" />
      <div>
        <div>
          <h2 className="font-bold text-black mt-2">{title}</h2>
        </div>
        <div className="flex justify-between items-center">
          <h5 className="text-[#FF3811] font-bold mt-2">Price: ${price}</h5>
          <FaArrowRight className="text-[#FF3811]" />
        </div>
      </div>
    </Link>
  );
};

export default Service;
