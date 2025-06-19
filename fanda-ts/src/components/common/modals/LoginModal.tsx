import React from "react";
import Btn from "../buttons/Btn";

interface LoginModalProps {
  text: string;
  onClick: () => void;
}

const LoginModal = ({ text, onClick }: LoginModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
      <section className="bg-white w-[327px] h-[220px] rounded-[8px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-[42px]">
          <p className="text-gray800">{text}</p>
          <Btn status="default" onClick={onClick}>
            확인
          </Btn>
        </div>
      </section>
    </div>
  );
};

export default LoginModal;
