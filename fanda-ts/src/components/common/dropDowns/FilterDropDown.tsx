"use client";
import React from "react";

interface FilterDropDownProps {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  setFilterMenu: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDropDown = ({
  top,
  right,
  left,
  bottom,
  setFilterMenu,
}: FilterDropDownProps) => {
  return (
    <ul
      style={{ top, bottom, right, left }}
      className="absolute w-[130px] h-[84px] bg-white rounded-[12px] border border-gray200 text-center leading-[42px] text-gray800"
    >
      <li
        className="h-[50%] border-b border-gray200 cursor-pointer"
        onClick={() => setFilterMenu("최신순")}
      >
        최신순
      </li>
      <li className="cursor-pointer" onClick={() => setFilterMenu("좋아요순")}>
        좋아요순
      </li>
    </ul>
  );
};

export default FilterDropDown;
