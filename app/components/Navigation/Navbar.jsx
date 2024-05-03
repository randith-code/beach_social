"use client";
import { forwardRef, useState } from "react";
import Link from "next/link";
import DropdownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";
const Navbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  const pathName = usePathname();

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOpen = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const hidden = "animate-fade-up hidden text-2xl";
  const visible = "block text-2xl animate-fade-down animate-once";

  return (
    <nav
      ref={ref}
      className="flex relative z-100 bg-inherit items-center justify-center w-full py-8"
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
              className="w-12 h-12"
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
              className="w-12 h-12"
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
          <span className="fixed flex flex-col bg-white md:hidden w-full h-screen z-50 top-0 left-0 right-0 bottom-0 bg-transparent items-center justify-around">
            <span className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 m-4"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
            <span className="flex-1 flex flex-col font-Anton gap-8 justify-center">
              <img src="/Logo color.svg" alt="logo" />
              <a className="text-4xl" onClick={handleClose} href="/">
                Home
              </a>
              <a className="text-4xl" onClick={handleClose} href="/aboutus">
                About Us
              </a>
              <div>
                <span
                  onClick={handleExpand}
                  className="flex items-center gap-6"
                >
                  <p className="text-4xl">Services</p>
                  {expand ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
                <span className={expand ? visible : hidden}>
                  <ul className="flex flex-col pt-4 gap-4">
                    <Link href="/">
                      <li>Social Media Management</li>
                    </Link>
                    <Link href="/">
                      <li>Social Media Management</li>
                    </Link>
                    <Link href="/">
                      <li>Social Media Management</li>
                    </Link>
                  </ul>
                </span>
              </div>
              <a
                className="text-4xl"
                onClick={handleClose}
                href="/successstories"
              >
                Success stories
              </a>
              <Link href="/contactus">
                <button
                  onClick={handleClose}
                  className="bg-black rounded-xl text-white px-3 py-1 text-4xl"
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
              className="w-fit flex cursor-pointer items-center gap-1 z-50"
              onClick={handleOpen}
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
              <span>
                {isDropdownVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </span>
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
