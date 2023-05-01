import Link from "next/link";
import React, { useState } from "react";

const Failed = ({ show ,path}) => {
    const [hide, setHide] = useState(show);
  return (
    <div className={hide ? "" : "hidden"}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-accent/[.6]">
        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-8 h-16 w-16 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            Voting Time Not Exist
          </h1>

          <div className="space-x-4 bg-gray-100 py-4 text-center">
            <Link href={"/"}>
              <button className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;
