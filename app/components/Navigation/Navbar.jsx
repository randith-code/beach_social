import { forwardRef, useState } from "react";
import Link from "next/link";

const Navbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <nav ref={ref} className="flex items-center justify-center w-full pt-4">
      <span className="flex items-center justify-between w-9/12">
        <img
          className="h-8 "
          src="http://www.beachsocial.leadmedia.lk/wp-content/uploads/2024/04/beach_social_logo.png"
          alt="beach social logo"
        />
        <span onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </span>
        {open ? (
          <span className="absolute flex flex-col md:hidden w-full h-screen z-50 top-0 left-0 right-0 bottom-0 bg-white items-center justify-around">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Services</a>
            <a href="">Success stories</a>
            <Link href="/contactus">
              <button className="bg-black rounded-xl text-white px-3 py-1">
                Contact Us
              </button>
            </Link>
          </span>
        ) : null}
        <span className="hidden md:flex w-6/12 items-center justify-around text-sm">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">Success stories</a>
          <Link href="/contactus">
            <button className="bg-black rounded-xl text-white px-3 py-1">
              Contact Us
            </button>
          </Link>
        </span>
      </span>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
