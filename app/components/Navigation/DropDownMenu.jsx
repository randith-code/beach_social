import Link from "next/link";

const DropdownMenu = ({ className }) => {
  return (
    <div
      className={`${className} bg-white absolute translate-y-16 z-100 rounded-md drop-shadow-md`}
    >
      <ul className="px-4">
        <Link href="/socialmediamanagement">
          <li className="py-2 w-fit text-xs">Social Media Management</li>
        </Link>
        <Link href="">
          <li className="py-2 w-fit text-xs">Copy writing</li>
        </Link>
        <Link href="">
          <li className="py-2 w-fit text-xs">Email Campaign</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
