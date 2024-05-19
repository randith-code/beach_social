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
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ContactUs = () => {
  const [isLoading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState("");
  const containerRef = useRef();
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

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
    <main ref={containerRef} className="h-screen">
      <Navbar />
      <ParticlesComponent id="partical_contact" />
      <div className="grid place-items-center w-full">
        <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />
        <h1 className="text-5xl 2xl:text-8xl font-Anton font-bold text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          Contact Us
        </h1>
      </div>

      <div className="values w-full flex justify-center items-center py-16 2xl:py-28">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row items-center">
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center items-center pt-8">
            <div className="relative w-full md:w-2/3">
              <img
                className="absolute top-0 rounded-3xl w-full aspect-square z-10"
                src="/contact_us.jpg"
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
                  <div className="group p-2 bg-cyan-400 rounded-lg hover:bg-black cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 2xl:w-6 2xl:h-6  group-hover:fill-cyan-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-Anton 2xl:text-xl">336688&ndash;9102</p>
                </span>

                <span className="flex gap-4 items-center">
                  <div className="group p-2 bg-cyan-400 rounded-lg hover:bg-black cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 2xl:w-6 2xl:h-6 group-hover:fill-cyan-400"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                  <p className="font-Anton 2xl:text-xl">atbeachsocial.com</p>
                </span>

                <span className="flex gap-4 items-center">
                  <div className="group p-2 bg-cyan-400 rounded-lg hover:bg-black cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-4 h-4 2xl:w-6 2xl:h-6  group-hover:fill-cyan-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="font-Anton 2xl:text-xl">
                    Coast of the Carolinas,United States
                  </p>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <>
        <div
          className={`relative contactus flex flex-col w-full opacity-100 z-100`}
        >
          <div className="grid place-items-center py-28">
            <div className="w-9/12 flex flex-col bg-black rounded-3xl py-10 2xl:py-28">
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

      <ContactUsPopUP open={popUpOpen} handelPopUpClose={handlePopUpClose} />
      <Footer handlePopUpOpen={handlePopUpOpen} />
    </main>
  );
};

export default ContactUs;
