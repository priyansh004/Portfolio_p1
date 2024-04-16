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
    <nav className="bg-slate-300">
      <div className="z-50 lg:sticky max-w-[95%] m-auto lg:top-0">
        <div className="flex flex-row justify-between p-6">
          <div className="text-3xl"> Priyansh Chauhan</div>
          <div className="hidden md:flex  flex-row justify-center gap-3 ">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/priyansh004"
            >
              <TwitterLogoIcon height={50} width={50} />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/priyansh004"
            >
              <GitHubLogoIcon height={50} width={50} />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/priyansh004"
            >
              <LinkedInLogoIcon height={50} width={50} />
            </Link>
          </div>
          <div>
            <Button asChild className="h-full p-1 ">
              <Link href="/contact" className="px-2">
                <h2 className="text-xl">Contact</h2>
              </Link>
            </Button>
          </div>
        </div>
        <section className="fixed left-0 top-1/2 transform -translate-y-1/2   backdrop-blur-lg bg-slate-300 flex self-center border-2 rounded-2xl border-slate-600 ml-2 	">
          <div className=" p-1 ">
            {navbarItems.map((item, index) => {
              const isActive =
                (pathname.includes(item.href) && item.href.length > 1) ||
                pathname === item.href;
              return (
                <div className="m-1">
                  <Link
                    key={item.name}
                    href={item.href}
                    className={` flex ${
                      isActive && "border-l-4 border-black animate-pulse"
                    } p-2`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      height={45}
                      width={45}
                    ></Image>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
