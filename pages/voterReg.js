import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {  fadeInDown } from "../variants";
import AddVoter from "../components/voter/addVoter";

const SignUp = () => {


  const [header, setHeader] = useState(false);
  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <section className="bg-page bg-no-repeat bg-left-top min-h-screen lg:min-h-screen lg:mb-40">
        <motion.div variants={fadeInDown}>
          <header
            className={`${
              header
                ? "bg-white px-3 py-3 rounded-md drop-shadow-primary"
                : "py-[40px]"
            } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
          >
          

            <Link href={"/"}>
              <h1 className={` cursor-pointer text-3xl ml-2 font-semibold text-[#F3735F]`}>
                DeciVote
              </h1>
            </Link>
          </header>
        </motion.div>

        <div className="pt-[8rem] px-[5rem] ">
          <AddVoter/>
        </div>
      </section>
    </div>
  );
};



export default SignUp;
