import React, { useEffect, useState } from "react";

interface PasswordCheckProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  password: string;
}

const PasswordCheck = ({ state, setState, password }: PasswordCheckProps) => {
  const [isVisibility, setIsVisibility] = useState<boolean>(false);
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
        setError(state !== password);
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
        비밀번호 확인
      </p>
      <span className="relative">
        <input
          type={isVisibility ? "text" : "password"}
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          className={`w-[343px] tablet:w-[640px] h-[56px] bg-gray100 rounded-[12px] px-[24px] py-[15px] outline-none ${
            error ? "border border-error" : "border-none"
          }`}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <img
          src={isVisibility ? "/icons/Property1.png" : "/icons/Property2.png"}
          alt="비밀번호 보기"
          className="absolute top-0 right-[24px] cursor-pointer"
          onClick={() => setIsVisibility((prev) => !prev)}
        />
      </span>
      <p
        className={`mt-[8px] ml-[16px] text-[14px] text-error ${
          error ? "block" : "hidden"
        }`}
      >
        비밀번호가 일치하지 않습니다
      </p>
    </label>
  );
};

export default PasswordCheck;
