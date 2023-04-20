import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ElectionTr = ({
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
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {id}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {"Uttar Pradesh"}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {votingStartTime}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {votingEndTime}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {candidateRegistrationStartTime}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {candidateRegistrationEndTime}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {totalVotes}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {constituencyCounter}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <Link href={"/election/constituencies"}>
          <a className="bg-accent text-white active:bg-accent font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
            Click
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default ElectionTr

         