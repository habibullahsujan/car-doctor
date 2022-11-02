import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="text-center w-3/5 mx-auto mb-[50px]">
        <span className="text-[#FF3811] font-semibold text-lg">Service</span>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className=" text-center  w-[170px] mx-auto mt-[50px] mb-[130px]">
      <button className="border border-[#FF3811] p-2 text-[#FF3811] font-semibold">More Services</button>
      </div>
      
    </>
  );
};

export default Services;
