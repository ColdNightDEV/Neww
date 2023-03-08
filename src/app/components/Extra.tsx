import React from "react";

type Props = {};

const Extra = (props: Props) => {
  return (
    <div className=" flex flex-col md:flex-col text-center lg:flex-row lg:text-left m-20 lg:m-10 mx-auto items-center justify-evenly w-screen mt-[15px] md:mt-[250px]">
      {/* Left Side */}
      <div>
        <h1 className=" text-[24px] md:text-[40px] w-[303px] md:w-[430px] m-10 font-semibold md:font-bold">
          Some of the things you may want to know
        </h1>
      </div>

      {/* Right Side */}
      <div className="px-2 mx-3 md:mx-6 text-left">
        {/* Sections */}
        <div className="pb-3 md:pb-10 bg-[#261F43] mt-3 lg:mt-1 px-3 mx-4 md:mx-0">
          <h1 className="mx-3 text-[14px] font-bold pt-4 pb-3 md:text-[16px]">
            What is GNPay Africa?
          </h1>
          <p className=" mx-3 w-[280px] leading-[18px] md:w-[556px] text-[12px] md:text-[15px] font-normal">
            GN Pay Africa is a buy now, pay later (BNPL) platform that allows
            you to purchase items and pay for them in installments.
          </p>
        </div>

        {/* Sections */}
        <div className="pb-3 md:pb-10 bg-[#261F43] mt-3 lg:mt-1 px-3 mx-4 md:mx-0">
          <h1 className="mx-3 text-[14px] font-bold pt-4 pb-3 md:text-[16px]">
            What are the benefits of joining the waitlist?
          </h1>
          <p className="mx-3 w-[300px] leading-[18px] md:w-[556px] text-[12px] md:text-[15px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            esse. A unde ut sed perspiciatis repellendus nobis molestiae fugit
            in.
          </p>
        </div>

        {/* Sections */}
        <div className="pb-3 md:pb-10 bg-[#261F43] mt-3 lg:mt-1 px-3 mx-4 md:mx-0">
          <h1 className="mx-3 text-[14px] font-bold pt-4 pb-3 md:text-[16px]">
            When will the GNPay Africa mobile app launch?
          </h1>
          <p className="mx-3 w-[300px] leading-[18px] md:w-[556px] text-[12px] md:text-[15px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            esse. A unde ut sed perspiciatis repellendus nobis molestiae fugit
            in.
          </p>
        </div>

        {/* Sections */}
        <div className="pb-3 md:pb-10 bg-[#261F43] mt-3 lg:mt-1 px-3 mx-4 md:mx-0">
          <h1 className="mx-3 text-[14px] font-bold pt-4 pb-3 md:text-[16px]">
            How do I sign up for the BNPL platform?
          </h1>
          <p className="mx-3 w-[300px] leading-[18px] md:w-[556px] text-[12px] md:text-[15px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            esse. A unde ut sed perspiciatis repellendus nobis molestiae fugit
            in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
