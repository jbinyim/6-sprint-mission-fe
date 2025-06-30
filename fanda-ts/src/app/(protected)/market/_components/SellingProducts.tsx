"use client";

import Btn from "@/components/common/buttons/Btn";
import FilterDropDown from "@/components/common/dropDowns/FilterDropDown";
import { useResponsive } from "@/utils/response";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const dummyCards = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
  { id: 7, title: "Card 6" },
  { id: 8, title: "Card 6" },
  { id: 9, title: "Card 6" },
  { id: 10, title: "Card 6" },
  { id: 11, title: "Card 6" },
];

const SellingProducts = () => {
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [filterMenu, setFilterMenu] = useState<string>("최신순");
  const router = useRouter();

  const { isMobile, isTablet, isPc } = useResponsive();

  let visibleCardCount = 4;
  if (isTablet) visibleCardCount = 6;
  if (isPc) visibleCardCount = 10;

  const cardsToRender = dummyCards.slice(0, visibleCardCount);

  return (
    <div>
      {isMobile && (
        <nav className="w-[343px] mx-auto">
          <div className="flex items-center justify-between mb-[8px]">
            <p className="text-[20px] font-bold text-gray900">판매 중인 상품</p>
            <Btn
              status="default"
              width="133"
              height="42"
              onClick={() => router.push("/market/productRegister")}
            >
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
              {isFilter && (
                <FilterDropDown right="0px" setFilterMenu={setFilterMenu} />
              )}
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
            <Btn
              status="default"
              width="133"
              height="42"
              onClick={() => router.push("/market/productRegister")}
            >
              상품 등록하기
            </Btn>
            <span
              onClick={() => setIsFilter((prev) => !prev)}
              className="cursor-pointer relative"
            >
              <div className="flex items-center justify-center gap-[24px] w-[130px] h-[42px] border border-gray200 rounded-[12px]">
                <p>{filterMenu}</p>
                <img src="/icons/ic_arrow_down.png" alt="드롭다운 버튼" />
              </div>
              {isFilter && (
                <FilterDropDown
                  right="0px"
                  top="50px"
                  setFilterMenu={setFilterMenu}
                />
              )}
            </span>
          </form>
        </nav>
      ) : null}
      <section className="mt-[16px] mb-[40px] grid grid-cols-[repeat(2,_166px)] items-center justify-center gap-x-[8px] gap-y-[32px] tablet:grid-cols-[repeat(3,_220px)] tablet:gap-x-[16px] tablet:gap-y-[40px] pc:grid-cols-[repeat(5,_220px)] pc:gap-x-[24px]">
        {cardsToRender.map((card) => (
          <div key={card.id} className="w-[166px] tablet:w-[220px]">
            <img
              src="/markets/productLoding.png"
              alt="상품 이미지"
              className="h-[166px] rounded-[9px] tablet:h-[220px]"
            />
            <div className="mt-[16px] flex flex-col gap-[6px]">
              <p className="text-[14px] font-[500] text-gray800">로봇 청소기</p>
              <p className="font-bold text-gray800">1,500,000원</p>
              <div className="flex items-center gap-[4px]">
                <img
                  src="/icons/ic_heart.png"
                  alt="좋아요 수"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-[12 px] font-[500] text-gray600">240</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="w-[304px] mx-auto flex items-center gap-[4px]">
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray600 cursor-pointer">
          {"<"}
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center cursor-pointer bg-primary200 text-white">
          1
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray500 cursor-pointer">
          2
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray500 cursor-pointer">
          3
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray500 cursor-pointer">
          4
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray500 cursor-pointer">
          5
        </div>
        <div className="w-[40px] h-[40px] border border-gray200 rounded-[40px] flex items-center justify-center text-gray600 cursor-pointer">
          {">"}
        </div>
      </section>
    </div>
  );
};

export default SellingProducts;
