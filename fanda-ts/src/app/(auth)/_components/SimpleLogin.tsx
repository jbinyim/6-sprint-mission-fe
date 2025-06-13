import Link from "next/link";
import React from "react";

const SimpleLogin = () => {
  return (
    <>
      <article className="w-[343px] tablet:w-[640px] h-[74px] bg-[#E6F2FF] rounded-[8px] flex items-center justify-between px-[24px] mt-[24px]">
        <p>간편 로그인하기</p>
        <div className="flex items-center gap-[16px]">
          <img
            src="/icons/googleLogin.png"
            alt="구글 로그인"
            className="w-[42px] h-[42px] cursor-pointer"
          />
          <img
            src="/icons/kakaoLogin.png"
            alt="카카오 로그인"
            className="w-[42px] h-[42px] cursor-pointer"
          />
        </div>
      </article>
    </>
  );
};

export default SimpleLogin;
