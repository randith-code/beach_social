"use client";
import { useState, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Scrollbar from "smooth-scrollbar";
import Link from "next/link";

import CustomNavbar from "../components/Navigation/CustomNavBar";
import Footer from "../components/Navigation/Footer";
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";
import ParticlesComponent from "../components/Hero section/Particle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const CaseStudy = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  const containerRef = useRef();

  const { contextSafe } = useGSAP(() => {
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

  const handleContactEnter = contextSafe(() => {
    gsap.to(".contactBar", {
      height: "1.5rem",
      duration: 0.4,
    });
  });

  const handleContactLeave = contextSafe(() => {
    gsap.to(".contactBar", {
      height: 0,
      duration: 0.4,
    });
  });
  return (
    <main ref={containerRef} className="h-screen">
      <CustomNavbar />
      <ParticlesComponent />
      <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />
      <div className="w-full flex justify-center">
        <div className="w-3/4">
          <div className="w-full flex py-28">
            <div className="w-1/2 flex flex-col gap-16">
              <span className="flex flex-col gap-2">
                <p className="font-semibold text-lg font-Roboto">Case Study</p>
                <h1 className="font-Anton text-6xl">OKI Scoop Shop & Donuts</h1>
              </span>
              <span className="flex flex-col gap-4">
                <h2 className="text-5xl font-Roboto">Services :</h2>
                <dl className="font-Anton text-xl flex flex-col gap-4">
                  <dt>Social Media Consulting</dt>
                  <dt>Social Media Management</dt>
                  <dt>Web Development</dt>
                </dl>
              </span>

              <button
                onClick={handlePopUpOpen}
                className="contact-button group bg-black rounded-3xl hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-white py-2 px-6 w-fit "
              >
                <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-xl">
                  Contact Us
                </p>
              </button>
            </div>

            <div className="w-1/2">
              <img
                className="w-full h-full"
                src="/case_study_1.png"
                alt="case study hero"
              />
            </div>
          </div>

          <div className="w-full flex gap-20 py-28">
            <div className="w-5/12">
              <img
                className="w-full h-full"
                src="/client_about_casestudy.png"
                alt="case_study_item_1"
              />
            </div>

            <div className="w-7/12 flex flex-col justify-center gap-8">
              <h1 className="font-Anton text-5xl">About Client</h1>
              <p>
                Founded in the vibrant heart of North carolina, Beach Social
                started with a simple vision: to bridge the gap between digital
                communication and genuine human connections. Inspired by the
                boundless spirit of the beach, where diverse paths meet and
                create unique patterns in the sand, we set out to craft a social
                media platform that captures this essence. Our journey began in
                2023, driven by a passion to redefine online interaction and
                make social media a more inclusive, engaging, and uplifting
                space.
              </p>
              <p>
                At Beach Social, our mission is simple to empower individuals
                and businesses alike to create meaningful relationships through
                our innovative social media solutions. We believe in the power
                of connection and the impact it can have on both personal growth
                and business success. Our platform is designed to not only
                provide the tools for effective communication but to also foster
                a community where every wave and whisper adds value.
              </p>
            </div>
          </div>

          <div className="w-full flex gap-20 py-28">
            <div className="w-1/2 flex flex-col justify-center gap-8">
              <h1 className="font-Anton text-5xl">Our Goal</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                in turpis quam. Pellentesque pretium, nisi quis pharetra porta,
                tellus arcu laoreet turpis, vitae sagittis erat dolor nec diam.
                In interdum augue mauris, non sodales mauris pharetra ut. Nunc
                ullamcorper augue a lorem pellentesque viverra. Donec neque
                quam, facilisis vitae mi eu, fermentum commodo elit. Quisque ac
                rutrum tortor, sit amet congue arcu. Morbi posuere augue et
                ipsum euismod facilisis. Maecenas congue, lacus nec rutrum
                dictum, velit arcu tincidunt est, nec sodales dui eros faucibus
                diam.
              </p>
            </div>

            <div className="w-1/2">
              <img src="case_study_2.png" alt="case_study_item_1" />
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="w-full flex bg-white overflow-hidden justify-center py-16 2xl:py-32">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-6">
          <span className="flex items-center justify-start md:text-xl">
            <h2 className="text-black text-xl md:text-2xl 2xl:text-4xl font-bold">
              Join our
            </h2>
            <h2 className="text-xl md:text-xl 2xl:text-4xl font-bold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp;Community
            </h2>
          </span>
          <h2 className="text-black w-3/4 font-medium text-sm 2xl:text-lg">
            Whether you&apos;re looking to grow your brand, expand your social
            network, or just find a fun and friendly place to express yourself,
            Beach Social is your go-to platform. Connect with us to stay updated
            on exciting features, community highlights, and more as we continue
            to make social media a positive force in the world.
          </h2>
          <Link href="/contactus">
            <span className="flex mt-12 gap-8 2xl:gap-16">
              <div className="w-fit relative">
                <h1
                  onMouseEnter={handleContactEnter}
                  onMouseLeave={handleContactLeave}
                  className="font-medium font-Anton text-black text-4xl md:text-6xl 2xl:text-8xl z-20 relative"
                >
                  Get in Touch with Us
                </h1>
                <div className="contactBar w-full h-0 rounded-xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop absolute bottom-0 left-0"></div>
              </div>
              <div className="rounded-full bg-black cursor-pointer md:-translate-y-1/2 grid place-items-center w-10 h-10 md:w-16 md:h-16 2xl:w-20 2xl:h-20 aspect-square">
                <img
                  className="w-1/3"
                  src="/side_arrow.svg"
                  alt="button icon"
                />
              </div>
            </span>
          </Link>
        </div>
      </div>

      <ContactUsPopUP open={popUpOpen} handelPopUpClose={handlePopUpClose} />
      <Footer handlePopUpOpen={handlePopUpOpen} />
    </main>
  );
};

export default CaseStudy;
