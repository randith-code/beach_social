"use client";
import Link from "next/link";

const DropdownMenu = ({ className, setFormOpen }) => {
  return (
    <>
      <div
        className={`${className} bg-white absolute translate-y-16 2xl:translate-y-20 z-100 rounded-md drop-shadow-md`}
      >
        <ul className="px-4">
          <Link href="/socialmediamanagement">
            <li className="py-2 w-fit text-xs 2xl:text-base">
              Social Media Management
            </li>
          </Link>
          <li
            className="py-2 w-fit text-xs 2xl:text-base"
            onClick={setFormOpen}
          >
            Copy writing
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
