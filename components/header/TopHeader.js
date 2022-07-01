import React from "react";
import Image from "next/image";
import profile from "../../public/me.jpg"

const TopHeader = () => {
  return (
    <div className="w-100">
        <div className="xl:flex xl:flex-row xl:justify-between lg:justify between  mt-[7rem] pb-5 lg:pb-15 xl:pb-20 md:pb-8 ">
            <div className="text-[5rem] font-[800] md:[7rem] xl:text-[10rem] lg:text-[10rem]">Husain.</div>
            <div className="hidden  xl:block grayscale rounded-full pt-[3.5rem] pr-[3rem]"> 
              <Image width="180px" height="180px " src={profile} className="rounded-full"></Image>
            </div>
        </div>
    </div>
    
  );
};

export default TopHeader;
