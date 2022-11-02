import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../HomePage/Carousel.css";
import { FaArrowRight, FaRegFilePdf } from "react-icons/fa";
import Facility from "./Facility";
import logo from "../../Utility/logo.svg";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
 
  const { img, price, description, facility, _id } = serviceDetails;
  return (
    <div>
      <div className="relative w-[85%] mx-auto h-[300px]">
        <div className="service-details-banner">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src={img}
            alt=""
          />
        </div>
        <p className="absolute text-white top-[50%] left-28 font-bold text-2xl">
          Service Details
        </p>
      </div>
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-8 gap-10 mt-[130px]">
        <div className="col-span-5">
          <div>
            <img src={img} className="h-[400px] w-full rounded-lg" alt="" />
            <div className="mt-8">
              <h3 className="font-bold text-4xl my-5">
                Unique Car Engine Service
              </h3>
              <p className="text-[#737373]">{description}</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-10">
              {facility.map((faci) => (
                <Facility faci={faci} />
              ))}
            </div>
            <div className="my-5">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-4xl">3 Simple Steps to Process</h2>
              <div className="my-5">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
              </div>
            </div>
            <div className="lg:flex gap-5">
              <div className="border border-[#E8E8E8] p-5 flex flex-col items-center rounded-lg">
                <div className="bg-red-300 h-[83px] w-[83px] flex justify-center items-center rounded-[50%]">
                  <div className="bg-[#FF3811] rounded-[50%] text-white font-bold text-2xl h-[55px] w-[55px] flex items-center justify-center">
                    <span>01</span>
                  </div>
                </div>
                <h1 className="font-bold text-xl">STEP ONE</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="border border-[#E8E8E8] p-5 flex flex-col items-center rounded-lg">
                <div className="bg-red-300 h-[83px] w-[83px] flex justify-center items-center rounded-[50%]">
                  <div className="bg-[#FF3811] rounded-[50%] text-white font-bold text-2xl h-[55px] w-[55px] flex items-center justify-center">
                    <span>01</span>
                  </div>
                </div>
                <h1 className="font-bold text-xl">STEP ONE</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="border border-[#E8E8E8] p-5 flex flex-col items-center rounded-lg">
                <div className="bg-red-300 h-[83px] w-[83px] flex justify-center items-center rounded-[50%]">
                  <div className="bg-[#FF3811] rounded-[50%] text-white font-bold text-2xl h-[55px] w-[55px] flex items-center justify-center">
                    <span>01</span>
                  </div>
                </div>
                <h1 className="font-bold text-xl">STEP ONE</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
            <div className="my-5">
                <img className="rounded-lg" src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className=" bg-[#F3F3F3] p-10 rounded-lg pb-20">
            <h4 className="font-bold text-lg mb-3">Services</h4>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg hover:bg-[#FF3811] hover:text-white cursor-pointer">
              <Link>Full Car Repair </Link>
              <FaArrowRight className="text-[#FF3811] hover:text-white" />
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg mt-3 hover:bg-[#FF3811] hover:text-white cursor-pointer">
              <Link>Engine Repair </Link>
              <FaArrowRight className="text-[#FF3811]" />
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg mt-3 hover:bg-[#FF3811] hover:text-white cursor-pointer">
              <Link>Automatic Services</Link>
              <FaArrowRight className="text-[#FF3811]" />
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg mt-3 hover:bg-[#FF3811] hover:text-white cursor-pointer">
              <Link>Engine Oil Change </Link>
              <FaArrowRight className="text-[#FF3811]" />
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg mt-3 hover:bg-[#FF3811] hover:text-white cursor-pointer">
              <Link>Battery Charge</Link>
              <FaArrowRight className="text-[#FF3811]" />
            </div>
          </div>
          <div>
            <div className="bg-[#151515] text-white p-10 mt-5 rounded-lg">
              <h3 className="font-bold text-xl mb-3">Download</h3>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center">
                  <FaRegFilePdf className="text-4xl" />
                  <div>
                    <h5 className="m-0 p-0">Our Brochure</h5>
                    <span>Download</span>
                  </div>
                </div>
                <div className="p-3 bg-[#FF3811]">
                  <FaArrowRight className=" text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 mt-8">
                <div className="flex items-center">
                  <FaRegFilePdf className="text-4xl" />
                  <div>
                    <h5 className="m-0 p-0">Company Details</h5>
                    <span>Download</span>
                  </div>
                </div>
                <div className="p-3 bg-[#FF3811]">
                  <FaArrowRight className=" text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#151515] text-white text-center p-20 mt-5 rounded-lg">
            <img className="h-[115px]" src={logo} alt="" />
            <h5 className="font-bold text-lg">
              Need Help? We Are Here To Help You
            </h5>
            <div className="bg-white text-black rounded-lg relative h-[126px]">
              <h5 className="font-bold text-xl mt-6">
                <span className="text-[#FF3811]">Car Doctor</span> Special
              </h5>
              <span className="font-bold">Save up to 60% off</span>
              <Link className="bg-[#FF3811] text-white h-[56px] w-[80%] rounded-lg  absolute flex items-center justify-center left-5 top-[80%]">
                <p>Get A Quote</p>
              </Link>
            </div>
          </div>
          <div className="my-10">
            <h1 className="font-bold text-4xl">Price:${price}</h1>
          </div>
          <div className="w-full bg-[#FF3811] text-center py-3 font-bold text-white rounded-lg">
            <Link to={`/checkout/${_id}`}>Proceed Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
