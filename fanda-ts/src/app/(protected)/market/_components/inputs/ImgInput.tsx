import React, { useRef } from "react";
import { ImgInputProps } from "./type";

const ImgInput = ({ title, customState, customUseState }: ImgInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        customUseState(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <article>
      {title("상품 이미지")}
      <div className="flex items-center gap-[10px]">
        <label>
          <img
            src="/markets/upload.png"
            alt="업로드 버튼"
            className="w-[168px] h-[168px] cursor-pointer pc:w-[282px] pc:h-[282px]"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleChangeImg}
            ref={inputRef}
            className="hidden"
          />
        </label>
        {customState && (
          <span className="relative">
            <img
              src={customState}
              alt="업로드할 이미지"
              className="w-[168px] h-[168px] object-cover rounded-[12px] pc:w-[282px] pc:h-[282px]"
            />
            <img
              src="/icons/ic_X.png"
              alt="이미지 삭제 버튼"
              onClick={() => customUseState(null)}
              className="absolute top-[12px] right-[12px] cursor-pointer"
            />
          </span>
        )}
      </div>
    </article>
  );
};

export default ImgInput;
