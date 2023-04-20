import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

const AddVoter = () => {
     const formik_voter = useFormik({
       initialValues: {
         name: "",
         fatherName: "",
         age: 18,
         stateCode: "",
         address: "",
         constituencyCode: "",
       },
       onSubmit: (values) => {
         toast.success("Form submitted");
         console.log(values);
       },
       validationSchema: yup.object({
         name: yup.string().trim().required("Name is required"),
         fatherName: yup.string().trim().required("Father Name is required"),
         age: yup
           .number()
           .required("Please Enter your age")
           .min(18, "You must be at least 18 years"),

         stateCode: yup.string().trim().required("State is required"),
         address: yup.string().trim().required("District is required"),
         constituencyCode: yup
           .string()
           .trim()
           .required("Constituency is required"),
       }),
     });
  return (
    <section className=" py-1 ">
      <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Voter Registration
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
                      <div className="text-danger">{formik_voter.errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik_voter.values.fatherName}
                      onChange={formik_voter.handleChange}
                      onBlur={formik_voter.handleBlur}
                      name="fatherName"
                    />
                    {formik_voter.errors.fatherName && (
                      <div className="text-danger">
                        {formik_voter.errors.fatherName}
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
                      <div className="text-danger">{formik_voter.errors.age}</div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formik_voter.values.address}
                      onChange={formik_voter.handleChange}
                      onBlur={formik_voter.handleBlur}
                      name="address"
                    />
                    {formik_voter.errors.address && (
                      <div className="text-danger">{formik_voter.errors.address}</div>
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
                      onChange={formik_voter.handleChange}
                      onBlur={formik_voter.handleBlur}
                      name="stateCode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value={"1"}>Uttar Pradesh</option>
                      <option value={"2"}>m Pradesh</option>
                    </select>
                    {formik_voter.errors.stateCode && (
                      <div className="text-danger">
                        {formik_voter.errors.stateCode}
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
                      Select Constituency
                    </label>
                    <select
                      onChange={formik_voter.handleChange}
                      onBlur={formik_voter.handleBlur}
                      name="constituencyCode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value={"1"}>Uttar Pradesh</option>
                      <option value={"2"}>m Pradesh</option>
                    </select>
                    {formik_voter.errors.constituencyCode && (
                      <div className="text-danger">
                        {formik_voter.errors.constituencyCode}
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
}

export default AddVoter