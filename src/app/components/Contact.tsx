import Image from "next/image";
import React from "react";
import Email from "../../../public/assets/email.png";
import Phone from "../../../public/assets/telephone.png";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="b-0 t-0 h-[500px] flex flex-col w-screen justify-center items-center mx-auto">
      <div className="mb-10">
        <h1 className="text-[40px] font-bold leading-[80px]">Contact Us</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center leading-[80px]">
        <div className="flex flex-col items-center p-5">
          <Image
            src={Phone}
            alt="Logo's"
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
          <p className="mx-10 mb-3">07063465586</p>
        </div>
        <div className="flex flex-col items-center p-5">
          <Image
            src={Email}
            alt="Logo's"
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
          <p className="mx-5 mb-3">info@gnpay.com.ng</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
