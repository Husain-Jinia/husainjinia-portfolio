import React from "react";

const Cards = () => {
  return (
    <div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-[7rem] ml-6 my-2">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
            TeachEdison | Software Enginner intern
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 1st, 2022 - Present
          </time>
          <p className=" text-base font-normal text-gray-500 dark:text-gray-400">1. Worked on 3 Production level mobile apps from scratch.</p>
          <p className=" text-base font-normal text-gray-500 dark:text-gray-400">2. Optimized the applications by improving state management to increase overall speed and performance.</p>
          <p className=" text-base font-normal text-gray-500 dark:text-gray-400">3. Responsible for quality control of the applications.</p>
        </li>
        <li className="mb-[7rem] ml-6  my-2">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white ">
            <svg
              className="w-3 h-3 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
         
          <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
            Foodvybe Inc | Python developer intern
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2nd, 2021 - Nov 9th, 2021
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          1. Forged a python script to update 100,000 entries in the production database and optimized existing code by reducing runtime from 32 sec to 11 sec
         <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          2. Worked on document generation portal developed in Django to auto- generate and mail the HR specific documents.</p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          3. Worked on Image management portal to perform operations such as adding, deleting, resizing and updating image data present in the Mongodb database and AWS S3 buckets.
          </p>       
          </p>
          
        </li>
      </ol>
    </div>
  );
};

export default Cards;
