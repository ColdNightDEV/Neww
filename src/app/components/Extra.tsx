"use client";
import React, { useState } from "react";

type Props = {};

const Extra = (props: Props) => {
  const [isOpen, setIsOpen] = useState(0);

  // function onClick() {
  //   setClick("hidden");
  // }

  const faq_list = [
    {
      question: "What is GNPay Africa?",
      answer:
        "GN Pay Africa is a buy now, pay later (BNPL) platform that allows you to purchase items and pay for them in installments.",
    },
    {
      question: "What are the benefits of joining the waitlist?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolore",
    },
    {
      question: "When will the GNPay Africa mobile app launch?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolore",
    },
    {
      question: "How do I sign up for the BNPL platform? too",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, dolore",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-col text-center lg:flex-row lg:text-left m-20 lg:m-10 mx-auto items-center justify-evenly w-screen mt-[15px] md:mt-[250px] mr-10">
      {/* Left Side */}
      <div>
        <h1 className=" text-[24px] md:text-[40px] w-[303px] text-yellow-400 md:w-[430px] m-10 font-semibold md:font-bold">
          Some of the things you may want to know.........
        </h1>
      </div>
      {/* Right Side */}
      <div className="px-2 mx-3 md:mx-8 mr-4 text-left flex flex-col">
        {faq_list.map((faq, index) => (
          <button
            key={index}
            className={`pb-0 md:pb-5 bg-[#261F43] mt-3 lg:mt-1 w-[290px] md:w-[550px] px-2 mx-4 md:mx-0 text-left`}
            type="button"
            onClick={() => {
              setIsOpen(isOpen == index ? -1 : index);
            }}
          >
            <div className="flex items-center justify-between">
              <h1 className="mx-2 text-[12px] font-bold pt-4 pb-3 md:text-[16px]">
                {faq.question}
              </h1>
              <div>
                {isOpen == index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 md:mx-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 md:mx-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
            </div>

            <p
              className={`${
                isOpen == index ? "block" : "hidden"
              } mx-2 w-[240px] leading-[18px] md:w-[540px] text-[12px] md:text-[15px] font-normal pb-4 text-gray-300`}
            >
              {faq.answer}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Extra;
