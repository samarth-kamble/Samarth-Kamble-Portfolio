import { CONTACTS } from "@/constants";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Email Address</span>
        <span className="text-xs text-gray-600">
          <div>{CONTACTS.EMAIL}</div>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-Snow font-bold">Phone</span>
        <span className="text-xs text-gray-600 ">{CONTACTS.PHONE}</span>
      </div>
    </div>
  );
};

export default Contact;
