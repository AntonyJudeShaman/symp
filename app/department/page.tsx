"use client";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "./nav";
import IconsPage from "./deptsec1";

const navigation = [
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const links = [
  { href: "/", label: "Home" },
  // { href: "/projects", label: "Projects" },
  // { href: "/contact", label: "Contact" },
];

export default function Departments() {
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
              <div className="hover:animate-bounce  hover:border-zinc-500">
                <ArrowLeft className="w-10 h-10 inline-block  hover:border-zinc-500" />
              </div>
              <span style={{ fontSize: "3.5vh" }} className=" hover:border-zinc-500">Go Back</span>
            </div>
          </Link>
          <div className="flex flex-wrap flex-row justify-center w-200">
            <div className="card card0 m-5 border-2 border-indigo-950  ">
              CSE
            </div>
            <div className="card card1 m-5 border-2 border-indigo-950  ">
              IT
            </div>
            <div className="card card2 m-5 border-2 border-indigo-950 ">
              ECE
            </div>
            <div className="card card3 m-5 border-2 border-indigo-950  ">
              MECH
            </div>
            <div className="card card4 m-5 border-2 border-indigo-950">EEE</div>
          </div>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/3 via-zinc-300/50 to-zinc-300/0" />

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>
      <IconsPage />
    </>
  );
}
