// Import the library for collecting and organizing data from out form

import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import Link from "next/link";
import "../app/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "react-hook-form";

export const metadata = {
  title: "GNPay Africa Waitlist form",
  description: "Created by Gnpay Africa",
};

export default function Form() {
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eot6hbecer3bqsx.m.pipedream.net", JSON.stringify(data))
      .then((responce) => {
        setSuccessMessage(`Thanks for signing up for our waitlist`);
      })
      .catch((e) => console.error(e));
    route.push("/thankyou");
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#08002A]">
      <Link href={"/"}>
        <Image
          src={Logo}
          className="h-[40px] w-[130px] md:h-[75px] md:w-[240px] mx-auto mt-6 cursor-default md:cursor-pointer"
          alt="logo"
          priority
        />
      </Link>

      <div className="text-black bg-white pb-[200px] w-[327px] h-[443px] md:w-[643px] md:h-[513px] mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-6 md:mx-10">
          <h1 className="text-center mt-5 font-bold text-[18px] md:text-[20px]">
            Join the Gnpay waitlist
          </h1>

          {/* */}

          <div className="mt-[40px] md:mt-[70px]">
            <label htmlFor="Username" className="text-[14px] md:text-[16px]">
              Full Name
            </label>

            <input
              type="text"
              name="Username"
              id="Username"
              placeholder="Enter your full name: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required={true}
              minLength={11}
              {...register("Username")}
            />
          </div>

          {/* */}

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
              required={true}
              {...register("Email")}
            />
          </div>

          {/* */}

          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="Pnumber" className="text-[14px] md:text-[16px]">
              Phone Number
            </label>

            <input
              type="Pnumber"
              name="Pnumber"
              id="number"
              placeholder="Enter your Phone Number: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              minLength={11}
              maxLength={14}
              required={true}
              {...register("Pnumber")}
            />
          </div>

          <button
            role="submit"
            className="w-[279px] md:w-[559px] bg-yellow-300 mt-[40px] p-4 rounded-md"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>

          {successMessage && console.log(successMessage)}
        </form>
      </div>
    </div>
  );
}
