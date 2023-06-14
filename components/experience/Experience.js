import React from "react";
import Cards from "./Cards";
import Image from "next/image";
import teachedison from '../../public/TE.jpg'
import nextjs from '../../public/logo/next.png'
import reactjs from '../../public/logo/react.png'
import flutter from '../../public/logo/flutter.png'
import git from '../../public/logo/git.png'
import dart from '../../public/logo/Dart-logo.png'
import mongodb from '../../public/logo/mongodb.png'



const Experience = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col text-center align-center  bg-[#0E0E10] py-10">
          <div className="font-[600] text-xl  xl:text-3xl text-white">
            WORK EXPERIENCE
          </div>
          <div className="font-[100] text-md  pt-10 mx-[2rem] xl:text-lg xl:mx-[15rem] text-white">
            Throughout my coding journey I have gathered professional coding experience by working as an intern in various organizations. 
          </div>
        </div>
        <hr className=" align-center mb-20"/>
        <div className="mx-5 my-2 xl:mx-[10rem] flex flex-col">
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
              <Image class="min-w-0 max-w-70" src={teachedison} width="2500px" height="1100px"/>
              <div className="flex flex-col pl-10 text-left max-w-40">
                <div className=" font-[600] lg:text-3xl 2xl:text-6xl xl:text-5xl text-2xl hidden lg:contents xl:contents 2xl:contents text-slate-700">
                  TeachEdison | SWE Intern
                </div>
                <div className="">
                  <div className=" align-center h-[0.5rem] bg-slate-500 mt-5 "></div>
                </div>
                <p className="overflow-auto mt-8 text-lg">TeachEdison is a custom software development company that integrates strategy, design thinking and engineering to build
                disruptive products for modern educators. We thrive on being an incredible technology partner for our clients in 
                their pioneering missions to change the world.</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-10 2xl:mt-[8rem] ">
              <div className="max-w-30 flex flex-wrap justify-around  rounded 2xl:max-h-[37rem] xl:max-h-[35rem] lg:max-h-[30rem] overflow-auto">
                <div className="p-4"><Image height="150px" width="150px" src={nextjs}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={reactjs}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={flutter}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={git}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={dart}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={mongodb}></Image></div>

              </div>
              <div className="flex flex-col px-10">
                <div className="font-[600] lg:text-3xl 2xl:text-6xl xl:text-5xl text-2xl hidden lg:contents xl:contents 2xl:contents text-slate-700">
                  Roles and Responsibilities
                </div>
                <div className="">
                  <div className=" align-center h-[0.5rem] bg-slate-400 mt-5  "></div>
                </div>
                <div className="overflow-auto mt-8 text-lg mb-10">
                  <div className="min-w-70">
                  <ol>
                    <li>	&#8594; Built 3 production level applications from scratch.</li>
                    <li>	&#8594; Responsible for quality control for the applications.</li>
                    <li>	&#8594; Responsible for code optimization.</li>
                    <li>	&#8594; Responsible for UI rework for Edison OS app.</li>
                  </ol>
                  </div>
                 
                </div>
                <div className="font-[600] lg:text-3xl 2xl:text-6xl xl:text-5xl text-2xl hidden lg:contents xl:contents 2xl:contents text-slate-700">
                  Objective
                </div>
                <div className="">
                  <div className=" align-center h-[0.5rem] bg-slate-400 mt-5 "></div>
                </div>
                <div className="overflow-auto mt-8 text-lg">
                TeachEdison is a custom software development company that integrates strategy, design thinking and engineering to build
                disruptive products for modern educators. We thrive on being an incredible technology partner for our clients in 
                their pioneering missions to change the world.
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </div>

  );
};

export default Experience;
 