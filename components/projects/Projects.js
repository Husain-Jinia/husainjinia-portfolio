import React, { useState } from "react";
import { projects } from "../../data/projects";
import Image from "next/image";
import journalit from "../../public/journalit2.png";
import uia from "../../public/UIA_poster.png";
import difreese from "../../public/difreese2.png";
import movif from "../../public/movif.png";
import optifood from "../../public/optifood.png";

export const getStaticProps = async () => {
  return {
    props: {
      projectLists: projects,
    },
  };
};

const Projects = () => {
  const [react, setreact] = useState("show");
  const [django, setdjango] = useState("show");
  const [Flutter, setFlutter] = useState("show");

  const showReact = () => {
    if (react === "show") {
      setreact("");
    } else {
      setreact("show");
    }
  };

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
      <div className="font-[400] text-xl   xl:text-2xl  text-center align-center">
        Here are some of the projects that I have worked on ....
      </div>

      {/* {projectLists && projectLists.map(project=>(
        <div key={project[id]}>
          <div className="my-2">{project[title]}</div>
          <hr className="my-2"/>
        </div>
        
      ))} */}
      <div
        onClick={showReact}
        className=" flex flex-row justify-between px-10 pr-20  h-[4rem] border-y border-y-1 border-y-slate-200 mt-20"
      >
        <div className="font-[200] text-2xl align-center mt-3">
          MERN | NEXTjs
        </div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 10 6"
          className={`${
            react === "show" ? "rotate-180" : ""
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
          react === ""
            ? "hidden"
            : "flex flex-col mx-5 lg:mx-10 xl:mx-10 transition-all duration-1000"
        } `}
      >
        <div className="flex flex-col lg:flex-row xl:flex-row  mt-[3rem] mb-[3rem]">
          <div className="flex flex-col  xl:mr-20 lg:mr-5  ">
            <div className="font-[600] lg:text-5xl xl:text-9xl text-4xl my-2">
              JournalIt
            </div>
            <div className="font-[200] text-xl my-2 mb-10">
              React | Nodejs | Expressjs | Mongodb
            </div>
            <div className="font-[100] text-xl xl:text-2xl  mb-5">
              Journaling website built using the MERN stack to help people
              organise their tasks and journal their progress
            </div>
            <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-5  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
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
          <div className="py-10">
            <Image src={journalit} width="1400px" height="800px" />
          </div>
        </div>
        {/* <div className=" my-10">
          <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
        </div> */}
      </div>
      <div
        onClick={showDjango}
        className=" flex flex-row justify-between px-10 pr-20  h-[4rem] border-y border-y-1 border-y-slate-200 mt-10"
      >
        <div className="font-[200] text-2xl align-center mt-3">DJANGO</div>
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
        <div className="flex flex-col lg:flex-row xl:flex-row  mt-[3rem] mb-[3rem]">
          <div className="flex flex-col my-4 xl:mr-10 lg:mr-5 ">
            <div className="font-[600] lg:text-5xl xl:text-9xl text-4xl my-2">
              UIA
            </div>
            <div className="font-[200] text-xl my-2 mb-10">
              Django | Jinja | Bootstrap4
            </div>
            <div className="font-[100] text-xl xl:text-2xl  mb-3">
              Website built in Django to promote instagram artist by scraping
              artists with less reach from specific hashtags and displaying them
              on the website
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
            <Image src={uia} className="pt-5" width="1600px" height="900px" />
          </div>
        </div>
        <div className="">
          <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row  mt-[3rem] mb-[3rem]">
          <div className="flex flex-col xl:mr-10 lg:mr-5 ">
            <div className="font-[600] lg:text-5xl xl:text-9xl text-4xl mb-2">
              DiFreeSe
            </div>
            <div className="font-[200] text-xl my-2 mb-10">
              Django | Jinja | Tailwind | SkLearn
            </div>
            <div className="font-[100] text-xl xl:text-2xl  mb-5">
              Website built to provide free diagnosis to various diseases using
              machine learning.
            </div>
            <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-10  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
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
          <div className=" ">
            <Image
              className="border border-4 border-black-400 rounded-lg"
              src={difreese}
              width="1200px"
              height="700px"
            />
          </div>
        </div>
        <div className="">
          <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-row  mt-[3rem] mb-[3rem]">
          <div className="flex flex-col xl:mr-10 lg:mr-5 ">
            <div className="font-[600] lg:text-5xl xl:text-9xl text-4xl mb-2">
              Optifood
            </div>
            <div className="font-[200] text-xl my-2 mb-10">
              Django | Jinja | Bootstrap | SKLearn
            </div>
            <div className="font-[100] text-xl xl:text-2xl  mb-5">
              ML driven website which gives the restaurant owner an estimate of
              how many orders a restaurant will receive throughout the week.
            </div>
            <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-10  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
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
          <div className=" ">
            <Image
              className="border border-4 border-black-400 rounded-lg"
              src={optifood}
              width="1850px"
              height="1100px"
            />
          </div>
        </div>
      </div>
      <div
        onClick={showFlutter}
        className=" flex flex-row justify-between px-10 pr-20  h-[4rem] border-y border-y-1 border-y-slate-200 mt-10"
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
        <div className="flex flex-col lg:flex-row xl:flex-row  mt-[3rem] mb-[3rem]">
          <div className="flex flex-col  xl:mr-10 lg:mr-5  ">
            <div className="font-[600] lg:text-5xl xl:text-9xl text-4xl my-2">
              Movif
            </div>
            <div className="font-[200] text-xl my-2 mb-10">Flutter | Dart</div>
            <div className="font-[100] text-xl xl:text-2xl  mb-5">
              A flutter application which shows the rating and description of
              different movies
            </div>
            <div className=" font-[700] text-xl text-slate-300 lg:mt-5 xl:mt-5  flex-row cursor-pointer hover:text-slate-500 hidden lg:flex xl:flex">
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
          <div className="py-10">
            <Image src={movif} width="900px" height="550px" />
          </div>
        </div>
        {/* <div className="">
          <div className=" align-center h-[0.1rem] bg-slate-200 mt-5"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
