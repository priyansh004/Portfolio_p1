"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { home, project, blog } from "@/assets/Navbar";

const navbarItems = [
  {
    name: "HOME",
    href: "/",
    icon: home,
  },
  {
    name: "WORK ",
    href: "/projects",
    icon: project,
  },
  {
    name: "BlOG",
    href: "/blogs",
    icon: blog,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#3F5CB0]">
      <div className="z-50 lg:sticky max-w-[95%] m-auto lg:top-0">
        <div className="flex flex-row justify-center p-6">
          <div className="uppercase font-bold italic text-3xl">
            Priyansh Chauhan
          </div>
        </div>

        <section className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-[#2D4484] flex flex-row justify-evenly border-2 rounded-xl border-slate-600 max-w-[95%] md:w-[500px]">
          {navbarItems.map((item, index) => {
            const isActive =
              (pathname.includes(item.href) && item.href.length > 1) ||
              pathname === item.href;
            return (
              <div className="m-1" key={item.name}>
                <Link legacyBehavior href={item.href} passHref>
                  <a
                    className={`flex items-center ${
                      isActive ? "border-b-4 border-black animate-pulse" : ""
                    } p-2`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      height={45}
                      width={45}
                      className="mr-1"
                    />
                    <h2 className="hidden sm:inline-block pl-1 self-center">
                      {item.name}
                    </h2>
                  </a>
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
