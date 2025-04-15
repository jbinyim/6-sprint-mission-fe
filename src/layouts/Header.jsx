import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logos/logo.png";

const Header = () => {
  return (
    <header className="border-b border-[#DFDFDF]">
      <div className="flex items-center justify-between max-w-[1200px] h-[70px] m-auto px-4 tablet:px-[24px] pc:px-[0]">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="FandaLogo" />
          </Link>
          <ul className="hidden">
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
        <Link
          className="w-[128px] h-[48px] bg-primary font-semibold text-center leading-[48px] text-white rounded-lg"
          to="/login"
        >
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
