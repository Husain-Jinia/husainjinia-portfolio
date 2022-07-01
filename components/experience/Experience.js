import React from "react";
import Cards from "./Cards";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col text-center align-center  bg-[#0E0E10] py-10">
          <div className="font-[600] text-xl  xl:text-3xl text-white">
            Industry exposure
          </div>
          <div className="font-[100] text-md  pt-10 mx-[2rem] xl:text-lg xl:mx-[15rem] text-white">
            Throughout my coding journey I have gathered professional coding experience by working as an intern in various companies. 
          </div>
        </div>
        <hr className=" align-center mb-20"/>
        <div className="mx-10 my-2 xl:mx-[15rem]">
            <Cards/>
        </div>
        
      </div>
    </div>
  );
};

export default Experience;
