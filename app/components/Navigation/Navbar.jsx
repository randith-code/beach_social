"use client";
import { forwardRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownMenu from "./DropDownMenu";
import { useFormik } from "formik";
import { usePathname } from "next/navigation";

import Overlay from "../CardModules/Overlay";

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

  const [isLoading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");
  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await sendMessage(values);
        setMessage(res.data.message);
        setLoading(false);
        setSubmited(true);
      } catch (error) {
        setMessage("Something went wrong, Try again later");
        setLoading(false);
        setSubmited(true);
      } finally {
        setLoading(false);
      }
    },
  });

  const hidden = "animate-fade-up hidden text-2xl";
  const visible = "block text-2xl animate-fade-down animate-once";

  return (
    <>
      <nav
        ref={ref}
        className="flex relative z-100 bg-inherit items-center justify-center w-full py-8"
      >
        <span className="flex items-center justify-between w-3/4">
          <Link href={"/"}>
            <img
              className="h-12 2xl:h-16"
              src="http://www.beachsocial.leadmedia.lk/wp-content/uploads/2024/04/beach_social_logo.png"
              alt="beach social logo"
            />
          </Link>

          <span onClick={() => setOpen(!open)} className="lg:hidden">
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
            <span className="fixed flex flex-col bg-white lg:hidden w-full h-screen z-50 top-0 left-0 right-0 bottom-0 bg-transparent items-center justify-around">
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
                      <Link href="/socialmediamanagement">
                        <li>Social Media Management</li>
                      </Link>
                      <li>Other Services</li>
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
          <span className="hidden lg:flex gap-16 items-center font-medium justify-around md:text-xs lg:text-base 2xl:text-xl">
            <span className="flex items-center gap-6 2xl:gap-10">
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
                  pathName == "/aboutus"
                    ? "text-cyan-400"
                    : "hover:text-cyan-400"
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
                {isDropdownVisible && (
                  <DropdownMenu
                    className="absolute z-50"
                    setFormOpen={handleFormOpen}
                  />
                )}
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

      {formOpen ? (
        <Overlay className={"bg-backgroundBlur gird place-content-center"}>
          <>
            <div className={`contactus flex flex-col w-full`}>
              <div className="bg-backgroundBlur grid place-items-center h-screen">
                <div className="w-10/12 h-5/6 flex flex-col bg-black">
                  <div className="w-full flex justify-end">
                    <Image
                      src="/close_button.png"
                      onClick={() => setFormOpen(false)}
                      width={20}
                      height={20}
                      alt="close button"
                      className="cursor-pointer m-8"
                    />
                  </div>
                  {submited ? (
                    <div className="flex flex-col items-center py-16 justify-center flex-1">
                      <h1 className="text-center w-2/3 text-4xl text-white">
                        {message}!
                      </h1>
                      <button
                        onClick={() => {
                          setSubmited(false);
                          setMessage("");
                        }}
                        className="contact-button my-4 bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop rounded-3xl text-white py-2 px-6"
                      >
                        <p className="font-semibold bg-black inline-block text-transparent bg-clip-text">
                          Back
                        </p>
                      </button>
                    </div>
                  ) : isLoading ? (
                    <div className="flex justify-center items-center gap-12 py-16 flex-1">
                      <h1 className="text-center text-4xl text-white">
                        Sending
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="4rem"
                        height="4rem"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <circle
                            cx={12}
                            cy={2.5}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.14}
                          ></circle>
                          <circle
                            cx={16.75}
                            cy={3.77}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.29}
                          ></circle>
                          <circle
                            cx={20.23}
                            cy={7.25}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.43}
                          ></circle>
                          <circle
                            cx={21.5}
                            cy={12}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.57}
                          ></circle>
                          <circle
                            cx={20.23}
                            cy={16.75}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.71}
                          ></circle>
                          <circle
                            cx={16.75}
                            cy={20.23}
                            r={1.5}
                            fill="#2ED8EB"
                            opacity={0.86}
                          ></circle>
                          <circle
                            cx={12}
                            cy={21.5}
                            r={1.5}
                            fill="#2ED8EB"
                          ></circle>
                          <animateTransform
                            attributeName="transform"
                            calcMode="discrete"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                          ></animateTransform>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-center flex-1">
                      <div className="w-full md:w-1/2 md:pb-8 h-full grid place-items-center">
                        <span className="w-8/12 flex flex-col gap-4">
                          <img
                            className="w-2/5"
                            src="/footer_logo.png"
                            alt=""
                          />
                          <span className="flex flex-col">
                            <h1 className="font-extrabold text-xl md:text-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                              SocialReach Nexus
                            </h1>
                            <h1 className="font-extrabold text-white text-xl md:text-3xl">
                              Let&apos;s Connect and Elevate Your Presence!
                            </h1>
                          </span>
                          <p className="font-light text-xs md:text-base text-white">
                            let&apos;s weave the threads of innovation,
                            creativity, and strategy to magnetize your social
                            media presence. Our team is here to turn your
                            digital dreams into reality. Ready to make waves in
                            the social sphere? Contact us now, and let the
                            social magic begin!
                          </p>
                        </span>
                      </div>
                      <div className="w-full md:w-1/2 h-full grid place-items-center">
                        <form
                          className="flex flex-col w-8/12 gap-8 py-4 md:py-0"
                          action=""
                          onSubmit={formik.handleSubmit}
                        >
                          <input
                            className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Name"
                          />
                          <input
                            className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="email"
                            placeholder="Email address"
                          />
                          <select
                            className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                            name="subject"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            id="service_set"
                          >
                            <option
                              className="text-gray-400 bg-black"
                              value=""
                              disabled
                            >
                              Select a Service
                            </option>
                            <option className="bg-black" value="Copy Writing">
                              Copy Writing
                            </option>
                            <option className="bg-black" value="Web Designing">
                              Web Designing
                            </option>
                            <option className="bg-black" value="Email Campaign">
                              Email Campaign
                            </option>
                            <option className="bg-black" value="SMS Campaign">
                              SMS Campaign
                            </option>
                            <option
                              className="bg-black"
                              value="Event Promotion"
                            >
                              Event Promotion
                            </option>
                            <option
                              className="bg-black"
                              value="Creative Design"
                            >
                              Creative Design
                            </option>
                            <option
                              className="bg-black"
                              value="Social Media Advertising"
                            >
                              Social Media Advertising
                            </option>
                            value="Social Media Advertising"
                            <option
                              className="bg-black"
                              value="Social Media Consulting"
                            >
                              Social Media Consulting
                            </option>
                            <option
                              className="bg-black"
                              value="Social Media Consulting"
                            >
                              Social Media Management
                            </option>
                            <option
                              className="bg-black"
                              value="Google adwords Campaign"
                            >
                              Google adwords Campaign
                            </option>
                          </select>
                          <textarea
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            rows={4}
                            className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                            placeholder="Message"
                          />
                          <span className="flex justify-end gap-4">
                            <button
                              className="text-black bg-white px-6 py-1 font-bold rounded-2xl"
                              type="reset"
                            >
                              Clear
                            </button>
                            <button
                              className="bg-gradient-to-br from-gradiantLftBtm font-bold to-gradiantRghtTop text-black px-6 py-1 rounded-2xl"
                              type="submit"
                            >
                              Submit
                            </button>
                          </span>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        </Overlay>
      ) : null}
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
