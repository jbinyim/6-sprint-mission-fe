"use client";

import { useRouter } from "next/navigation";
import RadiusBtn from "../buttons/RadiusBtn";

const Landing = () => {
  const router = useRouter();

  return (
    <main className="text-gray700">
      <section className="h-[540px] flex flex-col items-center justify-between bg-[#CFE5FF] tablet:h-[771px] pc:h-[540px]  pc:flex-row pc:justify-center pc:items-end pc:gap-[7px]">
        <article className="text-center pc:mb-[100px] pc:text-left">
          <div className="text-[32px] pc:text-[40px] font-bold mt-[48px] mb-[18px] tablet:hidden pc:block">
            <p>일상의 모든 물건을</p>
            <p>거래해보세요</p>
          </div>
          <div className="text-[40px] font-bold mt-[84px] mb-[24px] hidden tablet:block pc:hidden">
            <p>일상의 모든 물건을 거래해보세요</p>
          </div>
          <RadiusBtn
            status="default"
            size="md"
            onClick={() => router.push("/market")}
          >
            구경하러 가기
          </RadiusBtn>
        </article>
        <img src={"/homeImgs/Img_home_top_sm.png"} alt="landing1" />
      </section>
    </main>
  );
};

export default Landing;
