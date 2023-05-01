import Link from 'next/link';
import React from 'react'

const Election_Card = ({
  id,
  name,
  votingStartTime,
  votingEndTime,
  candidateRegistrationStartTime,
  candidateRegistrationEndTime,
  totalVotes,
  stateCode,
  constituencyCounter,
 
}) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500 text-center">
      <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
        <div>
          <h2 className="text-gray-900 text-lg font-bold mb-2">{name}</h2>

          <p className="text-sm font-semibold text-gray-400">
            Voting Start:- {votingStartTime}
          </p>
          <p className="text-sm font-semibold text-gray-400">
            Voting End:- {votingEndTime}
          </p>
          <p className="text-sm font-semibold text-gray-400">
            Total Constituency:- {constituencyCounter}
          </p>
          <p className="text-sm font-semibold text-gray-400">
            Total Votes:- {totalVotes}
          </p>
          <Link
            href={{
              pathname: "/vote/const",
              query: { electionId: id },
            }}
          >
            <button
              className=" text-sm mt-6 px-4 py-2 bg-green-400 text-white
            rounded-lg tracking-wider hover:bg-green-500 outline-none"
            >
              Choose Constituency
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Election_Card