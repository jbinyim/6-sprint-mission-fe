"use client";

import React, { useState } from "react";
import { ProductInputProps } from "./type";

const ProductPrice = ({
  title,
  customState,
  customUseState,
}: ProductInputProps) => {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customUseState(e.target.value);

    if (!e.target.value.trim()) {
      setError(false);
      return;
    }

    if (!Number(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <article>
      {title("판매 가격")}
      <input
        type="text"
        placeholder="판매 가격을 입력해주세요"
        onChange={handleChange}
        value={customState}
        className={`w-full h-[56px] bg-gray100 rounded-[12px] px-[24px] ${
          error ? "outline-error" : "outline-none"
        }`}
      />
      {error && (
        <p className="mt-[5px] ml-[10px] text-[14px] text-error font-[600]">
          숫자로 입력해주세요
        </p>
      )}
    </article>
  );
};

export default ProductPrice;
