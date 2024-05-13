"use client";
import { useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useFormik } from "formik";
import Scrollbar from "smooth-scrollbar";

import { sendMessage } from "@/app/api/contactForm";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import ParticlesComponent from "../components/Hero section/Particle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ContactUs = () => {
  const [isLoading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");
  const containerRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const scroller = containerRef.current;

    mm.add("(min-width: 768px)", () => {
      let bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.07,
        delegateTo: document,
      });

      bodyScrollBar.setPosition(0, 0);

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });

      bodyScrollBar.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: scroller });
    });
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
  });
  return (
    <main ref={containerRef} className="bg-lightBlue h-screen">
      <Navbar />
      <ParticlesComponent id="partical_contact" />
      <div className="grid place-items-center w-full h-25vh">
        <h1 className="text-5xl 2xl:text-8xl font-Anton font-bold text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          Contact Us
        </h1>
      </div>

      <div className="values bg-white w-full flex justify-center items-center py-16 2xl:py-20">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row items-center">
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center items-center pt-8">
            <div className="relative w-3/4 md:w-2/3">
              <img
                className="absolute top-0 w-full aspect-square z-10"
                src="/view_img.png"
                alt="into image"
              />
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop translate-x-4 -translate-y-4"></div>
            </div>
          </div>
          {/* description */}
          <div className="w-full md:w-1/2 flex items-center">
            <span className="flex flex-col justify-start gap-4 w-full mt-8">
              <span className="flex items-center text-4xl font-Anton">
                <h1>Get in touch with us</h1>
                {/* <h1 className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                  &nbsp;Team
                </h1> */}
              </span>
              <p className="text-sm w-full 2xl:text-xl">
                We&apos;re here to help you navigate the exciting world of
                social media. Whether you have questions about our services,
                need support for your existing account, or simply want to share
                your thoughts and feedback, we&apos;re all ears!
              </p>
              <span className="flex flex-col gap-6">
                <span className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <p>336688&ndash;9102</p>
                </span>

                <span className="flex gap-4 items-center">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <p>atbeachsocial.com</p>
                </span>

                <span className="flex gap-4 items-center">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p>Coast of the Carolinas,United States</p>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <>
        <div className={`contactus flex flex-col w-full`}>
          <div className="grid place-items-center py-28">
            <div className="w-9/12 flex flex-col bg-black py-10 2xl:py-28">
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
                <div className="flex flex-col gap-8 items-center flex-1">
                  <div className="w-full flex flex-col md:flex-row">
                    <span className="w-1/2 flex justify-center">
                      <span className="w-8/12">
                        <img className="w-2/5" src="/footer_logo.png" alt="" />
                      </span>
                    </span>
                  </div>
                  {/* contact form */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 md:pb-8 h-full grid place-items-center">
                      <span className="w-8/12 flex flex-col gap-4">
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
                          media presence. Our team is here to turn your digital
                          dreams into reality. Ready to make waves in the social
                          sphere? Contact us now, and let the social magic
                          begin!
                        </p>
                      </span>
                    </div>
                    <div className="w-full md:w-1/2 h-full grid place-items-center">
                      <form
                        className="flex flex-col w-9/12 gap-8 py-4 md:py-0"
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
                        <input
                          className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                          name="subject"
                          value={formik.values.subject}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Subject"
                        />
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
                            className="text-black bg-white px-6 py-1 rounded-2xl font-semibold"
                            type="reset"
                          >
                            Clear
                          </button>
                          <button
                            className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-black px-6 py-1 rounded-2xl font-semibold"
                            type="submit"
                          >
                            Submit
                          </button>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>

      <Footer />
    </main>
  );
};

export default ContactUs;
