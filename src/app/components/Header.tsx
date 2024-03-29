import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.png";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-screen">
      <div className="flex flex-row text-white justify-between items-center mx-5 md:mx-20">
        <div className="px-0 md:px-8">
          <Image
            src={Logo}
            alt="Logo"
            className="w-[110px] h-[40px] md:w-[150px] md:h-[60px] lg:w-[200px] lg:h-[65px] mt-4 mb-4"
            priority
          />
        </div>
        <div className="px-2 md:px-8"></div>
      </div>
    </div>
  );
};

export default Header;
