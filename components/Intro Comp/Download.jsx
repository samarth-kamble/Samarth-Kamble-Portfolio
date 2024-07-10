import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4"
    >
      <span className="text-Snow">Download Resume</span>
      <span>
        <FaDownload className="text-Snow flex items-end justify-end" />
      </span>
    </Link>
  );
};

export default Download;
