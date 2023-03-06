import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/Logo.png";
import "../app/globals.css";

type Props = {};

const thankyou = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#08002A]">
      <div>
        <Image
          src={Logo}
          className="h-[40px] w-[130px] md:h-[75px] md:w-[240px] mx-auto mt-6 cursor-pointer"
          alt="logo"
        />
      </div>

      <div className="text-[14px] md:w-[590px] md:h-[211px] w-[324px] h-[211px] bg-white p-10 mt-20 text-center rounded-lg">
        <h1 className=" mt-14 font-semibold">Congratulations</h1>
        <p className="text-[12px]">
          You have successfully joined the Gnpay Africa waitlist, sit back and
          wait for our updates.
        </p>
      </div>
    </div>
  );
};

export default thankyou;
