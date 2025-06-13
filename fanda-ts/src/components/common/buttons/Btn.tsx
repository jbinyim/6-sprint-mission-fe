import { bgColor } from "@/utils/buttonStyle";
import React from "react";

interface BtnProps {
  status: "default" | "hover" | "click" | "inactive";
  width?: string;
  height?: string;
  fontSize?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Btn = ({
  status,
  width,
  height,
  fontSize,
  children,
  onClick,
}: BtnProps) => {
  return (
    <button
      className={`${bgColor[status]} rounded-[8px] text-white cursor-pointer`}
      style={{
        width: width ? `${width}px` : "88px",
        height: height ? `${height}px` : "42px",
        fontSize: fontSize ? `` : "16px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Btn;
