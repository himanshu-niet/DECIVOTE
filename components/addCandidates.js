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
import AdminHeader from "./AdminHeader";
import AddCandidate from "./AddCandidate";
import CandidateTr from "./candidateTr";
import ElectionDetail from "./ElectionDetail";
import { useEffect, useState } from "react";
import ConstituencyDetail from "./ConstituencyDetail";
import { useRouter } from "next/router";
import { getAllCandidateAPI, getContiturncyAPI, getElectionAPI } from "../apiClient";
import { namehash } from "ethers/lib/utils";

const AddCandidates = ({ headerData, navData }) => {
  // destructure heroData
  const [show, setShow] = useState(false);


   const router = useRouter();
   const [eId, setEid] = useState()
   const [cid, setCid] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const electionId = router.query.electionId;
    const constituencyId = router.query.constituencyId;
    setEid(electionId);
    setCid(constituencyId);

    getDataElection(electionId);
    getDataCandidate(electionId, constituencyId);
    getDataContituency(electionId,constituencyId)
  }, [router.isReady]);


  const [candidates, setCandidates] = useState([]);

  const [election, setElection] = useState([]);

  const [constituency, setConstituency] = useState([]);

const getDataContituency = async (electionId, constituencyId) => {
  const res = await getContiturncyAPI(electionId, constituencyId);
  setConstituency(res.data);
  console.log(res.data,"contituenty");
};

  const getDataElection = async (electionId) => {
    const res = await getElectionAPI(electionId);
    setElection(res.data);
    console.log(res)
  };


  const getDataCandidate = async (electionId, constituencyId) => {
    const res = await getAllCandidateAPI(electionId, constituencyId);
    setCandidates(res.data);
    console.log(res.data, "candidate");
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
            ) : null}
          </div>
          <div>
            {constituency.length > 0 ? (
              <ConstituencyDetail
                key={constituency[0].hex}
                electionId={BigToInt(constituency[5].hex)}
                id={BigToInt(constituency[0].hex)}
                name={constituency[2]}
                constituencyCode={BigToInt(constituency[1].hex)}
                totalCandidate={BigToInt(constituency[4].hex)}
              />
            ) : null}
          </div>

          <div>
            {cid ? (
              <AddCandidate electionId={eId} constituencyId={cid} />
            ) : null}
          </div>

          <div>
            <section className=" py-1 ">
              <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
                  <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                      <h6 className="text-blueGray-700 text-xl font-bold">
                        All Candidate List
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
                          <th scope="col" className="px-6 py-3">
                            Candidate Id
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
                        {candidates
                          ? candidates.map((item, index) => {
                              return (
                                <CandidateTr
                    
                                  key={index}
                                  id={BigToInt(item[0].hex)}
                                  name={BigToInt(item[3])}
                                  partyName={item[4]}
                                  partyShortcutName={item[6]}
                                  partySymbol={item[7]}
                                  totalVotes={BigToInt(item[9].hex)}
                                  
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

export default AddCandidates;
