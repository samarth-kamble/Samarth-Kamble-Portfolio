import { DESIGNATION, NAME } from "@/constants";
import Image from "next/image";
import React from "react";
import Naruto from "@/public/images/profile.jpg";
const Intro = () => {
  return (
    <>
      {/* fixed at top */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
        <Image
          className="w-20 h-20 rounded-full"
          src={Naruto}
          alt="profile picture"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-gray-300 text-base font-bold break-normal">
            {NAME}
          </span>
          <span className="text-sm text-LightGray text-center mt-2">
            {DESIGNATION}
          </span>
        </div>
      </div>
    </>
  );
};

export default Intro;
