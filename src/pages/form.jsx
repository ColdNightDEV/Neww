// Import the library for collecting and organizing data from out form
import { useForm } from "react-hook-form";

import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import "../app/globals.css";
import { useState } from "react";
// import Router from "next/router";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();

  const router = useRouter()
  // Sets up our form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Prepares the functions from react-hook-form
  const { register, handleSubmit, watch, setError } = useForm();

  // Function for handling the form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    setFormData(data);

    try {
      await fetch("/api/createUser", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
      // router.push('/error')
    }
    // router.push('/thankyou')
  };

  if (isSubmitting) {
    // Returns a "Submitting comment" state if being processed
    console.log("Submitting comment….....") 
  }
  if (hasSubmitted) {
    // Returns the data that the user submitted for them to preview after submission
    return (
      console.log(`name: ${formData.name}, Email: ${formData.email}, Phone_Number: ${formData.phone} `)
    )
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#08002A]">
      <Link href={"/"}>
        <Image
          src={Logo}
          className="h-[40px] w-[130px] md:h-[75px] md:w-[240px] mx-auto mt-6 cursor-pointer"
          alt="logo"
          priority
        />
      </Link>
      <div className="text-black bg-white pb-[200px] w-[327px] h-[443px] md:w-[643px] md:h-[513px] mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-6 md:mx-10">
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
              name="name"
              id="name"
              placeholder="Enter your full name: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required={true}
              minLength={11}
              value={_id}
              {...register("name")}
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="Email" className="text-[14px] md:text-[16px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required={true}
              value={_id}
              {...register("email")}
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="Pnumber" className="text-[14px] md:text-[16px]">
              Phone Number
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your Phone Number: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              minLength={11}
              maxLength={14}
              required={true}
              value={_id}
              {...register("phone")}
            />
          </div>
          {/*  */}
          {/* <Link href={"/thankyou"}> */}
          <button
            type="submit"
            onSubmit={() => Router.push("/thankyou")}
            className="w-[279px] md:w-[559px] bg-yellow-300 mt-[40px] p-4 rounded-md"
          >
            Submit
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
