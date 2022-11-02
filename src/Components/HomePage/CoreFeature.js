import React from "react";
import guranteeIcon from "../../Utility/icons/check.svg";
import timelyDeliveryIcon from "../../Utility/icons/deliveryt.svg";
import timelyDeliveryIcon2 from "../../Utility/icons/Group 38729.svg";
import teamIcon from "../../Utility/icons/group.svg";
import supportIcon from "../../Utility/icons/person.svg";
import wrenchIcon from "../../Utility/icons/Wrench.svg";

const CoreFeature = () => {
  return (
    <div className="mt-[130px]">
      <div className="text-center w-3/5 mx-auto mb-[50px]">
        <span className="text-[#FF3811] font-semibold text-lg">Core Features</span>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
      </div>
      <div className="lg:flex gap-3 justify-between">
        <div className="border border-[#E8E8E8] p-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400 cursor-pointer hover:text-[#FF3811]">
          <img src={teamIcon} alt="" className="mx-auto" />
          <span className="font-semibold">Expert Team</span>
        </div>
        <div className="border border-[#E8E8E8] p-2">
          <img className="bg-slate-500 mx-auto" src={timelyDeliveryIcon2} alt="" />
          <span className="font-semibold">Timely Delivery</span>
        </div>
        <div className="border border-[#E8E8E8] p-2">
          <img className="mx-auto" src={supportIcon} alt="" />
          <span className="font-semibold">24/7 Support</span>
        </div>
        <div className="border border-[#E8E8E8] p-2">
          <img className="mx-auto" src={wrenchIcon} alt="" />
          <span className="font-semibold">Best Equipment</span>
        </div>
        <div className="border border-[#E8E8E8] p-2">
          <img className="mx-auto" src={guranteeIcon} alt="" />
          <span className="font-semibold">100% Guranty</span>
        </div>
        <div className="border border-[#E8E8E8] p-2">
          <img className="mx-auto" src={timelyDeliveryIcon} alt="" />
          <span className="font-semibold">Timely Delivery</span>
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
