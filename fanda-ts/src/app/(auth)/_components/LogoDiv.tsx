import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LogoDiv = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center mb-[24px]">
      <Image
        src={"/logos/logo_sm.svg"}
        alt="logo"
        width={198}
        height={66}
        onClick={() => router.push("/")}
        className="cursor-pointer tablet:hidden"
      />
      <Image
        src={"/logos/logo_sm.svg"}
        alt="logo"
        width={396}
        height={132}
        onClick={() => router.push("/")}
        className="cursor-pointer mobile:hidden tablet:block"
      />
    </div>
  );
};

export default LogoDiv;
