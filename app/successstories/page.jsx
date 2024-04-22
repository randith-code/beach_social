"use client";
import { useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import OurValuesItem from "../components/CardModules/OurValuesItem";
import StoryCard from "../components/CardModules/storycrad";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const SuccessStories = () => {
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
      gsap.to(".story-initial", {
        scale: 6,
        opacity: 0.4,
        display: "none",
        scrollTrigger: {
          trigger: ".story-initial",
          toggleActions: "restart complete reverse reset",
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.to(".initial-text-container", {
        opacity: 0,
        display: "none",
        duration: 0.4,
        scrollTrigger: {
          trigger: ".initial-text-container",
          toggleActions: "restart complete none reset",
          start: "top 10%",
        },
      });

      gsap.from(".story-title", {
        yPercent: "50",
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".story-title",
          toggleActions: "restart complete restart pause",
        },
      });

      gsap.from(".stories-line1", {
        yPercent: "25",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stories-line1",
          toggleActions: "restart complete restart pause",
          scrub: 1,
          end: "center center",
        },
      });
      gsap.from(".stories-line2", {
        yPercent: "25",
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stories-line2",
          toggleActions: "restart complete restart pause",
          scrub: 1,
          end: "center center",
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
    <main className="bg-lightBlue">
      <Navbar />
      <div className="w-full h-25vh bg-lightBlue grid place-items-center">
        <h1 className="text-5xl 2xl:text-8xl font-Anton font-bold text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          Social Media Management
        </h1>
      </div>
      {/* Elevate your online presence */}
      <div className="w-full flex justify-center bg-white py-10">
        <div className="w-3/4 flex flex-col gap-6">
          <span className="flex items-center text-4xl font-Anton">
            <h1>Elevate Your</h1>
            <h1 className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp;Online Presence
            </h1>
          </span>
          <p className="font-Anton">
            In today&apos;s digital landscape, maintaining an active and
            engaging social media presence is more crucial than ever. At Beach
            Social, we offer comprehensive Social Media Management services
            designed to amplify your brand&apos;s online footprint and connect
            with your audience more effectively.
          </p>
        </div>
      </div>
      {/* Our services */}
      <div className="hook-container w-full flex justify-center py-10 2xl:my-20 md:max-h-72 bg-white z-40">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row gap-8">
          <div className="hook-element w-full md:w-1/2 flex flex-col gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                Our &quot;
              </h1>
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Services
              </h1>
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-sm 2xl:text-xl">
              At Beach Social, our core values drive everything we do. We
              champion Community, embrace Innovation, uphold Integrity, and
              celebrate Inclusivity. These principles ensure our platform
              remains a vibrant, trusted, and inclusive space for all.
            </p>
          </div>
          <div className="hook-element w-full md:w-1/2 flex flex-col md:overflow-y-scroll no-scrollbar gap-8">
            <OurValuesItem
              item={"Community:"}
              description={
                "At Beach Social, our core values drive everything we do. We champion Community, embrace Innovation, uphold Integrity, and celebrate Inclusivity. These principles ensure our platform remains a vibrant, trusted, and inclusive space for all."
              }
            />
            <OurValuesItem
              item={"Innovation:"}
              description={
                "We continually push the boundaries of what social media can do, implementing cutting-edge technologies and creative strategies to enhance user experience."
              }
            />
            <OurValuesItem
              item={"Integrity:"}
              description={
                "We operate with transparency and honesty, valuing the trust that our users place in us to manage their online presence responsibly."
              }
            />
            <OurValuesItem
              item={"Inclusivity:"}
              description={
                "Beach Social is for everyone. We celebrate diversity and work to ensure that our platform is accessible, welcoming, and empowering for all."
              }
            />
          </div>
        </div>
      </div>
      {/* success stories */}
      <div className="success-story-container py-10 relative bg-white w-full z-40 flex justify-center">
        <span className="initial-text-container hidden absolute md:flex justify-center items-baseline w-full h-full bg-white z-50">
          <h3 className="story-initial font-Anton text-center text-4xl font-medium mt-60">
            Recent Works
          </h3>
        </span>
        <span className="w-10/12 md:w-9/12 flex flex-col">
          <h3 className="story-title font-Anton text-2xl md:text-4xl 2xl:text-6xl font-medium py-4 md:pt-8">
            Recent Works
          </h3>
          <div className="md:hidden grid grid-cols-2 gap-2 pb-4">
            <StoryCard
              img="/view_img.png"
              title={"Varnish Nightclub"}
              description={"Revolutionizing Nightlife Marketing Background"}
              isLarge={false}
            />
            <StoryCard
              img="/view_img.png"
              title={"Varnish Nightclub"}
              description={"Revolutionizing Nightlife Marketing Background"}
              isLarge={false}
            />
            <StoryCard
              img="/view_img.png"
              title={"Varnish Nightclub"}
              description={"Revolutionizing Nightlife Marketing Background"}
              isLarge={false}
            />
            <StoryCard
              img="/view_img.png"
              title={"Varnish Nightclub"}
              description={"Revolutionizing Nightlife Marketing Background"}
              isLarge={false}
            />
            <StoryCard
              img="/view_img.png"
              title={"Varnish Nightclub"}
              description={"Revolutionizing Nightlife Marketing Background"}
              isLarge={false}
            />
          </div>
          <div className="hidden md:flex flex-col gap-1 md:gap-6 py-8">
            <div className="stories-line1 flex justify-between gap-6">
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
            </div>
            <div className="stories-line2 flex justify-between gap-6">
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={true}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={true}
              />
            </div>
          </div>
        </span>
      </div>
      {/* contact us */}
      <div className="w-full flex overflow-hidden justify-center my-10">
        {openContact ? (
          <ConatctUs setOpenContact={setOpenContact} />
        ) : (
          <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-6">
            <span className="flex items-center justify-start md:text-xl">
              <h2 className="text-black text-base md:text-2xl font-bold">
                Join our
              </h2>
              <h2 className="text-base md:text-xl font-bold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                &nbsp;Community
              </h2>
            </span>
            <h2 className="text-black w-3/4 font-medium text-sm 2xl:text-base">
              Whether you&apos;re looking to grow your brand, expand your social
              network, or just find a fun and friendly place to express
              yourself, Beach Social is your go-to platform. Connect with us to
              stay updated on exciting features, community highlights, and more
              as we continue to make social media a positive force in the world.
            </h2>
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

export default SuccessStories;
