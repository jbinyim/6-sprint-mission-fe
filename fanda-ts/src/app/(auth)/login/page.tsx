"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import EmailInput from "../_components/EmailInput";
import PasswordInput from "../_components/PasswordInput";
import Link from "next/link";
import { emailRegex } from "@/utils/tools";
import LogoDiv from "../_components/LogoDiv";
import SimpleLogin from "../_components/SimpleLogin";
import userApi from "@/lib/userApi";
import LoginModal from "@/components/common/modals/LoginModal";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);
  const { login } = useAuth();

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

  const handleClick = () => {
    router.push("/market");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await userApi.signIn(email, password);
      const { accessToken, ...user } = res;

      login(user, accessToken);
      setIsModal(true);

      console.log("로그인 성공");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="flex justify-center pt-[80px] text-gray800">
      <section>
        <LogoDiv />
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
          <EmailInput state={email} setState={setEmail} />
          <PasswordInput state={password} setState={setPassword} />
          <button
            disabled={!isFilled}
            className={`w-[343px] tablet:w-[640px] h-[56px] ${
              isFilled
                ? "bg-primary100 cursor-pointer"
                : "bg-gray400 cursor-not-allowed"
            } text-white font-[20px] rounded-[40px]`}
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
      {isModal && <LoginModal text="로그인 성공!" onClick={handleClick} />}
    </main>
  );
};

export default Login;
