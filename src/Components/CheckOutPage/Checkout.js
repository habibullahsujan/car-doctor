import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Checkout = () => {
  const selectedService = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { img, title, service_id, price } = selectedService;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phoneNumber.value;
    const email = form.email.value;
    const message = form.message.value;
    const fullName = `${firstName} ${lastName}`;

    const time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    const fullTime={date:date, month:month, year:year}

    const confirmOrderDetails = {
      serviceName: title,
      serviceId: service_id,
      servicePrice: price,
      customerName: fullName,
      phoneNumber: phone,
      customerMessage: message,
      email: user?.email || email,
      servicePicture: img,
      orderConfirmationTime:fullTime,
    };

    fetch("http://localhost:5000/confirmOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmOrderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order  Placed to Expert Team.");
          navigate("/confirmOrder");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="relative lg:w-[85%] mx-auto h-[300px]">
        <div className="service-details-banner">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src={img}
            alt=""
          />
        </div>
        <p className="absolute text-white top-[50%] left-28 font-bold text-4xl">
          Checkout
        </p>
      </div>
      <div className="my-10 bg-[#F3F3F3] w-[85%] mx-auto p-20">
        <form onSubmit={handleConfirmOrder} className="">
          <div className=" w-full grid lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="p-2"
              name="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2"
              name="lastName"
              required
            />
            <input
              type="number"
              name="phoneNumber"
              id=""
              placeholder="Your Phone Number"
              className="p-2"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="p-2"
              required
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="my-10">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="p-2 w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF3811] py-3 rounded-lg font-bold text-white text-center"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
