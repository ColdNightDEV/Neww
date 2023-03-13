import Image from "next/image";
import Link from "next/link";
import React from "react";
import Phone from "../../../public/assets/Gnphone.png";
import Astore from "../../../public/assets/Astore.png";
import Gplay from "../../../public/assets/Gplay.png";

type Props = {};

const Coming = (props: Props) => {
  return (
    <div className="w-screen text-white mt-[100px] md:mt-[200px]">
      <div className="flex-col flex mx-5 md:mx-20 md:flex-row justify-between items-center">
        <div className="mx-2 md:mx-8 flex flex-col md:flex-col md:justify-center md:items-left text-center md:text-left">
          <h1 className=" font-semibold md:font-bold text-[22px] md:text-[40px] w-[280px] md:w-[500px] lg:w-[600px] text-center md:text-left mx-auto md:mx-0 mt-10">
            Mobile App <span className="text-[#FBCC22]">Coming soon</span>
          </h1>
          <p className="text-[14px] md:text-[16px] w-[300px] md:w-[470px] lg:w-[492px] xl:w-[492px] mt-3 leading-[28px] mx-auto md:mx-0">
            Get early access to the Gnpay Africa mobile app and buy now pay
            later platform, receive exclusive promotions and discounts, stay
            up-to-date with the latest news and updates.
          </p>
          <Link href={"/form"} className="w-[165px] mx-auto md:mx-0">
            <button className="bg-[#FBCC22] px-[15px] py-[5px] md:px-[20px] md:py-[13px] mt-6 rounded-lg font-bold">
              Join the waitlist
            </button>
          </Link>
          <div className="flex flex-col md:flex-row mt-5 cursor-default md:cursor-pointer w-[380px] items-center">
            <Image
              src={Gplay}
              alt="Google play"
              className="w-[190px] h-[60px] px-1 mx-auto mt-3"
              priority
            />
            <Image
              src={Astore}
              alt="Apple Store"
              className="w-[190px] h-[60px] px-1 mx-auto mt-3"
              priority
            />
          </div>
        </div>
        <div className="-mx-10 md:mx-2 px-2 mt-6 md:mt-3">
          <Image
            src={Phone}
            alt="Phone Image"
            className="w-[196px] h-[374px] md:w-[229px] md:h-[395px] lg:w-[360px] lg:h-[665.03px] mt-10 mb-1 md:mb-20 p-0 md:p-1"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Coming;
