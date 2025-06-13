"use client";

import React, { useEffect, useState } from "react";
import LogoDiv from "../_components/LogoDiv";
import EmailInput from "../_components/EmailInput";
import PasswordInput from "../_components/PasswordInput";
import SimpleLogin from "../_components/SimpleLogin";
import Link from "next/link";
import NickNameInput from "../_components/NickNameInput";
import PasswordCheck from "../_components/PasswordCheck";
import { emailRegex } from "@/utils/tools";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (
      email === "" ||
      nickname === "" ||
      password === "" ||
      password.length < 8 ||
      !emailRegex.test(email) ||
      passwordCheck === "" ||
      password !== passwordCheck
    ) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [email, nickname, password, passwordCheck]);

  return (
    <main className="flex justify-center pt-[80px] text-gray800">
      <section>
        <LogoDiv />
        <form className="flex flex-col gap-[16px]">
          <EmailInput state={email} setState={setEmail} />
          <NickNameInput state={nickname} setState={setNickname} />
          <PasswordInput state={password} setState={setPassword} />
          <PasswordCheck
            state={passwordCheck}
            setState={setPasswordCheck}
            password={password}
          />
          <button
            className={`w-[343px] tablet:w-[640px] h-[56px] ${
              isFilled ? "bg-primary100" : "bg-gray400"
            } text-white font-[20px] rounded-[40px] cursor-pointer`}
          >
            회원가입
          </button>
        </form>
        <SimpleLogin />
        <p className="text-[14px] text-center mt-[24px]">
          이미 회원이신가요?
          <Link href={"/login"} className="text-primary100">
            로그인
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
