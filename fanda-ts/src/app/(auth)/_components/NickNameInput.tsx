import React from "react";

interface NickNameInputProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const NickNameInput = ({ state, setState }: NickNameInputProps) => {
  return (
    <label className="text-gray800">
      <p className="text-[14px] tablet:text-[18px] font-[700] mb-[8px]">
        닉네임
      </p>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요"
        className={`w-[343px] tablet:w-[640px] h-[56px] bg-gray100 rounded-[12px] px-[24px] py-[15px] outline-none 
        
        `}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </label>
  );
};

export default NickNameInput;
