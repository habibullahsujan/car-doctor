import React from "react";
import { FaCalendarAlt,FaPhoneAlt, FaMapMarked} from "react-icons/fa";



const Banner = () => {
  return (
    <div className="p-6 py-12 bg-[#151515] text-white rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
         <div className="flex items-center gap-3">
         <FaCalendarAlt className="text-4xl"/>
         <div>
            <small>We are open monday-friday</small>
            <h2  className="font-bold text-xl">7:00 am - 9:00 pm</h2>
         </div>
         </div>
          <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-4xl"/>
          <div>
            <small>Have a question?</small>
            <h2 className="font-bold text-xl">+2546 251 2658</h2>
          </div>
          </div>
         <div className="flex items-center gap-3">
            <FaMapMarked className="text-4xl"/>
            <div>
                <small>Need a repair? our address</small>
                <h2 className="font-bold text-xl">Liza Street, New York</h2>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
