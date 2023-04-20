import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


// import react icons
import { HiMenu } from 'react-icons/hi';

const AdminHeader = ({ navData }) => {
  const [header, setHeader] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener("scroll", () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header
          ? "bg-white px-3 py-3 rounded-md drop-shadow-primary"
          : "py-[40px]"
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* logo v1 */}

      <Link href={"/"}>
        <h1 className={`cursor-pointer text-3xl ml-2 font-semibold text-[#F3735F]`}>
          DeciVote
        </h1>
      </Link>

      {/* nav & button wrapper - initially hidden */}
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <nav className="flex items-center">
          <ul className="flex gap-[96px]">
            <li>
              <Link href="">
                <a
                  className={`text-primary cursor-pointer hover:text-accent-hover transition`}
                >
                  Manage Elections
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a
                  className={`text-primary cursor-pointer hover:text-accent-hover transition`}
                >
                  Manage Candidates
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a
                  className={`text-primary cursor-pointer hover:text-accent-hover transition`}
                >
                  Manage Voters
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* btn */}
      </div>

      {/* nav menu btn- hide on large screens */}
      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden cursor-pointer"
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </div>

      {/* nav mobile - hide on large screens */}
      <div
        className={`${
          navMobile ? "max-h-[154px]" : "max-h-0"
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl  transition-all`}
      >
        <nav className="bg-accent w-full p-4">
          {/* nav list */}
          <ul className="flex flex-col gap-y-6">
            <li>
              <Link href="/election">
                <a className="text-white hover:text-accent">
                  {" "}
                  Manage Elections
                </a>
              </Link>
            </li>
           
            <li>
              <Link href="">
                <a className="text-white hover:text-accent">Manage Voters</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
