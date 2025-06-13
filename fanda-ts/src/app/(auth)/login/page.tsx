"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EmailInput from "../_components/EmailInput";
import PasswordInput from "../_components/PasswordInput";
import Link from "next/link";
import { emailRegex } from "@/utils/tools";
import LogoDiv from "../_components/LogoDiv";
import SimpleLogin from "../_components/SimpleLogin";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    if (
      email === "" ||
      password === "" ||
      password.length < 8 ||
      !emailRegex.test(email)
    ) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [email, password]);

  return (
    <main className="flex justify-center pt-[80px] text-gray800">
      <section>
        <LogoDiv />
        <form className="flex flex-col gap-[16px]">
          <EmailInput state={email} setState={setEmail} />
          <PasswordInput state={password} setState={setPassword} />
          <button
            className={`w-[343px] tablet:w-[640px] h-[56px] ${
              isFilled ? "bg-primary100" : "bg-gray400"
            } text-white font-[20px] rounded-[40px] cursor-pointer`}
          >
            로그인
          </button>
        </form>
        <SimpleLogin />
        <p className="text-[14px] text-center mt-[24px]">
          판다마켓이 처음이신가요?
          <Link href={"/signUp"} className="text-primary100">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
