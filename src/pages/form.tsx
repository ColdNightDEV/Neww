import Image from "next/image";
import "../app/globals.css";
import Logo from "../../public/assets/Logo.png";
import Link from "next/link";
// import { useState } from "react";

const extra = () => {
  // const [value, setValue] = useState("");

  // const handleChange = (Event) => {
  //   const result = Event.target.value.replace(/\D/g, "");

  //   setValue(result);
  // };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#08002A]">
      <Image
        src={Logo}
        className="h-[75px] w-[240px] mx-auto mt-6"
        alt="logo"
        priority
      />
      <div className="text-black bg-white pb-[200px] w-[327px] h-[443px] md:w-[643px] md:h-[513px] mt-10">
        <form action="" className="mx-6 md:mx-10">
          <h1 className="text-center mt-5 font-bold text-[18px] md:text-[20px]">
            Join the Gnpay waitlist
          </h1>

          {/*  */}
          <div className="mt-[40px] md:mt-[70px]">
            <label htmlFor="Fname" className="text-[14px] md:text-[16px]">
              Full Name
            </label>
            <input
              type="text"
              name="Fname"
              id="Fname"
              placeholder="Enter your full name: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="Email" className="text-[14px] md:text-[16px]">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Enter your Email Address: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="Pnumber" className="text-[14px] md:text-[16px]">
              Phone Number
            </label>
            <input
              type="number"
              name="Pnumber"
              id="Pnumber"
              placeholder="Enter your Phone Number: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required
              minLength={11}
              maxLength={11}
            />
          </div>
          {/*  */}
          <button
            type="submit"
            className="w-[279px] md:w-[559px] bg-yellow-300 mt-[40px] p-4 rounded-md"
          >
            <Link href={"/thankyou"}>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default extra;
