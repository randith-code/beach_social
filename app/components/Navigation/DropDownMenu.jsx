import Link from "next/link";

const DropdownMenu = ({ className }) => {
  return (
    <div
      className={`${className} bg-white absolute translate-y-16 2xl:translate-y-20 z-100 rounded-md drop-shadow-md`}
    >
      <ul className="px-4">
        <Link href="/socialmediamanagement">
          <li className="py-2 w-fit text-xs 2xl:text-base">
            Social Media Management
          </li>
        </Link>
        <Link href="/servicedetails">
          <li className="py-2 w-fit text-xs 2xl:text-base">Copy writing</li>
        </Link>
        <Link href="">
          <li className="py-2 w-fit text-xs 2xl:text-base">Email Campaign</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
