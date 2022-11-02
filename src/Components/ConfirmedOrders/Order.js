import React from "react";
import { FaTrash } from "react-icons/fa";

const Order = ({ order, clickToDeleteOrder, handleStatusUpdate }) => {
  const { servicePicture, servicePrice, serviceName, _id, status } = order;

  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();

  const handleDeleteOrder = (id) => {
    const confirmation = window.confirm("Are You Sure? Delete this item?");
    if (confirmation) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Products Deleted.");
            clickToDeleteOrder(id);
          }
        });
    }
  };

  return (
    <div className="w-[85%] mx-auto my-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div
            onClick={() => handleDeleteOrder(_id)}
            className="cursor-pointer"
          >
            <FaTrash />
          </div>

          <img className="w-40 rounded-lg" src={servicePicture} alt="" />
          <h1 className="font-bold text-lg">{serviceName}</h1>
        </div>
        <div>
          <h5 className="font-bold text-lg">${servicePrice}</h5>
        </div>
        <div>
          <h4 className="font-bold text-lg">
            {date}-{month}-{year}
          </h4>
        </div>
        <div>
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="bg-[#FF3811] text-white py-3 px-10 rounded-lg font-bold"
          >
            {status ? status : "Pending"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
