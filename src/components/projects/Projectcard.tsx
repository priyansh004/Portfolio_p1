import React from "react";
import Image, { StaticImageData } from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import hostedlink from "@/assets/projects/hostedlink.svg";
import dot from "@/assets/projects/dot.svg";
interface CardProps {
  item: {
    name: string;
    image: string | StaticImageData;
    hostedLink: string;
    githubLink: string;
    stack: string;
    description: string;
    type: string;
  };
  index: number;
}

const Projectcard: React.FC<CardProps> = ({ item, index }) => {
  return (
    <div className="flex flex-col p-4 border-4	border-zinc-400	rounded-lg bg-slate-300	">
      <div>
        <Image
          src={item.image}
          alt={item.name}
          height={400}
          width={600}
        ></Image>
      </div>
      <div className="flex flex-row justify-between mt-2 p-3 align-middle">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl antialiased font-bold tracking-tight text-left	">
            {item.name}
          </h1>
        </div>
        <div className="flex flex-row align-middle gap-4">
          {item.hostedLink && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={item.hostedLink}
              className=" border-2 rounded-full p-1 group"
            >
              <Image src={hostedlink} alt={item.name}></Image>
            </Link>
          )}
          {item.githubLink && (
            <Link
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubLogoIcon className=" w-8 h-8" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-row item-center p-3">
        <h4 className="text-xl  font-medium self-center  mr-2">Tech stack</h4>
        <span className="font-normal text-l italic self-center">
          {item.stack}
        </span>
      </div>
      <div className="flex flex-col font-normal justify-center px-3  text-wrap">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Projectcard;
