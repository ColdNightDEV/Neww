import React from "react";
import Phone from "../../../public/assets/Gnphone.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-screen h-screen text-white bg-[#11073f]">
      <div className="flex-col flex mx-5 md:mx-20 md:flex-row justify-between items-center">
        <div className="mx-2 md:mx-8 flex flex-col md:flex-col md:justify-center md:items-left text-center md:text-left md:w-[610px] lg:w-[680px] px-1 pb-1">
          <h1 className="font-bold text-[32px] md:text-[48px] lg:text-[64px] w-[250px] md:w-[500px] lg:w-[600px] text-center md:text-left mx-auto md:mx-0 mt-10">
            Gnpay Africa <span className="invisible md:visible ">- </span>{" "}
            <span className="text-[#FBCC22]">Join Our waitlist</span>
          </h1>
          <p className="text-[14px] md:text-[20px] md:w-[470px] lg:w-[600px] xl:w-[670px] mt-3">
            Welcome to Gnpay Africa, your one-stop-shop for flexible and
            affordable financing options. Join our waitlist to be the first to
            know about our exciting mobile app launch and get exclusive access
            to the buy now pay later platform.
          </p>
          <Link href={"/form"} className="w-[165px] mx-auto md:mx-0">
            <button className="bg-[#FBCC22] px-[18px] py-[12px] md:px-[20px] md:py-[13px] mt-6 mx-auto rounded-sm font-bold text-[10px] md:text-[14px]">
              Join the waitlist
            </button>
          </Link>
        </div>
        <div className="-mx-10 md:mx-2 px-2 mt-6 md:mt-3">
          <Image
            src={Phone}
            alt="Phone Image"
            className="w-[196px] h-[374px] md:w-[229px] md:h-[395px] lg:w-[360px] lg:h-[665.03px] mt-10 md:mb-20 mb-10 p-0 md:p-1"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
