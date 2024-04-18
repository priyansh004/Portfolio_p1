import React from "react";
import Projectcard from "@/components/projects/Projectcard";
import Image from "next/image";
import Link from "next/link";
import { projectArray } from "@/assets/projects/projectarray";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
const page = () => {
  return (
    <div className=" lg:max-w-[70%] lg:m-auto min-h-max overflow-hidden pt-8	">
      <div className=" text-3xl md:text-[100px] text-center flex flex-row justify-center item-center 	">
        Projects
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/priyansh004"
        >
          <GitHubLogoIcon height={50} width={50}/>
        </Link>
        
      </div>
      <div className="flex pl-4 pr-4 flex-col pb-7 md:pb-0">
        <div className="mt-6 grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 ">
          {projectArray.map((item, index) => (
            <Projectcard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
