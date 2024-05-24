"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFormik } from "formik";
import Link from "next/link";

import { sendMessage } from "@/app/api/contactForm";
import { useState } from "react";
import Overlay from "../CardModules/Overlay";

import footer_logo from "../../../public/footer_logo.png";

const ContactUsPopUP = ({ open, handelPopUpClose }) => {
  const { contextSafe } = useGSAP(() => {
    gsap.from(".contactus", {
      opacity: 0.4,
      duration: 0.6,
    });
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");

  const handelClose = contextSafe(async () => {
    setLoading(false);
    setSubmited(false);
    setMessage("");
    await gsap.to(".contactus", {
      opacity: 0,
      duration: 0.2,
    });
    handelPopUpClose();
  });

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
    onReset: (values) => {
      (values.email = ""),
        (values.name = ""),
        (values.message = ""),
        (values.subject = "");
    },
  });

  return open ? (
    <Overlay>
      <>
        <div className={`contactus flex flex-col w-full`}>
          <div className="bg-backgroundBlur grid place-items-center h-screen">
            <div className="w-10/12 h-fit md:min-h-[90vh] pb-2 flex flex-col bg-black rounded-3xl">
              <div className="w-full flex justify-end">
                <div className="relative m-4 md:m-6 w-3 md:w-5 aspect-square">
                  <Image
                    src="/close_button.png"
                    onClick={handelClose}
                    fill
                    alt="close button"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {submited ? (
                <div className="flex flex-col items-center py-16 justify-center flex-1">
                  <h1 className="text-center w-2/3 text-4xl text-white">
                    {message}!
                  </h1>
                  <div className="flex gap-8">
                    <Link href="/">
                      <button
                        onClick={() => {
                          setSubmited(false);
                          setMessage("");
                        }}
                        className="contact-button my-4 bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop rounded-3xl text-white py-2 px-6"
                      >
                        <p className="font-semibold bg-black inline-block text-transparent bg-clip-text">
                          Back to Home Page
                        </p>
                      </button>
                    </Link>
                    <a href="tel:3366889102">
                      <button className="contact-button my-4 bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop rounded-3xl text-white py-2 px-6">
                        <p className="font-semibold bg-black inline-block text-transparent bg-clip-text">
                          Call Us
                        </p>
                      </button>
                    </a>
                  </div>
                </div>
              ) : isLoading ? (
                <div className="flex justify-center items-center gap-12 py-16 flex-1">
                  <h1 className="text-center text-4xl text-white">Sending</h1>
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
                      <circle cx={12} cy={21.5} r={1.5} fill="#2ED8EB"></circle>
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
                      <Image
                        className="w-1/2 md:w-3/5 lg:w-2/5"
                        src={footer_logo}
                        alt="footer log"
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
                        let&apos;s weave the threads of innovation, creativity,
                        and strategy to magnetize your social media presence.
                        Our team is here to turn your digital dreams into
                        reality. Ready to make waves in the social sphere?
                        Contact us now, and let the social magic begin!
                      </p>
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 h-full grid place-items-center">
                    <form
                      className="flex flex-col w-8/12 text-xs gap-8 py-4 md:py-0"
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
                        <option className="bg-black" value="Event Promotion">
                          Event Promotion
                        </option>
                        <option className="bg-black" value="Creative Design">
                          Creative Design
                        </option>
                        <option
                          className="bg-black"
                          value="Social Media Advertising"
                        >
                          Social Media Advertising
                        </option>
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
                      {/* <input
                        className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        type="text"
                        placeholder="Subject"
                      /> */}
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
                          onClick={formik.handleReset}
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
  ) : null;
};

export default ContactUsPopUP;
