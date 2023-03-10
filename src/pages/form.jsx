// Import the library for collecting and organizing data from out form
import Image from "next/image";
import Logo from "../../public/assets/Logo.png";
import Link from "next/link";
import "../app/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        number
      })
    });

    if (response.ok) {
      router.push('/thankyou');
    }
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
        
        <form onSubmit={handleSubmit} className="mx-6 md:mx-10">
          <h1 className="text-center mt-5 font-bold text-[18px] md:text-[20px]">
            Join the Gnpay waitlist
          </h1>

          {/*  */}
          <div className="mt-[40px] md:mt-[70px]">
            <label htmlFor="name" className="text-[14px] md:text-[16px]">
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
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="email" className="text-[14px] md:text-[16px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              required={true}
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          {/*  */}
          <div className="mt-[20px] md:mt-[40px]">
            <label htmlFor="number" className="text-[14px] md:text-[16px]">
              Phone Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter your Phone Number: "
              className="bg-[#F6F6F6] w-[279px] md:w-[559px] py-2 px-3 text-[12px]"
              minLength={11}
              maxLength={14}
              required={true}
              value={number}
              onChange={event => setNumber(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-[279px] md:w-[559px] bg-yellow-300 mt-[40px] p-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
