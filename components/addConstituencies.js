import Image from "next/image";

// import motion
import { motion } from "framer-motion";

// import variants
import { staggerContainer, fadeInDown } from "../variants";

import AdminHeader from "./AdminHeader";
import AddConstituency from "./AddConstituency";
import ContituencyTr from "./contituencyTr";
import ElectionDetail from "./ElectionDetail";
import { useEffect, useState } from "react";
import {
  getAllContiturncyAPI,
  getAllElectionAPI,
  getElectionAPI,
} from "../apiClient";
import { useRouter } from "next/router";
import Loader from "./dialog/lodder";

const AddConstituencies = ({ headerData, navData }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [id,setId]=useState();

  useEffect(() => {
    if (!router.isReady) return;
    const electionId = router.query.electionId;
    setId(electionId)
    getDataC(electionId);
    getDataE(electionId);
  }, [router.isReady]);

  const [data, setData] = useState([]);

  const [election, setElection] = useState([]);

  const getDataC = async (electionId) => {
    const res = await getAllContiturncyAPI(electionId);
    setData(res.data);
    console.log(res.data)
  };
  const getDataE = async (electionId) => {
    const res = await getElectionAPI(electionId);
    setElection(res.data);
  };


  const BigToInt = (val) => Number(val);

  const BigToDate = (val) => {
    const date = new Date(Number(val) * 1000);
    return date.toLocaleString();
  };

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
            {election.length > 0 ? (
              <ElectionDetail
                key={election[0].hex}
                id={BigToInt(election[0].hex)}
                name={election[1]}
                votingStartTime={BigToDate(election[2].hex)}
                votingEndTime={BigToDate(election[3].hex)}
                candidateRegistrationStartTime={BigToDate(election[4].hex)}
                candidateRegistrationEndTime={BigToDate(election[5].hex)}
                totalVotes={BigToInt(election[6].hex)}
                stateCode={BigToInt(election[7].hex)}
                constituencyCounter={BigToInt(election[8].hex)}
              />
            ) : (
              null
            )}
          </div>

          <div>{id ? <AddConstituency electionId={id} /> : null}</div>

          <div>
            <section className=" py-1 ">
              <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        All Constituency List
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
                  <hr></hr>
                  <div
                    className={`overflow-x-auto p-3 ${show ? "" : "hidden"}`}
                  >
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Id
                          </th>

                          <th scope="col" className="px-6 py-3 font-semibold">
                            Constituency Name
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Constituency Code
                          </th>

                          <th scope="col" className="px-6 py-3 font-semibold">
                            Total Vote
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Candidate Count
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Add/View Candidate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data
                          ? data.map((item, index) => {
                              return (

                    
                                <ContituencyTr
                                  key={index}
                                  constituencyId={BigToInt(item[0].hex)}
                                  name={item[2]}
                                  totalVotes={BigToInt(item[3].hex)}
                                  stateCode={BigToInt(item[6].hex)}
                                  constituencyCode={BigToInt(item[1].hex)}
                                  electionId={BigToInt(item[5].hex)}
                                  candidateCounter={BigToInt(item[4].hex)}
                                />
                              );
                            })
                          : null}
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

export default AddConstituencies;
