import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { fadeInDown } from "../../variants";
import Election_Card from "../../components/vote/election_Card";
import { getAllElectionAPI } from "../../apiClient";
import { useRouter } from "next/router";

const Vote = () => {
   const [header, setHeader] = useState(false);
  

  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });


  const BigToInt=(val)=>Number(val)

const BigToDate=(val)=>{
  const date = new Date(Number(val) * 1000);
  return date.toLocaleString();
  }


  
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getAllElectionAPI();
    console.log(res);
    setData(res.data);
  };


  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <section className="bg-page bg-no-repeat bg-left-top min-h-screen lg:min-h-screen lg:mb-40 pt-1">
        <motion.div variants={fadeInDown}>
          <header
            className={`${
              header
                ? "bg-white px-3 py-3 rounded-md drop-shadow-primary"
                : "py-[40px]"
            } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
          >
            <Link href={"/"}>
              <h1
                className={` cursor-pointer text-3xl ml-2 font-semibold text-[#F3735F]`}
              >
                DeciVote
              </h1>
            </Link>
            <h1 className={`  text-3xl ml-2 font-semibold`}>
              Choose Election
            </h1>
            <h1 className={` text-3xl ml-2 font-semibold`}>Cast Vote</h1>

            {/* nav menu btn- hide on large screens */}

            {/* nav mobile - hide on large screens */}
          </header>
        </motion.div>

        <div className="pt-[8rem]   px-[5rem] ">
          <section className="text-gray-600 body-font  flex justify-center items-center">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                {data
                  ? data.map((item, index) => {
                      return (
                        <Election_Card
                          key={index}
                          id={BigToInt(item[0].hex)}
                          name={item[1]}
                          votingStartTime={BigToDate(item[2].hex)}
                          votingEndTime={BigToDate(item[3].hex)}
                          candidateRegistrationStartTime={BigToDate(
                            item[4].hex
                          )}
                          candidateRegistrationEndTime={BigToDate(item[5].hex)}
                          totalVotes={BigToInt(item[6].hex)}
                          stateCode={BigToInt(item[7].hex)}
                          constituencyCounter={BigToInt(item[8].hex)}
                         
                        />
                      );
                    })
                  : null}
            
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Vote;
