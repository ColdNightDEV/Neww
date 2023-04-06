import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="text-white w-screen">
      <div className="w-full h-full flex flex-col md:justify-center items-center p-10 bg-[#08002A]">
        <div className="p-8">
          <div className="m-3 md:px-5 px-2 py-6 md:py-8 font-bold rounded-lg bg-[#11073f] text-3xl text-center md:text-start">
            <h1>Our Mission</h1>
          </div>
        </div>
        <div>
          <p className="text-[14px] md:text-[20px] lg:text-[25px] md:w-[470px] lg:w-[600px] xl:w-[900px] mt-3 text-center md:text-start">
            At Gnpay Africa, our mission is to revolutionize the way consumers
            shop by providing them with flexible payment options that fit their
            unique needs. We are committed to offering good deals on a wide
            range of products at competitive prices, making shopping easier and
            more accessible for everyone. Our goal is to be the leading “buy
            now, pay later” service in Africa, empowering consumers to shop
            smarter and live better. We believe in the power of innovation and
            are constantly striving to improve our service to better meet the
            needs of our customers. At Gnpay Africa, we are dedicated to making
            a positive impact on the lives of our customers and the communities
            we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
