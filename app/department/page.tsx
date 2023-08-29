import Link from "next/link";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "./nav";
import Image from "next/image";
import IconsPage from "./deptsec1";
import ece from "./assets/ece.png";
import eee from "./assets/eee.png";
import it from "./assets/it.png";
import cse from "./assets/cse.png";
import Particles from "../components/particles";
import licet from "./licet-logo-60b9776a.png";

import { Github, Mail, Twitter, PhoneCallIcon } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "./card";

const socials = [
  {
    href: "",
    label: "ECE",
    desc: "licet",
    image: ece,
  },
  {
    href: "https://flair2k23.vercel.app",
    label: "IT",
    desc: "licet",
    image: it,
  },
  {
    href: "mailto:.com",
    label: "CSE",
    desc: "licet",
    image: cse,
  },
  {
    href: "mailto:.com",
    label: "EEE",
    desc: "licet",
    image: it,
  },
  {
    href: "mailto:.com",
    label: "MECH",
    desc: "licet",
    image: ece,
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl sm:pt-0 lg:pt-40 p-8 from-teal-950 via-teal-950 to-zinc-900/0">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.desc}>
              <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-10 md:p-16">
                <span
                  className="absolute w-px  bg-gradient-to-b from-zinc-900 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="z-10 flex flex-col items-center">
                  <Image src={s.image} alt="Logo" width={200} height={200} />
                  <span className="text-xl mt-6 text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <span className="text-xl mt-6 font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.desc}
                  </span>
                  <div className="flex justify-center  pt-10">
                    <Link href={s.href} target="_blank" className="button-link">
                    <button className="card-button inline-flex items-center group">
                        Details
                        <span className="ml-2 transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                          <ArrowRight />
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <IconsPage />
    </div>
  );
}
