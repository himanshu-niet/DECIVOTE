import React from "react";

const Confirm = ({ show }) => {
  return (
    <div className={show ? "" : "hidden"}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-accent/[.6]">
        <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <img
            className="mx-auto mt-8 h-16 w-16 text-green-400"
            src="/images/confirm.png"
          />
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
            Confirmation
          </h1>
          <p className="my-4 text-center text-sm text-gray-500">
            Woah, successfully completed 3/5 Tasks
          </p>
          <div className="space-x-4 bg-gray-100 py-4 text-center">
            <button className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">
              Dashboard
            </button>
            <button className="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">
                Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
