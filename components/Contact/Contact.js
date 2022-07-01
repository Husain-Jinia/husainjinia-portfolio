import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";

const Contact = () => {
  const value = "husainjiniaga@gmail.com";
  return (
    <div>
      <div className="flex flex-col align-left xl:px-20 px-10 pt-10 pb-10 bg-black text-slate-100 ">
        <div className="font-[400] text-5xl xl:mb-20 lg:mb-20 mb-[4rem]">CONTACT</div>
        <div className="flex flex-col mb-5">
          <div className="">
            <CopyToClipboard text={value}>
              <span className="cursor-pointer text-xl font-[100] tracking-wider">
                husainjiniaga@gmail
              </span>
            </CopyToClipboard>
          </div>
            <div className="text-xs text-slate-400  mt-3">click on the mail to copy!</div>
        </div>
        <div className="flex flex-row  text-md mt-5 font-[100] mx-2">
          <div className="no-underline decoration-slate-300 decoration-2 underline-offset-4 hover:underline">
            <Link href="https://www.linkedin.com/in/husain-jinia/">
              LinkedIn
            </Link>
          </div>
          <div className="mx-10 no-underline decoration-slate-300 decoration-2 underline-offset-4 hover:underline">
            <Link href="https://www.linkedin.com/in/husain-jinia/">Github</Link>
          </div>
          <div className="no-underline decoration-slate-300 decoration-2 underline-offset-4 hover:underline">
            <Link href="https://www.linkedin.com/in/husain-jinia/">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
