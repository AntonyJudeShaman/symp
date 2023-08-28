"use client";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "./nav";
import Image from "next/image";
import IconsPage from "./deptsec1";
import ece from "./assets/ece.png";
import mech from "./assets/mech.jpg";
import eee from "./assets/eee.png";
import it from "./assets/it.png";
import cse from "./assets/cse.png";
import Particles from "../components/particles";
import licet from "./licet-logo-60b9776a.png";

const navigation = [
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const links = [{ href: "/", label: "Home" }];

export default function Departments() {
  const cardStyle = {
    backgroundImage: `url(${licet})`,
    backgroundSize: "cover",
    zIndex: 10,
  };

  return (
    <>
      <Navbar links={links} />
      <div
        style={{ maxWidth: "100%", minHeight: "100vh" }}
        className="flex flex-col align-center  overflow-hidden dept-bg"
      >
        <div className="my-16 d-flex mx-auto d-block w-full  animate-fade-out">
          <Link
            href="/"
            className="duration-200 text-zinc-950 hover:text-indigo-900 arrow-left"
          >
            <div className="flex items-center ml-10 w-30">
              <div className="hover:animate-bounce   hover:border-zinc-500">
                <ArrowLeft className="w-12 h-12 inline-block  hover:border-zinc-500" />
              </div>
             
            </div>
          </Link>
          <div className="flex flex-wrap flex-row justify-center w-200">
            <div className="card card0 m-5 border-2 flex-col border-indigo-950 ">
              
            <p className="card-title mx-auto d-block "></p>
              <div>
                <Image src={cse} alt="Logo" className=" z-50 h-50 " />
              </div>
            </div>
            <div className="card card1 m-5 border-2 flex-col border-indigo-950  ">
            <p className="card-title mx-auto d-block "></p>
              <div>
                <Image src={it} alt="Logo" className=" z-50 h-50 " />
              </div>
            </div>
            <div className="card card1 m-5 border-2 flex-col border-indigo-950  ">
            <p className="card-title mx-auto d-block "></p>
              <div>
                <Image src={ece} alt="Logo" className=" z-50 h-50 " />
              </div>
            </div>
            <div className="card card1 m-5 border-2 flex-col border-indigo-950  ">
            <p className="card-title mx-auto d-block "></p>
              <div>
                <Image src={mech} alt="Logo" className=" z-50 h-50 " />
              </div>
            </div>
            <div className="card card1 m-5 border-2 flex-col border-indigo-950  ">
            <p className="card-title mx-auto d-block "></p>
              <div>
                <Image src={eee} alt="Logo" className=" z-50 h-50 " />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/3 via-zinc-300/50 to-zinc-300/0" />

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      <IconsPage />
    </>
  );
}
