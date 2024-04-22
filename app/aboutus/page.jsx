"use client";
import { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import ListItem from "../components/Hero section/ListItem";
import ConatctUs from "../components/ContactUs/ContactUs";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutUs = () => {
  const [openContact, setOpenContact] = useState(false);

  const { contextSafe } = useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".personal-initial", {
        scale: 6,
        opacity: 0.4,
        display: "none",
        scrollTrigger: {
          trigger: ".personal-initial",
          toggleActions: "restart complete reverse reset",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.to(".personal-text-container", {
        opacity: 0,
        display: "none",
        duration: 0.4,
        scrollTrigger: {
          trigger: ".personal-text-container",
          toggleActions: "restart complete reverse reset",
          start: "top 20%",
        },
      });
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

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  return (
    <main className="bg-valuesBg">
      <Navbar />
      <div className="bg-valuesBg grid place-items-center w-full h-25vh">
        <h1 className="text-5xl 2xl:text-8xl font-Anton font-bold text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          About Us
        </h1>
      </div>
      <div className="values bg-white w-full flex justify-center items-center">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row items-center">
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center py-8">
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
          <div className="w-full md:w-1/2 flex items-center md:justify-end">
            <span className="flex flex-col justify-start gap-4 w-full mt-8">
              <p className="text-sm w-full 2xl:text-xl">
                Founded in the vibrant heart of [City/Region], Beach Social
                started with a simple vision: to bridge the gap between digital
                communication and genuine human connections. Inspired by the
                boundless spirit of the beach, where diverse paths meet and
                create unique patterns in the sand, we set out to craft a social
                media platform that captures this essence. Our journey began in
                [Year], driven by a passion to redefine online interaction and
                make social media a more inclusive, engaging, and uplifting
                space.
              </p>
              <p className="text-sm w-full 2xl:text-xl">
                At Beach Social, our mission is simple: to empower individuals
                and businesses alike to create meaningful relationships through
                our innovative social media solutions. We believe in the power
                of connection and the impact it can have on both personal growth
                and business success. Our platform is designed to not only
                provide the tools for effective communication but to also foster
                a community where every wave and whisper adds value.
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* personal stories */}
      <div className="w-full relative flex flex-col items-center overflow-x-hidden gap-8 py-12  bg-valuesBg">
        <span className="personal-text-container hidden absolute md:grid place-items-center w-full h-5/6 bg-lightBlue z-50">
          <h3 className="personal-initial font-Anton text-center text-4xl font-medium">
            Personal Story
          </h3>
        </span>
        <div className="srcoller-inner flex w-full gap-8 -translate-x-1/3">
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-1/4 md:w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
        </div>
        <div className="w-10/12 md:w-8/12 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-Anton font-medium 2xl:text-6xl">
            Personal Story
          </h3>
          <p className="font-medium text-xs md:text-base 2xl:text-xl">
            We value authenticity, community, and growth. We believe in telling
            genuine stories that resonate with both the heart and history of a
            business, fostering a sense of belonging among customers and
            strengthening community ties.
          </p>
        </div>
      </div>
      {/* your hook */}
      <div className="hook-container w-full flex justify-center py-8 2xl:my-20 md:max-h-60 bg-white z-40">
        <div className="w-10/12 md:w-8/12 flex flex-col md:flex-row gap-8">
          <div className="hook-element w-full md:w-1/2 flex flex-col gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                Your &quot;
              </h1>
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Hook
              </h1>
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-sm 2xl:text-xl">
              Where creativity meets strategy. Elevate your social presence with
              compelling content, engaging campaigns, and strategic maneuvers.
              Discover how we transform your unique hook into a magnetic force,
              capturing attention and fostering connections in the digital
              realm. Let your brand story shine with Beach Social.
            </p>
          </div>
          <div className="hook-element w-full md:w-1/2 flex flex-col md:overflow-y-scroll no-scrollbar gap-8">
            <ListItem
              item={
                "Elevate Your Social Game, Minimize Your Effort: We Handle the Digital Heavy Lifting."
              }
            />
            <ListItem
              item={
                "Social Media Success, Simplified: Targeted Strategies, Tangible Results."
              }
            />
            <ListItem
              item={
                "From Posts to Profits: We Craft Your Social Media Success, You Reap the Rewards"
              }
            />
            <ListItem
              item={
                "From Shoreline to Online: Crafting Digital Experiences as Memorable as a Day at the Beach."
              }
            />
            <ListItem
              item={
                "Your Business at the Beach, Amplified Online: We Navigate the Digital Currents for You."
              }
            />
            <ListItem
              item={
                "Seaside to Screenside: Crafting Your Beach Brand's Digital Journey."
              }
            />
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="w-full flex overflow-hidden justify-center">
        {openContact ? (
          <ConatctUs setOpenContact={setOpenContact} />
        ) : (
          <div className="contact-us w-10/12 md:w-8/12 flex flex-col gap-4 pb-8">
            <h4 className="font-semibold text-black w-full md:w-1/2 text-base md:text-lg">
              We love to help brands succeed. Let&apos;s Start a Winning Project
              Together.
            </h4>
            <span className="flex gap-8 2xl:gap-16">
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
              <div
                className="rounded-full bg-black cursor-pointer md:-translate-y-1/2 grid place-items-center w-10 h-10 md:w-16 md:h-16 2xl:w-20 2xl:h-20 aspect-square"
                onClick={handleOpenContact}
              >
                <img
                  className="w-1/3"
                  src="/side_arrow.svg"
                  alt="button icon"
                />
              </div>
            </span>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
