"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import licet from "./licet-logo-60b9776a.png";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 justify-between z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
        style={{ maxWidth: "100%" }}
      >
        <div className="contain flex flex-row items-center p-6 justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="duration-200 text-orange-300 hover:text-zinc-100"
            >
              <ArrowLeft className="w-8 h-8" />
            </Link>
            <div className="flex-shrink-0 mx-4 hidden sm:block">
              <Link href="/">
                <Image
                  src={licet}
                  alt="Logo"
                  className="logo-image"
                  style={{ maxWidth: "60%" }}
                />
              </Link>
            </div>
          </div>
          <div className="flex text-teal-50 gap-5">
            <Link
              href="/department"
              className="duration-500  font-display text-xl text-orange-400 hover:text-orange-600"
            >
              Departments
            </Link>
            <Link
              href="/contact"
              className="duration-500  font-display  text-xl text-orange-400 hover:text-orange-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
