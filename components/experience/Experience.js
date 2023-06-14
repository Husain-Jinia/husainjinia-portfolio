import React from "react";
import Cards from "./Cards";
import Image from "next/image";
import teachedison from '../../public/TE.jpg'
import nextjs from '../../public/logo/next.png'
import reactjs from '../../public/logo/react-bw.png'
import flutter from '../../public/logo/flutter-bw.png'
import git from '../../public/logo/git-bw.png'
import dart from '../../public/logo/Dart-logo-bw.png'
import mongodb from '../../public/logo/mongodb-bw.png'



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
                <p className="overflow-auto mt-8 text-lg">TeachEdison is a custom <span className="font-bold">software development company</span> that integrates strategy, design thinking and engineering to build 
                <span className="font-bold"> disruptive products for modern educators</span>. We thrive on being an incredible technology partner for our clients in 
                their pioneering missions to change the world.</p>
                <p className="my-2 text-lg">Their <span className="font-bold">MISSION</span> is to make education <span className="font-bold">accessible, affordable and credible</span> to anyone and everyone.</p>
                <p className="text-lg">Their <span className="font-bold">GOAL</span> is to empower <span className="font-bold">one million educators</span> to build successful EdTech companies <span className="font-bold">by 2025.</span></p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mt-10 2xl:mt-[8rem] ">
              <div className="max-w-40 min-w-40 flex flex-wrap justify-around  rounded 2xl:max-h-[37rem] xl:max-h-[35rem] lg:max-h-[30rem] overflow-auto mb-10">
                <div className="p-4"><Image height="150px" width="150px" src={nextjs}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={reactjs}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={flutter}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={git}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={dart}></Image></div>
                <div className="p-4"><Image height="150px" width="150px" src={mongodb}></Image></div>

              </div>
              <div className="flex flex-col px-10">
                <div className="font-[600] lg:text-3xl 2xl:text-6xl xl:text-5xl text-2xl  text-slate-700">
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
                <div className="font-[600] lg:text-3xl 2xl:text-6xl xl:text-5xl text-2xl  text-slate-700">
                  Objective
                </div>
                <div className="">
                  <div className=" align-center h-[0.5rem] bg-slate-400 mt-5 "></div>
                </div>
                <div className="overflow-auto mt-8 text-lg">
                My objective through out this internship was to improve my technical skills and get the industry knowledge for the domain I want to work in. 
                Throughout this internship I worked on various technologies like Reactjs, Nextjs, Monogodb, Flutter etc. I learned how to write clean and quality 
                code and the proper methodologies that are supposed to be followed while coding. Apart from the technicals skills I also learned how to work as a 
                team player and how to manage my time properly to meet deadlines and deliver quality work. 
                </div>
              </div>
            </div>
        </div>
        
      </div>
    </div>

  );
};

export default Experience;
 