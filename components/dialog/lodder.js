import React from 'react'

import { ThreeCircles } from "react-loader-spinner";


const Loader = ({show}) => {
  return (
    <div className={show ? "" : "hidden"}>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/[.8]">
        <ThreeCircles
          height="100"
          width="100"
          color="#F3735F"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#F3735F"
          innerCircleColor="#ffff"
          middleCircleColor="#4fa94d"
        />
      </div>
    </div>
  );
}

export default Loader;