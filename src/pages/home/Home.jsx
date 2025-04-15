import React from "react";
import { Link } from "react-router-dom";
import homeBannerImg from "/images/homes/homeBanner.png";

const Home = () => {
  return (
    <div className="h-[540px] bg-[#CFE5FF] flex items-end justify-center">
      <div className="w-[1110px] flex justify-between">
        <div className="mt-[40px]">
          <p className="text-[40px] font-bold w-[295px] text-[#374151] mb-[32px]">
            일상의 모든 물건을 거래해 보세요
          </p>
          <Link
            className="block w-[357px] h-[56px] rounded-[40px] bg-[#3692FF] text-center leading-[56px] text-xl font-semibold text-white"
            to="/item"
          >
            구경하러 가기
          </Link>
        </div>
        <img
          className="w-[746px] h-[340px]"
          src={homeBannerImg}
          alt="homeBannerImg"
        />
      </div>
    </div>
  );
};

export default Home;
