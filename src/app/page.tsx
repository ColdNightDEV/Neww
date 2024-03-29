// import { Inter } from "next/font/google";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Mission from "@/components/Mission";
import Timeline from "@/components/Timeline";
import Vision from "@/components/Vision";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#08002A] text-white">
      {/*  */}
      <Header />

      {/*  */}
      <Hero />

      {/*  */}
      <Vision />

      {/*  */}
      <Mission />

      {/*  */}
      <Timeline />

      {/*  */}
      <Contact />
    </div>
  );
}
