import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {  fadeInDown } from "../variants";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Loader from "../components/voteing/lodder";
import Success from "../components/voteing/success";
import Failed from "../components/voteing/failed";
import { castVotefinal } from "../apiClient";

const SignUp = () => {

const router = useRouter();
  const [eId, setElectionId] = useState("");

  const [conId, setCon] = useState("");

  const [canId, setCan] = useState("");


  const [header, setHeader] = useState(false);

   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);
   const [falild, setFalild] = useState(false);


  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

   const formik_voter = useFormik({
     initialValues: {
      voterId:"",
       name: "",
       age: 0,
       
       
     },
     onSubmit: async(values) => {
      
try {
      setLoading(true);
      console.log(values,"==========================")
       const res = await castVotefinal(2, 0, 2, values.voterId);

      if (res.status==200) {
        setLoading(false);
        setSuccess(true)
      }
      else{
        setLoading(false);
        setFalild(true)
      }
    } catch (error) {
        setLoading(false);
        setFalild(true);
    }
      formik.resetForm()
   

       console.log(values);
     },
     validationSchema: yup.object({
       name: yup.string().trim().required("Name is required"),
       voterId: yup.number().required("Voter is required"),
       age: yup
         .number()
         .required("Please Enter your age")
         .min(18, "You must be at least 18 years"),

     }),
   });


 useEffect(() => {
   if (!router.isReady) return;
   const electionId = router.query.electionId;
   const constituencyId = router.query.constituencyId;
   const candidateId = router.query.candidateId;

   setElectionId(electionId)
   setCan(candidateId)
   setCon(constituencyId)
   

 }, [router.isReady]);

 const castVote = async (electionId, constituencyId, candidateId, voterId) => {
   try {
     const res = await castVotefinal(
       electionId,
       constituencyId,
       candidateId,
       voterId
     );

     if (res.status == 200) {
       setLoading(false);
       setSuccess(true);
     } else {
       setLoading(false);
       setFalild(true);
     }
   } catch (error) {
     setLoading(false);
     setFalild(true);
   }
 };

 if (loading) return <Loader show={true} />;
 if (success) return <Success show={true} />;
 if (falild) return <Failed show={true} />;

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
              <h1
                className={` cursor-pointer text-3xl ml-2 font-semibold text-[#F3735F]`}
              >
                DeciVote
              </h1>
            </Link>
          </header>
        </motion.div>

        <div className="pt-[8rem] px-[5rem] ">
          <section className=" py-1 ">
            <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      Voter Details
                    </h6>
                  </div>
                </div>
                <div className={`flex-auto px-4 lg:px-10 py-10 pt-0`}>
                  <form onSubmit={formik_voter.handleSubmit}>
                    <div className=" mt-3 flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formik_voter.values.name}
                            onChange={formik_voter.handleChange}
                            onBlur={formik_voter.handleBlur}
                            name="name"
                          />
                          {formik_voter.errors.name && (
                            <div className="text-danger">
                              {formik_voter.errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Voter Number
                          </label>
                          <input
                            type="number"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formik_voter.values.voterId}
                            onChange={formik_voter.handleChange}
                            onBlur={formik_voter.handleBlur}
                            name="voterId"
                          />
                          {formik_voter.errors.voterId && (
                            <div className="text-danger">
                              {formik_voter.errors.voterId}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Age
                          </label>
                          <input
                            type="number"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={formik_voter.values.age}
                            onChange={formik_voter.handleChange}
                            onBlur={formik_voter.handleBlur}
                            name="age"
                          />
                          {formik_voter.errors.age && (
                            <div className="text-danger">
                              {formik_voter.errors.age}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex  mt-5 justify-center">
                      <div className="">
                        <button
                          className="bg-accent text-white active:bg-accent font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};



export default SignUp;
