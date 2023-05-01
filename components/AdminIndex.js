
// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, fadeInDown } from "../variants";

import AdminHeader from "./AdminHeader";
import AddElection from "./AddElection";
import ElectionTr from "./electionTr";
import { useEffect, useState } from "react";
import { getAllElectionAPI } from "../apiClient";

const BigToInt=(val)=>Number(val)

const BigToDate=(val)=>{
  const date = new Date(Number(val) * 1000);
  return date.toLocaleString();
  }


const AdminIndex = ({ headerData, navData }) => {
  // destructure heroData
    // const queryClient = useQueryClient();
    
  
  const [show, setShow] = useState(true);

  const [data, setData] = useState([]);
useEffect(()=>{
getData()

},[])

const getData=async()=>{
 const res = await getAllElectionAPI();
 console.log(res);
 setData(res.data); 
}


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
            <AdminHeader headerData={headerData} navData={navData} />
          </motion.div>

          {/* title */}
          <div className="pt-[8rem] px-[5rem] ">
            <div>
              <AddElection />
            </div>

            <div>
              <section className=" py-1 ">
                <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                      <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">
                          All Election List
                        </h6>
                        <button
                          onClick={() => setShow(!show)}
                          className="bg-accent text-white active:bg-accent font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          {show ? <span>Close</span> : <span>Open</span>}
                        </button>
                      </div>
                    </div>

                    <div className={`overflow-x-auto ${show ? "" : "hidden"}`}>
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th
                              colSpan={3}
                              align="center"
                              scope="col"
                              className="px-6 py-3 "
                            >
                              Election Details
                            </th>

                            <th
                              colSpan={2}
                              align="center"
                              scope="col"
                              className="px-6 py-3"
                            >
                              Voting
                            </th>

                            <th
                              colSpan={2}
                              align="center"
                              scope="col"
                              className="px-6 py-3"
                            >
                              Candidate Registration
                            </th>

                            <th
                              colSpan={3}
                              align="center"
                              scope="col"
                              className="px-6 py-3"
                            >
                              Constituency Details
                            </th>
                          </tr>
                          <tr>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Id
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Election Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              State Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Start Time
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              End Time
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Start Time
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              End Time
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Total Vote
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Count
                            </th>
                            <th scope="col" className="px-6 py-3 font-semibold">
                              Add/View
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data
                            ? 
                            
                            data.map((item,index)=>{
                            
                               return (
                                 <ElectionTr
                                   key={index}
                                   id={BigToInt(item[0].hex)}
                                   name={item[1]}
                                   votingStartTime={BigToDate(item[2].hex)}
                                   votingEndTime={BigToDate(item[3].hex)}
                                   candidateRegistrationStartTime={BigToDate(
                                     item[4].hex
                                   )}
                                   candidateRegistrationEndTime={BigToDate(
                                     item[5].hex
                                   )}
                                   totalVotes={BigToInt(item[6].hex)}
                                   stateCode={BigToInt(item[7].hex)}
                                   constituencyCounter={BigToInt(item[8].hex)}
                                   
                                 />
                               );
                              })

                              :null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </section>
    );
};

export default AdminIndex;
