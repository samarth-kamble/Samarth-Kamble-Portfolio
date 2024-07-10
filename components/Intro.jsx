import { DESIGNATION, NAME, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";
import Naruto from "@/public/images/profile.jpg";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Location from "./Intro Comp/Location";
import Contact from "./Intro Comp/Contact";
import Download from "./Intro Comp/Download";
import Language from "./Intro Comp/Language";
import Skills from "./Intro Comp/Skills";
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

      <div className="beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
        <Location />
        <Language />
        <Skills />
        <Contact />
        <Download />
      </div>

      {/* Fixed Bottom Social Media links  */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
        <Link
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          href={SOCIAL_LINKS.TWITTER}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaTwitter />
        </Link>
        <Link
          href={SOCIAL_LINKS.FACEBOOK}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaFacebook />
        </Link>
        <Link
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
