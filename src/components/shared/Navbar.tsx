"use client";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";
import { GitBranchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { blog, home, person, project } from "@/assets/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const navbarItems = [
  {
    name: "Home",
    href: "/",
    icon: home,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: project,
  },
  {
    name: "Blog",
    href: "/blogs",
    icon: blog,
  },
  {
    name: "About",
    href: "/about",
    icon: person,
  },
];
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#3F5CB0]">
      <div className="z-50 lg:sticky max-w-[95%] m-auto lg:top-0">
        <div className="flex flex-row justify-between p-6">
          <div className="text-3xl"> Priyansh Chauhan</div>

          <div>
            <Button asChild className="h-full p-1 ">
              <Link href="/contact" className="px-2">
                <h2 className="text-xl">Contact</h2>
              </Link>
            </Button>
          </div>
        </div>
        <section className="w-[500px] fixed bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-[#2D4484] flex flex-row justify-evenly border-2 rounded-xl border-slate-600">
          {navbarItems.map((item, index) => {
            const isActive =
              (pathname.includes(item.href) && item.href.length > 1) ||
              pathname === item.href;
            return (
              <div className="m-1 ">
                <Link
                  key={item.name}
                  href={item.href}
                  className={` flex ${
                    isActive && "border-b-4 border-black animate-pulse"
                  } p-2 flex flex-row`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    height={45}
                    width={45}
                  ></Image>
                  <h2 className="pl-1 self-center">{item.name}</h2>
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
