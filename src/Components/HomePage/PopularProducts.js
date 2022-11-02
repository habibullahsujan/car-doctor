import React, { useEffect, useState } from "react";
import PopularProduct from "./PopularProduct";

const PopularProducts = () => {
  const [popularProducts, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <div className="mt-[130px]">
      <div className="text-center w-3/5 mx-auto mb-[50px]">
        <span className="text-[#FF3811] font-semibold text-lg">
          Popular Products
        </span>
        <h2 className="text-4xl font-bold">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {popularProducts.map((product) => (
        <PopularProduct key={product._id} product={product} />
      ))}

      </div>
      <div className=" text-center  w-[170px] mx-auto mt-[50px] mb-[130px]">
      <button className="border border-[#FF3811] p-2 text-[#FF3811] font-semibold">More Products</button>
      </div>
     
    </div>
  );
};

export default PopularProducts;
