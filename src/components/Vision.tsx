import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="text-white w-screen">
      <div className="w-full h-full flex flex-col md:justify-center items-center p-10 bg-[#08002A]">
        <div className="p-8">
          <div className="m-3 px-5 py-8 font-bold rounded-lg bg-[#11073f] text-3xl">
            <h1>Our Vision</h1>
          </div>
        </div>
        <div>
          <p className="text-[14px] md:text-[20px] lg:text-[25px] md:w-[470px] lg:w-[600px] xl:w-[900px] mt-3 text-center md:text-start">
            Our vision is to empower consumers by providing them with flexible
            payment options that fit their needs. We strive to be the leading
            “buy now, pay later” service in Africa, offering good deals on a
            wide range of products at competitive prices. At Gnpay Africa, we
            are committed to making shopping easier and more accessible for
            everyone
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
