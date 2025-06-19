"use client";

import Image from "next/image";
import React from "react";
import Btn from "../common/buttons/Btn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const { user, logout } = useAuth();

  if (currentPath === "/login" || currentPath === "/signUp") return;

  return (
    <header className="h-[70px] px-[16px] py-[10px] tablet:px-[24px] pc:px-0">
      <div className="flex items-center justify-between pc:max-w-[1520px] pc:mx-auto">
        <ul className="flex items-center gap-[8px] tablet:gap-0">
          <li>
            <Link href={"/"}>
              <Image
                src="/logos/logo_sm.svg"
                width={153}
                height={51}
                alt="Logo"
                className="hidden tablet:block"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/logos/logo_text.svg"
                width={103}
                height={51}
                alt="Logo"
                className="block tablet:hidden"
              />
            </Link>
          </li>
          {/* 로그인 후 */}
          {user && (
            <>
              <li className="text-[18px] font-[700] text-gray600 tablet:ml-[35px] pc:ml-[47px]">
                <Link href={"/board"}>자유게시판</Link>
              </li>
              <li className="text-[18px] font-[700] text-gray600 tablet:ml-[30px]">
                <Link href={"/market"}>중고마켓</Link>
              </li>
            </>
          )}
        </ul>
        {user ? (
          <div className="flex items-center gap-[6px] cursor-pointer">
            <img
              src="/icons/profile-lg.png"
              alt="프로필 사진"
              className="w-[40px] h-[40px]"
            />
            <p className="text-gray600 mobile:hidden tablet:block">
              {user.nickname}
            </p>
          </div>
        ) : (
          <Btn
            status="default"
            width="128"
            height="48"
            onClick={() => router.push("/login")}
          >
            로그인
          </Btn>
        )}
      </div>
    </header>
  );
};

export default Header;
