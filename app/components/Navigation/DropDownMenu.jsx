import Link from "next/link";

const DropdownMenu = ({ className }) => {
  return (
    <div
      className={`${className} bg-white -translate-x-1/4 z-100 rounded-md drop-shadow-md`}
    >
      <ul>
        <Link href="/socialmediamanagement">
          <li className="py-2 px-4 w-fit text-xs">Social Media Management</li>
        </Link>
      </ul>
    </div>
  );
};

export default DropdownMenu;
