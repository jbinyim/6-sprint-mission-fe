"use client";

import Btn from "@/components/common/buttons/Btn";
import FilterDropDown from "@/components/common/dropDowns/FilterDropDown";
import { useResponsive } from "@/utils/response";
import React, { useState } from "react";

const SellingProducts = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const { isMobile, isTablet, isPc } = useResponsive();

  return (
    <div>
      {isMobile && (
        <nav className="w-[343px] mx-auto">
          <div className="flex items-center justify-between mb-[8px]">
            <p className="text-[20px] font-bold text-gray900">판매 중인 상품</p>
            <Btn status="default" width="133" height="42">
              상품 등록하기
            </Btn>
          </div>
          <form className="flex items-center justify-between">
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="w-[288px] h-[42px] rounded-[12px] bg-gray100 px-[16px] placeholder:text-gray400 outline-none"
            />
            <span
              className="relative"
              onClick={() => setIsFilter((prev) => !prev)}
            >
              <div className="w-[42px] h-[42px] border border-gray200 flex items-center justify-center rounded-[12px] cursor-pointer">
                <img
                  src="/icons/ic_sort.png"
                  alt="필터 검색 버튼"
                  className="w-[24px] h-[24px]"
                />
              </div>
              {isFilter && <FilterDropDown right="0px" />}
            </span>
          </form>
        </nav>
      )}
      {isTablet || isPc ? (
        <nav className="flex items-center justify-between max-w-[744px] mx-auto pc:max-w-[1200px]">
          <p className="text-[20px] font-bold text-gray900">판매 중인 상품</p>
          <form className="flex items-center gap-[12px]">
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="w-[242px] h-[42px] rounded-[12px] bg-gray100 px-[16px] placeholder:text-gray400 outline-none"
            />
            <Btn status="default" width="133" height="42">
              상품 등록하기
            </Btn>
            <span
              onClick={() => setIsFilter((prev) => !prev)}
              className="cursor-pointer relative"
            >
              <div className="flex items-center justify-center gap-[24px] w-[130px] h-[42px] border border-gray200 rounded-[12px]">
                <p>최신순</p>
                <img src="/icons/ic_arrow_down.png" alt="드롭다운 버튼" />
              </div>
              {isFilter && <FilterDropDown right="0px" top="50px" />}
            </span>
          </form>
        </nav>
      ) : null}
    </div>
  );
};

export default SellingProducts;
