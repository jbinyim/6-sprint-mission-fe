"use client";

import React, { useState } from "react";
import { ProductInputProps } from "./type";

const ProductNameInput = ({
  title,
  customState,
  customUseState,
}: ProductInputProps) => {
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customUseState(e.target.value);

    if (e.target.value.length > 10) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <article>
      {title("상품명")}
      <input
        type="text"
        placeholder="상품명을 입력해주세요"
        onChange={handleChange}
        value={customState}
        className={`w-full h-[56px] bg-gray100 rounded-[12px] px-[24px] ${
          error ? "outline-error" : "outline-none"
        }`}
      />
      {error && (
        <p className="mt-[5px] ml-[10px] text-[14px] text-error font-[600]">
          10자 이내로 입력해주세요
        </p>
      )}
    </article>
  );
};

export default ProductNameInput;
