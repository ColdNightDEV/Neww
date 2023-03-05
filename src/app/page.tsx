// import { Inter } from "next/font/google";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Extra from "@/components/Extra";
import Coming from "@/components/Coming";
import Contact from "@/components/Contact";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
