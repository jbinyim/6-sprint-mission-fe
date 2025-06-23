import React from "react";

interface FilterDropDownProps {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}

const FilterDropDown = ({ top, right, left, bottom }: FilterDropDownProps) => {
  return (
    <ul
      style={{ top, bottom, right, left }}
      className="absolute w-[130px] h-[84px] bg-white rounded-[12px] border border-gray200 text-center leading-[42px] text-gray800"
    >
      <li className="h-[50%] border-b border-gray200 cursor-pointer">최신순</li>
      <li className="cursor-pointer">좋아요순</li>
    </ul>
  );
};

export default FilterDropDown;
