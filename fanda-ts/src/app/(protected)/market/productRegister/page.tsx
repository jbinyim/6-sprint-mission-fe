"use client";

import React, { useState } from "react";
import ImgInput from "../_components/inputs/ImgInput";
import ProductNameInput from "../_components/inputs/ProductNameInput";
import ProductIntroduce from "../_components/inputs/ProductIntroduce";
import ProductPrice from "../_components/inputs/ProductPrice";
import ProductTags from "../_components/inputs/ProductTags";

const title = (text: string) => {
  return <p className="text-[18px] font-bold mb-[16px]">{text}</p>;
};

const ProductRegister = () => {
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [productName, setProductName] = useState<string>("");
  const [productIntroduce, setProductIntroduce] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productTags, setProductTags] = useState<string[]>([]);

  const handleClick = () => {
    console.log(productName, productIntroduce, productPrice, productTags);
  };

  return (
    <section className="mt-[24px] mb-[126px] px-[15px] tablet:mt-[15px] tablet:px-[24px] pc:mt-[26px] text-gray800">
      <section className="flex flex-col gap-[24px] max-w-[1200px] mx-auto">
        <article className="flex items-center justify-between">
          <p className="text-[20px] font-bold">상품 등록하기</p>
          <button
            onClick={handleClick}
            className="w-[74px] h-[42px] bg-gray400 rounded-[8px] text-white"
          >
            등록
          </button>
        </article>
        <ImgInput
          title={title}
          customState={imgPreview}
          customUseState={setImgPreview}
        />
        <ProductNameInput
          title={title}
          customState={productName}
          customUseState={setProductName}
        />
        <ProductIntroduce
          title={title}
          customState={productIntroduce}
          customUseState={setProductIntroduce}
        />
        <ProductPrice
          title={title}
          customState={productPrice}
          customUseState={setProductPrice}
        />
        <ProductTags
          title={title}
          customState={productTags}
          customUseState={setProductTags}
        />
      </section>
    </section>
  );
};

export default ProductRegister;
