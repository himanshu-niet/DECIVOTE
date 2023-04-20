import React, { useState } from 'react'

const ConstituencyDetail = () => {
  const [show, setShow] = useState(false);

  return (
    <section className=" py-1 ">
      <div className="w-full lg:w-12/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Constituency Detail
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
          <div className={`overflow-x-auto p-3 ${show ? "" : "hidden"}`}>
            <table className="table-auto w-full">
              <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">Constituency Id</div>
                  </td>

                  <td className="p-2">
                    <div className="font-medium text-gray-800">1</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      Constituency Name
                    </div>
                  </td>

                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      Phoolpur
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">Constituency Code</div>
                  </td>

                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      256
                    </div>
                  </td>
                </tr>
               
             
                <tr>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">
                      Total Candidate
                    </div>
                  </td>

                  <td className="p-2">
                    <div className="font-medium text-gray-800">5</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstituencyDetail