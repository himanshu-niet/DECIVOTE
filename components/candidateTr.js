import React from 'react'

const CandidateTr = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="h-16" src="./images/testimonials/avatar1.png" />
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Arvind
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        AAP
      </td>
      <td className="px-6 py-4">
        <img className="h-16" src="./images/testimonials/avatar1.png" />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        1000
      </td>

      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        90%
      </td>
    </tr>
  );
}

export default CandidateTr