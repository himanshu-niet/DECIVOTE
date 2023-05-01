import Image from "next/image";

// import components
import Header from "./Header";

// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, fadeInDown } from "../variants";

// import icons
import { CgArrowLongRight } from "react-icons/cg";
import Header2 from "./Header2";
import { useEffect, useState } from "react";
import { getAllCandidateAPI, getAllContiturncyAPI, getAllElectionAPI } from "../apiClient";

const Hero2 = ({ headerData, heroData, navData }) => {
  // destructure heroData

  // const [constituency, setCont] = useState();
  // const [data, setData] = useState([]);

  // const [election, setElection] = useState(0);
  // const [con, setC] = useState(0);

  // useEffect(() => {
  //   console.log(election)
  //   getDataC(election);
  // }, [election]);

  // useEffect(() => {
  //   getDataCandidate(election,con)
  // }, [constituency]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getDataC = async (electionId) => {
  //   const res = await getAllContiturncyAPI(electionId);
  //   setCont(res.data);
  //   console.log(res.data);
  // };

  // const getData = async () => {
  //   const res = await getAllElectionAPI();
  //   console.log(res);
  //   setData(res.data);
  // };

  //  const getDataCandidate = async (electionId, constituencyId) => {
  //    const res = await getAllCandidateAPI(electionId, constituencyId);
  //    setC(res.data);
  //    console.log(res.data, "candidate");
  //  };
  // const BigToInt = (val) => Number(val);

  return (
    <section className="bg-page bg-no-repeat bg-left-top min-h-screen lg:min-h-screen lg:mb-40">
      {/* container */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-100 lg:min-h-100"
      >
        {/* header */}
        <motion.div variants={fadeInDown}>
          <Header2 headerData={headerData} navData={navData} />
        </motion.div>

        {/* title */}
        <div className="pt-[10rem] px-[5rem] ">
          <h1 className="text-center font-semibold text-2xl ">
            DeciVote Indian Election Live Result{" "}
          </h1>
          <div className="px-[5rem] py-[1rem] border-2  mt-[2rem]">
            <h1 className="text-center">Constituency Wise All-Candidates</h1>

            <form className="flex justify-between mt-5">
              <div>
                <span>Select Election</span>
                {/* <select
                onChange={(e) => setElection(e.target.value)}
                  className="mx-2 px-2 py-1 border-2 border-gray-500 rounded"
                >
                  {data
                    ? data.map((item, index) => {
                        return (
                          <option key={index} value={BigToInt(item[0].hex)}>
                            {item[1]}
                          </option>
                        );
                      })
                    : null}
                </select> */}
              </div>
              <div>
                <span>Select Constituency</span>
                {/* <select
                  onChange={(e) => setC(e.target.value)}
                  className="mx-2 px-2 py-1 border-2 border-gray-500 rounded"
                >
                  {constituency
                    ? constituency.map((item, index) => {
                        return (
                          <option key={index} value={BigToInt(item[0].hex)}>
                            {item[2]}
                          </option>
                        );
                      })
                    : null}
                </select> */}
              </div>
              <button className="bg-accent px-3 py-2 rounded-md text-white ">
                Search
              </button>
            </form>
          </div>

          <div className="relative overflow-x-auto ">
            <div className="text-center font-semibold  my-5 mt-10">
              <h1> State Assembly: - Bihar || Total Vote :-500000</h1>
            </div>
            <div className="text-center font-semibold  my-1">
              <h1> Constituency: - Patna || Total Vote :-500000</h1>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-10">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Candidate Photo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Candidate Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Party Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Party Symbol
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Votes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    % of Votes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-16"
                      src="./images/testimonials/avatar1.png"
                    />
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arvind
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AAP
                  </td>
                  <td className="px-6 py-4">
                    <img
                      className="h-16"
                      src="./images/testimonials/avatar1.png"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1000
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    90%
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-16"
                      src="./images/testimonials/avatar1.png"
                    />
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arvind
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    AAP
                  </td>
                  <td className="px-6 py-4">
                    <img
                      className="h-16"
                      src="./images/testimonials/avatar1.png"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1000
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    90%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero2;
