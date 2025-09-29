import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-screen bg-black pt-35">
      <div className="container flex space-x-15 px-20">
        <div className="">
          <img
            src="https://preview.redd.it/dbngi0djlq521.png?width=640&crop=smart&auto=webp&s=1022e50d7e2c31d3a639a38ad1e508a8bb75b00d"
            alt=""
            className="w-120"
          />
        </div>
        <div>
          <div className="relative">
            <h1 className="text-4xl text-lightGray font-inter-tight font-bold relative z-10">
              About Me
            </h1>
            <h1 className="absolute z-0 text-7xl text-gray-900 font-inter-tight font-bold top-2">
              About
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-md font-inter-tight absolute z-10">
              I believe growth comes from constant learning.
              <br />
              That’s why I keep pushing myself beyond one role to explore the
              whole world of development.
            </p>
          </div>
          <div className="flex space-x-4 mt-25">
            <div className="flex flex-col space-y-2">
              <h6 className="text-lightGray text-md font-inter-tight">Name:</h6>
              <h6 className="text-lightGray text-md font-inter-tight">
                Nickname:
              </h6>
              <h6 className="text-lightGray text-md font-inter-tight">
                Date of brith:
              </h6>
              <h6 className="text-lightGray text-md font-inter-tight">
                Address:
              </h6>
              <h6 className="text-lightGray text-md font-inter-tight">
                Email:
              </h6>
              <h6 className="text-lightGray text-md font-inter-tight">
                Phone:
              </h6>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-500 text-md font-inter-tight">
                Kritsada Mooljam
              </p>
              <p className="text-gray-500 text-md font-inter-tight">P</p>
              <p className="text-gray-500 text-md font-inter-tight">
                September 19, 2006
              </p>
              <p className="text-gray-500 text-md font-inter-tight">
                Chiang Saen, Chiang Rai 57150 Thailand
              </p>
              <p className="text-gray-500 text-md font-inter-tight">
                ninep9p2006@gmail.com
              </p>
              <p className="text-gray-500 text-md font-inter-tight">
                0885578023
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-15">
            <h5 className="text-lightGray text-md font-inter-tight font-bold">
              This is my{" "}
              <span className="text-lg text-violetMagenta">Projects</span>
            </h5>
            <Link href="/projects">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mt-2 cursor-pointer overflow-hidden text-md font-inter-tight text-gray-900 rounded-lg group bg-gradient-to-br from-deepNavy to-royalPurple group-hover:from-royalPurple group-hover:to-lightGray hover:text-lightGray dark:text-lightGray">
                <span className="relative flex justify-center items-center px-5 py-2.5 transition-all ease-in duration-150 bg-lightGray dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  My Projects
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
