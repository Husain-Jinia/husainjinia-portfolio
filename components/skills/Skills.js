import React from "react";
import Backend from "./Backend";
import Frontend from "./frontend";
import Other from "./Other";

const Skills = () => {
  return (
    <div className="mb-4">
      <div className="after:table my-0 mx-auto">
        <div className="bg-[#0E0E10] h-[22rem] xl:h-[25rem]">
          <div className="flex flex-col text-center pt-[5rem]">
            <div className="font-[600] text-xl text-white xl:text-3xl">
              Hi, I'm Husain. nice to meet you.
            </div>
            <div className="font-[100] text-md text-white pt-10 mx-[2rem] xl:text-lg xl:mx-[15rem]">
              I am a self-taught <Full-Stack></Full-Stack> Developer who loves solving
              problems. I have spent the last 2 years working on web-based
              applications both on the front-end and back-end.
            </div>
          </div>
        </div>
        <div className="bg-white xl:mt-[-90px] xl:ml-[8rem] xl:mr-[8rem] lg:ml-[3.1rem] lg:mr-[3.1rem] mt-[-40px] ml-[10px] mr-[10px] flex flex-col lg:flex-row lg:justify-between xl:flex-row xl:justify-between lg:border lg:border-2  lg:rounded xl:border xl:border-2  xl:rounded">
          <Backend />
          <Frontend />
          <Other />
        </div>
      </div>
    </div>
  );
};

export default Skills;
