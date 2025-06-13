"use client";

import Image from "next/image";
import React from "react";
import Btn from "../common/buttons/Btn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const currentPath = usePathname();

  if (currentPath === "/login" || currentPath === "/signUp") return;

  return (
    <header className="h-[70px] px-[16px] py-[10px] tablet:px-[24px] pc:px-0">
      <div className="flex items-center justify-between pc:max-w-[1520px] pc:mx-auto">
        <div>
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
        </div>
        <Btn
          status="default"
          width="128"
          height="48"
          onClick={() => router.push("/login")}
        >
          로그인
        </Btn>
      </div>
    </header>
  );
};

export default Header;
