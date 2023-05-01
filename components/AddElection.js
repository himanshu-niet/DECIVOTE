import React, { useState } from "react";
import { useFormik } from "formik";

import * as yup from "yup";
import { toast } from "react-toastify";
import { addElectionAPI } from "../apiClient";
import Loader from "./dialog/lodder";
import Success from "./dialog/success";
import Failed from "./dialog/failed";


const AddElection = () => {
 

  const [show, setShow] = useState(false);

  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [falild, setFalild] = useState(false);

  

  const formik = useFormik({
    initialValues: {
      name: "",
      stateCode: "",
      vStartTime: "",
      vEndTime: "",
      cStartTime: "",
      cEndTime: "",
    },
    onSubmit: async(values) => {

    try {
      setLoader(true);
      const res = await addElectionAPI(values);
      if (res.status==200) {
        setLoader(false);
        setSuccess(true)
      }
      else{
        setLoader(false);
        setFalild(true)
      }
    } catch (error) {
        setLoader(false);
        setFalild(true);
    }
      formik.resetForm()
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      stateCode: yup.string().trim().required("State is required"),
      vStartTime: yup.string().trim().required("Voting Start Time is required"),
      vEndTime: yup.string().trim().required("Voting End Time is required"),
      cStartTime: yup
        .string()
        .trim()
        .required("Candidate Reg Start Time is required"),
      cEndTime: yup
        .string()
        .trim()
        .required("Candidate Reg End Time is required"),
    }),
  });


   if (loader) return <Loader show={true} />;
   if (success) return <Success show={true} />;
   if (falild) return <Failed show={true} />;

  // if (electionMutation.isError) return <Failed  show={true} path={"election"}/>;

  return (
    <section className=" py-1 ">
      <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add New Election
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
          <div
            className={`flex-auto px-4 lg:px-10 py-10 pt-0 ${
              show ? "" : "hidden"
            }`}
          >
            <form onSubmit={formik.handleSubmit}>
              <div className=" mt-3 flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Election Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="name"
                    />
                    {formik.errors.name && (
                      <div className="text-danger">{formik.errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select State
                    </label>

                    <select
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="stateCode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value={"1"}>Uttar Pradesh</option>
                      <option value={"2"}>Madhya Pradesh</option>
                      <option value={"3"}>Bihar</option>
                      <option value={"4"}>Delhi</option>
                    </select>
                    {formik.errors.stateCode && (
                      <div className="text-danger">
                        {formik.errors.stateCode}
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
                      Candidate Registration Start Time
                    </label>
                    <input
                      type="datetime-local"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.cStartTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="cStartTime"
                    />
                    {formik.errors.cStartTime && (
                      <div className="text-danger">
                        {formik.errors.cStartTime}
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
                      Candidate Registration End Time
                    </label>
                    <input
                      type="datetime-local"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.cEndTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="cEndTime"
                      min={formik.values.cStartTime}
                    />
                    {formik.errors.cEndTime && (
                      <div className="text-danger">
                        {formik.errors.cEndTime}
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
                      Voting Start Time
                    </label>
                    <input
                      type="datetime-local"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.vStartTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="vStartTime"
                      min={formik.values.cEndTime}
                    />
                    {formik.errors.vStartTime && (
                      <div className="text-danger">
                        {formik.errors.vStartTime}
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
                      Voting End Time
                    </label>
                    <input
                      type="datetime-local"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.vEndTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="vEndTime"
                      min={formik.values.vStartTime}
                    />
                    {formik.errors.vEndTime && (
                      <div className="text-danger">
                        {formik.errors.vEndTime}
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
  );
};

export default AddElection;
