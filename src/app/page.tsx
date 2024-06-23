import Projectcard from "@/components/projects/Projectcard";
import Image from "next/image";
import { projectArray } from "@/assets/projects/projectarray";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
  ChevronRight,
  Info,
  MailPlus,
  MouseIcon,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import clock from "@/assets/clock.svg";
import TypingAnimation from "@/components/ui/typinganimation";
import skills from "@/components/ui/skills";
import desk from "@/assets/desk.png";
export default function Home() {
  return (
    <section className="lg:max-w-[50%] mt-20 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
      <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">
            Hey, I&apos;m Priyansh
          </h1>
          <Image
            src={desk}
            alt="coffeCup"
            className="w-12 rotate-12 h-12 lg:w-48 lg:h-48"
          />
        </div>
        <h1 className=" font-bold lg:text-3xl">
          I am a <TypingAnimation />
        </h1>
        <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
          I develop open-source{" "}
          <span className="  text-blue-500 uppercase font-bold">
            full-stack
          </span>{" "}
          apps/tools and occasionally dive in
          <span className=" uppercase text-blue-500 font-bold tracking-wider">
            {" "}
            Random
          </span>{" "}
          projects.
        </p>
        <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
          
          <a
            href="https://github.com/priyansh004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshchauhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="https://x.com/Priyansh_4416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="mailto:work.priyanshchauhan@gmail.com?body=Hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com/priyansh.1712"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
          </a>
        </div>

        

        {/* projects */}
      </div>
    </section>
  );
}
