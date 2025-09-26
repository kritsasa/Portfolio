import React from "react";
import Link from "next/link";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

function Banner() {
  return (
    <div className="h-screen w-screen pt-50 bg-black flex justify-center">
      <div className="flex flex-col items-center">
        <h3 className="text-xl text-lightGray font-inter-tight mb-10 text-left w-full">
          Hi I'm Kritsada Mooljam
        </h3>
        <h1 className="text-7xl font-inter-tight font-bold bg-gradient-to-r from-deepNavy via-royalPurple to-lightGray bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          Front-End Developer
        </h1>
        <Link href="/contact">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-15 overflow-hidden text-md font-inter-tight text-gray-900 rounded-lg group bg-gradient-to-br from-deepNavy to-royalPurple group-hover:from-royalPurple group-hover:to-lightGray hover:text-lightGray dark:text-lightGray">
            <span className="relative flex justify-center items-center px-5 py-2.5 transition-all ease-in duration-150 bg-lightGray dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Contact Me <span className="ml-1 text-2xl transition-all duration-200 group-hover:translate-x-2"><MdOutlineSubdirectoryArrowRight /></span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

{
  /* <button className="text-lightGray font-inter-tight mt-15 px-6 py-3 flex justify-center items-center cursor-pointer bg-gradient-to-r from-deepNavy via-royalPurple to-violetMagenta text-lightGray rounded-full group">
            Contact Me <span className="ml-1 text-2xl transition-all duration-200 group-hover:translate-x-2"><MdOutlineSubdirectoryArrowRight /></span>
          </button> */
}
