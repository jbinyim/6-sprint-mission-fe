"use client";

import { useResponsive } from "@/utils/response";
import React from "react";

const dummyCards = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
];

const BestProducts = () => {
  const { isTablet, isPc } = useResponsive();

  let visibleCardCount = 1;
  if (isTablet) visibleCardCount = 2;
  if (isPc) visibleCardCount = 4;

  const cardsToRender = dummyCards.slice(0, visibleCardCount);

  return (
    <section className="flex items-center justify-center mb-[24px]">
      <div className="">
        <p className="text-[20px] font-bold text-gray900">베스트 상품</p>
        <div className="flex items-center justify-center tablet:gap-[10px] pc:gap-[24px]">
          {cardsToRender.map((card) => (
            <article key={card.id} className="mt-[16px] w-[343px] pc:w-[282px]">
              <img
                src="/markets/productLoding.png"
                alt="상품 이미지"
                className="w-full h-[343px] pc:h-[282px] object-cover rounded-[20px]"
              />
              <div className="flex flex-col gap-[6px] mt-[10px] text-gray800">
                <p className="text-[14px] font-[500]">아이패드 미니 팝니다</p>
                <p className="font-[700]">500,000원</p>
                <div className="flex items-center gap-[3px]">
                  <img
                    src="/icons/ic_heart.png"
                    alt="좋아요 버튼"
                    className="w-[16px] h-[16px]"
                  />
                  <p className="text-[18px] font-[500] text-gray600">240</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
