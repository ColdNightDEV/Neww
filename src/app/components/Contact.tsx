import Image from "next/image";
import React from "react";
import Email from "../../../public/assets/email.png";
import Phone from "../../../public/assets/telephone.png";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="b-0 t-0 h-[500px] flex flex-col w-screen justify-center items-center mx-auto">
      <div className="mb-5">
        <h1 className="text-[40px] font-bold">
          Contact <span className="text-[#FBCC22]">Us</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center leading-[80px]">
        <div className="flex flex-col items-center mb-1 md:mx-5 mx-0 mt-5">
          <Image
            src={Phone}
            alt="Logo's"
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer"
          />
          <p className="mx-10 mb-1 bg-[#261F43] font-bold mt-2 px-3 h-[50px] flex items-center rounded-md">
            <a href="tel:+23407063465586">07063465586</a>
          </p>
        </div>
        <div className="flex flex-col items-center mb-1 md:mx-5 mx-0 mt-5">
          <Image
            src={Email}
            alt="Logo's"
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] cursor-pointer"
          />
          <p className="mx-5 mb-1 bg-[#261F43] font-bold mt-2 px-3 h-[50px] flex items-center rounded-md">
            <a href="mailto:info@gnpay.com.ng">info@gnpay.com.ng</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
