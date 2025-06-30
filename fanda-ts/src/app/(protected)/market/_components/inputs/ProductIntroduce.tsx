"use client";

import React, { useRef, useState } from "react";
import { ProductInputProps } from "./type";

const ProductIntroduce = ({
  title,
  customState,
  customUseState,
}: ProductInputProps) => {
  const [error, setError] = useState(false);
  const errorTimer = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    customUseState(e.target.value);

    if (errorTimer.current) {
      clearTimeout(errorTimer.current);
    }

    if (e.target.value.length < 10) {
      if (!e.target.value.trim()) {
        setError(false);
        return;
      }

      errorTimer.current = setTimeout(() => {
        setError(true);
      }, 1000);
    } else {
      setError(false);
    }
  };

  return (
    <article>
      {title("상품 소개")}
      <textarea
        placeholder="상품 소개를 입력해주세요"
        onChange={handleChange}
        value={customState}
        className={`w-full h-[282px] bg-gray100 rounded-[12px] pt-[16px] px-[24px] ${
          error ? "outline-error" : "outline-none"
        }`}
      />
      {error && (
        <p className="mt-[5px] ml-[10px] text-[14px] text-error font-[600]">
          10자 이상 입력해주세요
        </p>
      )}
    </article>
  );
};

export default ProductIntroduce;
