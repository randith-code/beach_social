"use client";
import { forwardRef, useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";
const Navbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const pathName = usePathname();

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <nav
      ref={ref}
      className="flex bg-inherit items-center justify-center w-full py-8"
    >
      <span className="flex items-center justify-between w-3/4">
        <img
          className="h-12 "
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
          <span className="fixed flex flex-col md:hidden w-full h-screen z-50 top-0 left-0 right-0 bottom-0 bg-transparent items-center justify-around">
            <span className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-4"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
            <span className="flex-1 flex flex-col font-Anton justify-around text-2xl">
              <a onClick={handleClose} href="/">
                Home
              </a>
              <a onClick={handleClose} href="/aboutus">
                About Us
              </a>
              <a onClick={handleClose} href="/services">
                Services
              </a>
              <a onClick={handleClose} href="/successstories">
                Success stories
              </a>
              <Link href="/contactus">
                <button
                  onClick={handleClose}
                  className="bg-black rounded-xl text-white px-3 py-1"
                >
                  Contact Us
                </button>
              </Link>
            </span>
          </span>
        ) : null}
        <span className="hidden md:flex gap-16 items-center font-medium justify-around md:text-xs lg:text-sm 2xl:base">
          <span className="flex items-center gap-6">
            <a
              className={
                pathName == "/" ? "text-cyan-400" : "hover:text-cyan-400"
              }
              href="/"
            >
              Home
            </a>
            <a
              className={
                pathName == "/aboutus" ? "text-cyan-400" : "hover:text-cyan-400"
              }
              href="/aboutus"
            >
              About Us
            </a>
            <div
              className="w-fit z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className={
                  pathName !== "/successstories" &&
                  pathName !== "/aboutus" &&
                  pathName !== "/" &&
                  pathName !== "/contactus"
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
                }
              >
                Services
              </p>
              {isDropdownVisible && <DropdownMenu className="absolute z-50" />}
            </div>
            <a
              className={
                pathName == "/successstories"
                  ? "text-cyan-400"
                  : "hover:text-cyan-400"
              }
              href="/successstories"
            >
              Success stories
            </a>
          </span>
          <Link href="/contactus">
            <button className="group hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop bg-black rounded-3xl text-white px-5 py-2">
              <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Contact Us
              </p>
            </button>
          </Link>
        </span>
      </span>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
