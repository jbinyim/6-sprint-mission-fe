import { bgColor } from "@/utils/buttonStyle";
import React from "react";

interface RadiusBtnProps {
  size: "lg" | "md";
  status: "default" | "hover" | "click" | "inactive";
  width?: string;
  height?: string;
  fontSize?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const RadiusBtn = ({
  size,
  status,
  width,
  height,
  fontSize,
  children,
  onClick,
}: RadiusBtnProps) => {
  const baseClasses = `${bgColor[status]} rounded-[40px] text-white cursor-pointer`;

  const lgSizes = {
    width: "357px",
    height: "56px",
    fontSize: "20px",
  };

  const mdResponsiveClasses = {
    width: !width ? "w-[240px] tablet:w-[357px]" : "",
    height: !height ? "h-[48px] tablet:h-[56px]" : "",
    fontSize: !fontSize ? "text-[18px] tablet:text-[20px]" : "",
  };

  if (size === "lg") {
    return (
      <button
        className={baseClasses}
        style={{
          width: width ? `${width}px` : lgSizes.width,
          height: height ? `${height}px` : lgSizes.height,
          fontSize: fontSize ? `${fontSize}px` : lgSizes.fontSize,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`
        ${baseClasses}
        ${mdResponsiveClasses.width}
        ${mdResponsiveClasses.height}
        ${mdResponsiveClasses.fontSize}
      `}
      style={{
        ...(width && { width: `${width}px` }),
        ...(height && { height: `${height}px` }),
        ...(fontSize && { fontSize: `${fontSize}px` }),
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RadiusBtn;
