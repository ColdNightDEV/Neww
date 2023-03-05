import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="b-0 t-0 h-[500px] flex flex-col w-screen justify-center items-center mx-auto">
      <div className="mb-10">
        <h1 className="text-[40px] font-bold leading-[80px]">Contact Us</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center leading-[80px]">
        <p className="mx-10 mb-3">07063465586</p>
        <p className="mx-5 mb-3">info@gnpay.com.ng</p>
      </div>
    </div>
  );
};

export default Contact;
