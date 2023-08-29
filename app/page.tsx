"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import logo from ".//licet-logo-60b9776a.png";
import Image from "next/image";
import Home2 from "./section1";

const navigation = [
  { name: "Departments", href: "/department" },
  // { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateCountdown = () => {
    const targetDate = new Date("2023-09-16T00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const newDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const newHours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const newMinutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const newSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    setDays(newDays);
    setHours(newHours);
    setMinutes(newMinutes);
    setSeconds(newSeconds);
  };

  useEffect(() => {
    const countdownInterval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <div
        style={{ maxWidth: "100%", minHeight: "100vh" }}
        className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-indigo-950 via-green-600/10 to-teal-950"
      >
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center z-40 justify-center gap-4">
            <Image src={logo} alt="Logo" className="w-full h-50 " />
          </ul>
        </nav>
        <div className="hidden -z-40 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-40 animate-fade-in"
          quantity={100}
        />
        <h1 className=" 2xl:text-9xl z-30 text-5xl lg:text-7xl md:text-6xl xl:text-8xl  text-gradient text-transparent duration-1000 bg-zinc-50 cursor-default text-edge-outline animate-title font-display  md:text-9xl whitespace-nowrap bg-clip-text ">
          TechFest 2k23
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <div>
          <div className="countdown m-8 font-display lg:text-3xl mx-auto d-block animate-fade-in text-white">
            <div className="countdown-item lg:pr-5">
              <span className="countdown-number" id="seconds">
                {days < 10 ? `0${days}` : days}
              </span>
              <span
                className={`countdown-label ${
                  isMobile ? "" : "hidden md:inline"
                }`}
              >
                {isMobile ? "d" : "Days"}
              </span>
            </div>
            <div className="countdown-item lg:pr-5">
              <span className="countdown-number" id="seconds">
                {hours < 10 ? `0${hours}` : hours}
              </span>
              <span
                className={`countdown-label ${
                  isMobile ? "" : "hidden md:inline"
                }`}
              >
                {isMobile ? "hrs" : "Hours"}
              </span>
            </div>
            <div className="countdown-item lg:pr-5">
              <span className="countdown-number" id="seconds">
                {minutes < 10 ? `0${minutes}` : minutes}
              </span>
              <span
                className={`countdown-label ${
                  isMobile ? "" : "hidden md:inline"
                }`}
              >
                {isMobile ? "mins" : "Minutes"}
              </span>
            </div>
            <div className="countdown-item lg:pr-5">
              <span className="countdown-number" id="seconds">
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <span
                className={`countdown-label ${
                  isMobile ? "" : "hidden md:inline"
                }`}
              >
                {isMobile ? "s" : "seconds"}
              </span>
            </div>
          </div>

          <div className="my-16 text-center z-40  rounded-xl">
            {/* <Link href="/dept" className="underline duration-500 hover:text-zinc-300">
            <button className="button border-2 border-zinc-50"></button>
          </Link> */}

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm  duration-500   mx-auto d-block justify-center align-center z-40 text-zinc-500 hover:text-zinc-300"
              >
                <button className="button animate-fade-in"></button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Home2 />
    </>
  );
}
