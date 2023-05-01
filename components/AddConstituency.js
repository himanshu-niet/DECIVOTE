import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { addConstituncyAPI } from "../apiClient";
import Loader from "./dialog/lodder";
  
const AddConstituency = ({ electionId }) => {
  const [show, setShow] = useState(false);
   
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      electionId: electionId,
      name: "",
      constituencyCode: "",
    },
    onSubmit: async(values) => {
      console.log(values)

      try {
        setLoader(true);
        const res = await addConstituncyAPI(values);
        if (res.status == 200) {
          setLoader(false);
          toast.success("Election Added.");
        } else {
          setLoader(false);
          toast.error("Election Not Added.");
        }
      } catch (error) {
        setLoader(false);
        toast.error("Election Not Added.");
      }
   
       
    
      formik.resetForm()
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      constituencyCode: yup
        .string()
        .trim()
        .required("Constituency is required"),
    }),
  });
    if (loader) return <Loader show={true} />;

  return (
    <section className=" py-1 ">
      <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Add New Constituency
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
                      Constituency Name
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
                       Constituency Code
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik.values.constituencyCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="constituencyCode"
                    />
                    {formik.errors.constituencyCode && (
                      <div className="text-danger">
                        {formik.errors.constituencyCode}
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

export default AddConstituency;
