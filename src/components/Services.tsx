import React from "react";
import Image from "next/image";
import Logo from "../../public/thirteen.svg";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="w-screen text-white flex flex-col justify-center items-center">
      {/*  */}
      <div className="text-center mt-30 md:mt-10 mx-2">
        <h1 className="text-[24px] md:text-[40px] font-bold">Our Services</h1>
        <p className="text-[14px] md:text-[20px] w-[288px] md:w-[378px] font-normal md:font-semibold">
          A platform for accepting payment, making payments and paying bills
        </p>
      </div>
      {/*  */}

      <div className="text-white flex flex-col md:flex-row justify-evenly w-screen p-10 m-3">
        {/*  */}
        <div className="p-4 text-center flex flex-col items-center m-2">
          <Image src={Logo} alt="Logo" priority />
          <p className="w-[280px] md:w-[360px] pt-2 md:pt-4 text-[13.5px] md:text-[18px] mx-4">
            Our platform offers flexible payment options, automated reminders,
            and a streamlined checkout process for a hassle-free shopping
            experience.
          </p>
        </div>

        {/*  */}
        <div className="p-4 text-center flex flex-col items-center m-2">
          <Image src={Logo} alt="Logo" priority />
          <p className="w-[280px] md:w-[360px] pt-2 md:pt-4 text-[13.5px] md:text-[18px] mx-4">
            Our mission is to provide financial inclusion to millions of
            Africans, enabling them to access the products they need to improve
            their lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
