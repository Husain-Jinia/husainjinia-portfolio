import React, { useState } from "react";
import { webProjects, mobileProjects } from "../../data/projects";
import Image from "next/image";
import journalit from "../../public/journalit2.png";
import uia from "../../public/UIA_poster.png";
import difreese from "../../public/difreese2.png";
import movif from "../../public/movif.png";
import optifood from "../../public/optifood.png";
import cvflow from "../../public/assets/cvflow.png";

export const getStaticProps = async () => {
  return {
    props: {
      projectLists: projects,
    },
  };
};

const Projects = () => {
  const [django, setdjango] = useState("show");
  const [Flutter, setFlutter] = useState("show");

  const showDjango = () => {
    if (django === "show") {
      setdjango("");
    } else {
      setdjango("show");
    }
  };

  const showFlutter = () => {
    if (Flutter === "show") {
      setFlutter("");
    } else {
      setFlutter("show");
    }
  };

  return (
    <div className=" text-center lg:text-left xl:text-left">
      <div className="font-[700] text-xl text-slate-600  2xl:text-5xl text-center align-center mt-10">
            PROJECTS
      </div>
      <div className="font-[400] text-xl   xl:text-2xl  text-center align-center mt-5">
       Listed below are some of the personal projects that I've built ....
      </div>
      <div
        onClick={showDjango}
        className=" flex flex-row justify-between px-10 pr-20  h-[4rem] border-y border-y-1 border-y-slate-200 mt-10"
      >
        <div className="font-[200] text-2xl align-center mt-3">WEB PROJECTS</div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 6"
          className={`${
            django === "show" ? "rotate-180" : ""
          } transition-all duration-500 mt-6`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19848 0.645161C9.04202 0.489923 8.83036 0.402789 8.60975 0.402789C8.38913 0.402789 8.17747 0.489923 8.02101 0.645161L5.02305 3.59571L2.06684 0.645161C1.91037 0.489923 1.69872 0.402789 1.4781 0.402789C1.25748 0.402789 1.04583 0.489923 0.889365 0.645161C0.811093 0.722645 0.748967 0.81483 0.706571 0.916398C0.664175 1.01797 0.642347 1.12691 0.642347 1.23694C0.642347 1.34697 0.664175 1.45591 0.706571 1.55748C0.748967 1.65905 0.811093 1.75123 0.889365 1.82872L4.43013 5.36271C4.50777 5.44083 4.60013 5.50284 4.70189 5.54515C4.80365 5.58747 4.9128 5.60925 5.02305 5.60925C5.13329 5.60925 5.24244 5.58747 5.3442 5.54515C5.44596 5.50284 5.53833 5.44083 5.61596 5.36271L9.19848 1.82872C9.27675 1.75123 9.33888 1.65905 9.38127 1.55748C9.42367 1.45591 9.4455 1.34697 9.4455 1.23694C9.4455 1.12691 9.42367 1.01797 9.38127 0.916398C9.33888 0.81483 9.27675 0.722645 9.19848 0.645161Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        className={`${
          django === ""
            ? "hidden"
            : "flex flex-col mx-5 lg:mx-10 xl:mx-10 transition-all duration-1000"
        } `}
      >
        {
          webProjects.map(
            (d)=>{
              return <>
              <div className="flex flex-col lg:flex-row xl:flex-row justify-between  mt-[3rem] mb-[3rem]" key={d.id}>
                <div className="flex flex-col my-4 xl:mr-10 lg:mr-5 lg:min-w-[30%] lg:max-w-[40%]">
                  <div className="font-[600] lg:text-5xl 2xl:text-9xl xl:text-8xl text-slate-700 text-4xl my-2">
                    {d.title} 
                  </div>
                  <div className="font-[200] text-xl my-2 mb-10">
                    {d.subtitle}
                  </div>
                  <div className="font-[100] text-xl xl:text-2xl  mb-3">
                    {d.description}
                  </div>
                  <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-[4rem]  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
                    <div>EXPLORE</div>
                    <div className="ml-3 pb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={d.image} className="pt-5" width="1000px" height="550px" />
                </div>
              </div>
              <div className="">
                <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
              </div>
              </>
            }
          )
        }
        </div>
        <div
        onClick={showFlutter}
        className=" flex flex-row justify-between px-10 pr-20  h-[4rem] border-y border-y-1 border-y-slate-200 mt-10 mb-"
      >
        <div className="font-[200] text-2xl align-center mt-3">Flutter</div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 6"
          className={`${
            Flutter === "show" ? "rotate-180" : ""
          } transition-all duration-500 mt-6`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19848 0.645161C9.04202 0.489923 8.83036 0.402789 8.60975 0.402789C8.38913 0.402789 8.17747 0.489923 8.02101 0.645161L5.02305 3.59571L2.06684 0.645161C1.91037 0.489923 1.69872 0.402789 1.4781 0.402789C1.25748 0.402789 1.04583 0.489923 0.889365 0.645161C0.811093 0.722645 0.748967 0.81483 0.706571 0.916398C0.664175 1.01797 0.642347 1.12691 0.642347 1.23694C0.642347 1.34697 0.664175 1.45591 0.706571 1.55748C0.748967 1.65905 0.811093 1.75123 0.889365 1.82872L4.43013 5.36271C4.50777 5.44083 4.60013 5.50284 4.70189 5.54515C4.80365 5.58747 4.9128 5.60925 5.02305 5.60925C5.13329 5.60925 5.24244 5.58747 5.3442 5.54515C5.44596 5.50284 5.53833 5.44083 5.61596 5.36271L9.19848 1.82872C9.27675 1.75123 9.33888 1.65905 9.38127 1.55748C9.42367 1.45591 9.4455 1.34697 9.4455 1.23694C9.4455 1.12691 9.42367 1.01797 9.38127 0.916398C9.33888 0.81483 9.27675 0.722645 9.19848 0.645161Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        className={`${
          Flutter === ""
            ? "hidden"
            : "flex flex-col mx-5 lg:mx-10 xl:mx-10 transition-all duration-1000"
        } `}
      >
        {
          mobileProjects.map(
            (d)=>{
              return <>
              <div className="flex flex-col lg:flex-row xl:flex-row justify-between  mt-[3rem] mb-[3rem]" key={d.id}>
                <div className="flex flex-col my-4 xl:mr-10 lg:mr-5 lg:min-w-[30%] lg:max-w-[40%]">
                  <div className="font-[600] lg:text-5xl 2xl:text-9xl xl:text-8xl text-slate-700 text-4xl my-2">
                    {d.title} 
                  </div>
                  <div className="font-[200] text-xl my-2 mb-10">
                    {d.subtitle}
                  </div>
                  <div className="font-[100] text-xl xl:text-2xl  mb-3">
                    {d.description}
                  </div>
                  <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-[4rem]  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
                    <div>EXPLORE</div>
                    <div className="ml-3 pb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={d.image} className="pt-5" width="1000px" height="580px" />
                </div>
              </div>
              <div className="">
                <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
              </div>
              </>
            }
          )
        }
        </div>
      </div>
  );
};

export default Projects;
