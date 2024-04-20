"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ConatctUs({ setOpenContact }) {
  const { contextSafe } = useGSAP(() => {
    gsap.from(".contactus", {
      opacity: 0.4,
      // yPercent: "100",
      duration: 0.6,
    });
  }, []);

  const handelClose = contextSafe(async () => {
    await gsap.to(".contactus", {
      opacity: 0,
      duration: 0.2,
    });
    setOpenContact(false);
  });
  return (
    <div className={`contactus flex flex-col w-full`}>
      <div className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop grid place-items-center h-screen">
        <div className="w-10/12 flex flex-col bg-black">
          <div className="w-full flex justify-end">
            <Image
              src="/close_button.png"
              onClick={handelClose}
              width={20}
              height={20}
              alt="close button"
              className="cursor-pointer m-2"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center flex-1">
            <div className="w-full md:w-1/2 md:pb-8 h-full grid place-items-center">
              <span className="w-8/12 flex flex-col gap-4">
                <img className="w-2/5" src="/footer_logo.png" alt="" />
                <span className="flex flex-col">
                  <h1 className="font-extrabold text-xl md:text-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                    SocialReach Nexus
                  </h1>
                  <h1 className="font-extrabold text-white text-xl md:text-3xl">
                    Let&apos;s Connect and Elevate Your Presence!
                  </h1>
                </span>
                <p className="font-light text-xs md:text-base text-white">
                  let&apos;s weave the threads of innovation, creativity, and
                  strategy to magnetize your social media presence. Our team is
                  here to turn your digital dreams into reality. Ready to make
                  waves in the social sphere? Contact us now, and let the social
                  magic begin!
                </p>
              </span>
            </div>
            <div className="w-full md:w-1/2 h-full grid place-items-center">
              <form
                className="flex flex-col w-9/12 gap-8 py-4 md:py-0"
                action=""
              >
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="email"
                  placeholder="Email address"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="tel"
                  placeholder="Phone Number"
                />
                <input
                  className="bg-transparent border-b-2 font-light border-white text-white outline-none"
                  type="tel"
                  placeholder="Phone Number"
                />
                <span className="flex justify-end gap-4">
                  <button
                    className="text-black bg-white px-4 rounded-xl"
                    type="reset"
                  >
                    Clear
                  </button>
                  <button
                    className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-black px-4 rounded-xl"
                    type="submit"
                  >
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
