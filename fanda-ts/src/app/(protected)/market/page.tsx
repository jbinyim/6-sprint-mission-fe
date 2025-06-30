import React from "react";
import BestProducts from "./_components/BestProducts";
import SellingProducts from "./_components/SellingProducts";

const page = () => {
  return (
    <div className="mt-[17px] px-[16px]">
      <BestProducts />
      <SellingProducts />
    </div>
  );
};

export default page;
