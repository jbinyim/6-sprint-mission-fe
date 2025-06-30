"use client";

import React, { useState } from "react";
import { ProductTagsInputProps } from "./type";

const ProductTags = ({
  title,
  customState,
  customUseState,
}: ProductTagsInputProps) => {
  const [error, setError] = useState(false);
  const [tag, setTag] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);

    if (!e.target.value.trim()) {
      setError(false);
      return;
    }

    if (e.target.value.length > 5) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tag.length > 5) return;

      customUseState([...customState, tag]);
      setTag("");
    }
  };

  const handleClick = (item: string) => {
    const filterd = customState.filter((arrayTags) => arrayTags !== item);
    customUseState(filterd);
  };

  return (
    <article>
      {title("태그")}
      <input
        type="text"
        placeholder="판매 가격을 입력해주세요"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={tag}
        className={`w-full h-[56px] bg-gray100 rounded-[12px] px-[24px] ${
          error ? "outline-error" : "outline-none"
        }`}
      />
      {error && (
        <p className="mt-[5px] ml-[10px] text-[14px] text-error font-[600]">
          5글자 이내로 입력해주세요
        </p>
      )}
      <div className="flex flex-wrap items-center gap-[12px] mt-[12px]">
        {customState.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-[8px] h-[36px] px-[13px] bg-gray100 rounded-[26px]"
          >
            <p>#{item}</p>
            <img
              src="/icons/ic_X.png"
              alt="태그 삭제 버튼"
              onClick={() => handleClick(item)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductTags;
