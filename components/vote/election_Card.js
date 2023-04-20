import React from 'react'

const Election_Card = () => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
      <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
        <div>
          <h2 className="text-gray-900 text-lg font-bold">Total Ballance</h2>
          <h3 className="mt-2 text-xl font-bold text-green-500 text-left">
            + 150.000 ₭
          </h3>
          <p className="text-sm font-semibold text-gray-400">Last Transaction</p>
          <button className="text-sm mt-6 px-4 py-2 bg-green-400  text-white rounded-lg  tracking-wider hover:bg-green-500 outline-none">
            Add to cart
          </button>
        </div>
        <div className="bg-gradient-to-tr from-green-500 to-green-500 w-32 h-32  rounded-full shadow-2xl shadow-green-400 border-white  border-dashed border-2  flex justify-center items-center ">
          <div>
            <h1 className="text-white text-2xl">Basic</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Election_Card