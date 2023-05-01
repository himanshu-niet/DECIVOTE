import React, { useState } from 'react'
import Success from '../dialog/success';
import Failed from '../dialog/failed';
import Confirm from '../dialog/confirn';
import Loader from '../dialog/lodder';
import Link from 'next/link';

const Constituency_Card = ({
  constituencyId,
  name,
  totalVotes,
  candidateCounter,
  electionId,

}) => {
  return (
    <>
      <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500 text-center">
        <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
          <div>
            <h2 className="text-gray-900 text-lg font-bold mb-2">{name}</h2>

            <p className="text-sm font-semibold text-gray-400">
              Total Candidate:- {candidateCounter}
            </p>

            <p className="text-sm font-semibold text-gray-400">
              Total Votes:- {totalVotes}
            </p>
            <Link
              href={{
                pathname: "/vote/castVote",
                query: {
                  electionId: electionId,
                  constituencyId: constituencyId,
                  
                },
              }}
            >
              <button
                className=" text-sm mt-6 px-4 py-2 bg-green-400 text-white
            rounded-lg tracking-wider hover:bg-green-500 outline-none"
              >
                Choose Candidate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constituency_Card;