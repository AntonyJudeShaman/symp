import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import logo from ".//licet-logo-60b9776a.png";
import Image from "next/image";
import Home2 from "./section1";

const navigation = [
  { name: "Departments", href: "/department" },
  // { name: "Projects", href: "/projects" },
  // { name: "Contact", href: "/contact" },
];

export default function Home() {
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
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 2xl:text-9xl text-5xl lg:text-7xl md:text-6xl xl:text-8xl  text-gradient text-transparent duration-1000 bg-zinc-50 cursor-default text-edge-outline animate-title font-display  md:text-9xl whitespace-nowrap bg-clip-text ">
          TechFest 2k23
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center border-2 border-zinc-50 rounded-xl animate-fade-in">
          {/* <Link href="/dept" className="underline duration-500 hover:text-zinc-300">
            <button className="button border-2 border-zinc-50"></button>
          </Link> */}
          {navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							<button className="button border-2 border-zinc-50"></button>
						</Link>
					))}
        </div>
      </div>
      <Home2 />
    </>
  );
}
