"use client";

import { emailRegex } from "@/utils/tools";
import React, { useEffect, useState } from "react";

interface EmailInputProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const EmailInput = ({ state, setState }: EmailInputProps) => {
  const [error, setError] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      if (state === "") {
        setError(false);
      } else {
        setError(!emailRegex.test(state));
      }
    }, 500);

    setTimer(newTimer);

    return () => {
      clearTimeout(newTimer);
    };
  }, [state]);

  return (
    <label className="text-gray800">
      <p className="text-[14px] tablet:text-[18px] font-[700] mb-[8px]">
        이메일
      </p>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        className={`w-[343px] tablet:w-[640px] h-[56px] bg-gray100 rounded-[12px] px-[24px] py-[15px] outline-none ${
          error ? "border border-error" : "border-none"
        }`}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <p
        className={`mt-[8px] ml-[16px] text-[14px] text-error ${
          error ? "block" : "hidden"
        }`}
      >
        잘못된 이메일입니다.
      </p>
    </label>
  );
};

export default EmailInput;
