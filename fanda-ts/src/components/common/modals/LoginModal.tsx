import React from "react";
import Btn from "../buttons/Btn";

const LoginModal = () => {
  return (
    <section className="bg-amber-200 w-[327px] h-[220px] rounded-[8px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-[42px]">
        <p className="text-gray800">가입이 완료되었습니다!</p>
        <Btn status="default">확인</Btn>
      </div>
    </section>
  );
};

export default LoginModal;
