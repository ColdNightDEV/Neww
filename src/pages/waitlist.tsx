// import { Inter } from "next/font/google";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Extra from "@/app/components/Extra";
import Coming from "@/app/components/Coming";
import Contact from "@/app/components/Contact";

import "@/app/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Waitlist() {
  return (
    <div className="overflow-x-hidden bg-[#08002A] text-white">
      {/*  */}
      <Header />

      {/*  */}
      <Hero />

      {/*  */}
      <Services />

      {/*  */}
      <Extra />

      {/*  */}
      <Coming />

      {/*  */}
      <Contact />
    </div>
  );
}
