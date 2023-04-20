import Link from 'next/link';
import React from 'react'

const ContituencyTr = ({
  constituencyId,
  name,
  constituencyCode,
  totalVotes,
  stateCode,
  electionId,
  candidateCounter
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {constituencyId}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {constituencyCode}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {totalVotes}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {candidateCounter}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Link href={"/election/candidate"}>
          <a className="bg-accent text-white active:bg-accent font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
            Click
          </a>
        </Link>
      </td>
    </tr>
  );
};


export default ContituencyTr