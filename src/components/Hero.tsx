import React from "react";
import Logo from "../../public/assets/Logo.png";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-white w-screen">
      <div className="w-full h-full md:h-screen flex flex-col md:flex-row md:justify-center items-center p-10 bg-[#11073f]">
        <div className="p-8">
          <div className="md:m-9 m-2 p-14 md:p-20 rounded-lg bg-[#08002A]">
            <Image src={Logo} alt="Phone Image" priority />
          </div>
        </div>
        <div>
          <p className="text-[14px] md:text-[20px] lg:text-[25px] md:w-[470px] lg:w-[600px] xl:w-[900px] mt-3 text-center md:text-start">
            Gnpay Africa is revolutionizing the way consumers shop with its
            innovative “buy now, pay later” service. By allowing customers to
            divide their payments to fit their use case and pay back later,
            Gnpay Africa is making it easier for consumers to purchase the
            products they want without breaking the bank. With good deals on a
            wide range of products at competitive prices, Gnpay Africa is the
            go-to destination for savvy shoppers looking for a smarter way to
            shop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
