import React from 'react'

const CandidateTr = ({id,
name,
partyName,
partyShortcutName,
partySymbol,
totalVotes}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {partyName}
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {partyShortcutName}
      </td>
      <td className="px-6 py-4">
        <img className="h-16" src={partySymbol} />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {totalVotes}
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        
      </td>
    </tr>
  );
}

export default CandidateTr