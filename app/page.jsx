"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "./components/Hero section/Hero";
import StoryCard from "./components/CardModules/storycrad";
import ListItem from "./components/Hero section/ListItem";
import InsightCard from "./components/CardModules/InsightCard";
import Footer from "./components/Navigation/Footer";
import ConatctUs from "./components/ContactUs/ContactUs";
import useScrollPosition from "./customHooks/useScrollPosition";
import ConatctCard from "./components/ContactUs/ContactCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const partnersDesc =
    "We build strong client relationships based on trust and honesty. You can always count on us to have your back.";

  const containerRef = useRef();
  const hookListRef = useRef();
  const scrollPosition = useScrollPosition();

  const [openContact, setOpenContact] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
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

        gsap.to(".service-initial-text", {
          scale: 6,
          opacity: 0.4,
          display: "none",
          scrollTrigger: {
            trigger: ".service-initial-text",
            toggleActions: "restart complete reverse reset",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 2,
          },
        });

        gsap.to(".service-text-container", {
          opacity: 0,
          display: "none",
          duration: 0.4,
          scrollTrigger: {
            trigger: ".service-text-container",
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
        gsap.from(".stories-line3", {
          yPercent: "25",
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".stories-line3",
            toggleActions: "restart complete restart pause",
            scrub: 1,
            end: "center center",
          },
        });

        gsap.from(".partner-header", {
          yPercent: "100",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".partner-header",
            toggleActions: "restart complete restart pause",
          },
        });
        gsap.from(".partner-desc", {
          yPercent: "100",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".partner-desc",
            toggleActions: "restart complete restart pause",
          },
        });

        gsap.from(".services", {
          yPercent: "100",
          duration: 0.5,
          stagger: 1,
          scrollTrigger: {
            trigger: ".services",
            toggleActions: "restart complete restart pause",
            scrub: 1,
          },
        });

        gsap.from(".values", {
          xPercent: "-100",
          duration: 0.8,
          stagger: 1,
          scrollTrigger: {
            trigger: ".values",
            toggleActions: "restart complete restart pause",
            scrub: 1,
            end: "center center",
          },
        });

        gsap.to(".top-logos", {
          xPercent: "10",
          scrollTrigger: {
            trigger: ".top-logos",
            toggleActions: "restart pause restart pause",
            scrub: 1,
            start: "top bottom",
            end: "bottom top",
          },
        });
        gsap.to(".bottom-logos", {
          xPercent: "-10",
          scrollTrigger: {
            trigger: ".bottom-logos",
            toggleActions: "restart complete restart pause",
            scrub: 1,
            start: "top bottom",
            end: "bottom top",
          },
        });
        gsap.from(".hook-element", {
          yPercent: "30",
          duration: 0.6,
          scrollTrigger: {
            trigger: ".hook-container",
            toggleActions: "restart complete restart pause",
          },
        });
        gsap.from(".recent-insight", {
          yPercent: "25",
          duration: 0.4,
          scrollTrigger: {
            trigger: ".recent-insight",
            toggleActions: "restart complete restart pause",
            scrub: 1,
          },
        });
        gsap.to(".srcoller-inner", {
          xPercent: "20",
          scrollTrigger: {
            trigger: ".srcoller-inner",
            toggleActions: "restart pause restart pause",
            scrub: 1,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });
    },
    { scope: containerRef.current }
  );

  const [isHitTheBottom, setHitTheBottom] = useState(false);

  useEffect(() => {
    if (scrollPosition >= 99) {
      setHitTheBottom(true);
    } else {
      setHitTheBottom(false);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);

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
    <main
      ref={containerRef}
      className="flex relative overflow-x-hidden flex-col"
    >
      <Hero />
      {/* partners */}
      <div className="w-full flex flex-col gap-6 items-center mt-24 bg-white z-40">
        <span className="partner-header font-Anton flex">
          <h1 className="font-bold text-2xl md:text-4xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
            Friends
          </h1>
          <h1 className="font-bold text-2xl md:text-4xl 2xl:text-6xl">
            &nbsp; we have made along the way
          </h1>
        </span>
        <p className="partner-desc 2xl:text-xl text-xs md:text-sm font-medium w-1/2 md:w-2/6 text-center">
          {partnersDesc}
        </p>
        <div className="flex flex-col gap-12 mt-8 bg-white z-40">
          <div className="flex w-full overflow-x-hidden">
            <div className="top-logos flex gap-6 -translate-x-2/3 2xl:-translate-x-1/3">
              <img src="/aely.png" alt="partner company logo" />
              <img src="/camp.png" alt="partner company logo" />
              <img src="/graanted.png" alt="partner company logo" />
              <img src="/legato.png" alt="partner company logo" />
              <img src="/metric.png" alt="partner company logo" />
              <img src="/mint.png" alt="partner company logo" />
              <img src="/oax.png" alt="partner company logo" />
              <img src="/aely.png" alt="partner company logo" />
              <img src="/camp.png" alt="partner company logo" />
              <img src="/graanted.png" alt="partner company logo" />
              <img src="/legato.png" alt="partner company logo" />
              <img src="/metric.png" alt="partner company logo" />
              <img src="/mint.png" alt="partner company logo" />
              <img src="/oax.png" alt="partner company logo" />
            </div>
          </div>
          <div className="flex w-full overflow-x-hidden">
            <div className="bottom-logos flex gap-6">
              <img src="/overland.png" alt="partner company logo" />
              <img src="/sunrun.png" alt="partner company logo" />
              <img src="/sign.png" alt="partner company logo" />
              <img src="/screensight.png" alt="partner company logo" />
              <img src="/miller.png" alt="partner company logo" />
              <img src="/oax.png" alt="partner company logo" />
              <img src="/legato.png" alt="partner company logo" />
              <img src="/overland.png" alt="partner company logo" />
              <img src="/overland.png" alt="partner company logo" />
              <img src="/sunrun.png" alt="partner company logo" />
              <img src="/sign.png" alt="partner company logo" />
              <img src="/screensight.png" alt="partner company logo" />
              <img src="/miller.png" alt="partner company logo" />
              <img src="/oax.png" alt="partner company logo" />
              <img src="/legato.png" alt="partner company logo" />
              <img src="/overland.png" alt="partner company logo" />
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="relative flex flex-col h-fit py-8 md:py-0 md:h-screen font-Anton items-center gap-12 2xl:gap-20 justify-center bg-white z-40">
        <span className="hidden service-text-container absolute md:flex items-center justify-center w-full h-full bg-white z-50">
          <span className="service-initial-text flex items-center h-fit py-4">
            <h1 className="font-medium text-5xl 2xl:text-7xl">
              We&apos;ve got just what
            </h1>
            <h1 className="font-medium text-5xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp; you need.
            </h1>
          </span>
        </span>
        <span className="services flex">
          <h1 className="font-medium text-2xl md:text-5xl 2xl:text-7xl">
            We&apos;ve got just what
          </h1>
          <h1 className="font-medium text-2xl md:text-5xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
            &nbsp; you need.
          </h1>
        </span>
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4">
            <div className=" text-right flex-1">Copy Writing</div>
            <div className=" text-center flex justify-center items-center w-6 md:w-10">
              <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
            </div>
            <div className="text-left flex-1">Chat bots</div>
          </div>
          <div className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4">
            <div className=" text-right flex-1">Email Campaign</div>
            <div className=" text-center flex justify-center items-center w-6 md:w-10">
              <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
            </div>
            <div className="text-left flex-1">SMS Campaig</div>
          </div>
          <div className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4">
            <div className=" text-right flex-1">Event Promotion</div>
            <div className=" text-center flex justify-center items-center w-6 md:w-10">
              <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
            </div>
            <div className="text-left flex-1">Creative Design</div>
          </div>
          <div className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4">
            <div className=" text-right flex-1">Social Media Advertising</div>
            <div className=" text-center flex justify-center items-center w-6 md:w-10">
              <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
            </div>
            <div className="text-left flex-1">Social Media Consultingn</div>
          </div>
          <div className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4">
            <div className=" text-right flex-1">Social Media Management</div>
            <div className=" text-center flex justify-center items-center w-6 md:w-10">
              <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
            </div>
            <div className="text-left flex-1">Google adwords Campaign</div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="values bg-valuesBg w-full flex justify-center">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center md:justify-end">
            <span className="flex flex-col justify-start gap-4 w-10/12 mt-8">
              <h2 className="font-extrabold font-Anton text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Values
              </h2>
              <p className="font-medium font-Anton w-full md:w-10/12 2xl:text-xl">
                We value authenticity, community, and growth. We believe in
                telling genuine stories that resonate with both the heart and
                history of a business, fostering a sense of belonging among
                customers and strengthening community ties.
              </p>
              <button className="bg-black text-sm text-white rounded-3xl w-fit px-4 py-2 2xl:py-2 2xl:px-6">
                <p className="font-semibold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                  Get in Touch
                </p>
              </button>
            </span>
          </div>
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
        </div>
      </div>

      {/* success stories */}
      <div className="success-story-container py-10 relative bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop w-full z-40 flex justify-center">
        <span className="initial-text-container hidden absolute md:flex justify-center items-baseline w-full h-full bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop z-50">
          <h3 className="story-initial font-Anton text-center text-4xl font-medium mt-60">
            Success Stories
          </h3>
        </span>
        <span className="w-10/12 md:w-9/12 flex flex-col">
          <h3 className="story-title font-Anton text-2xl md:text-4xl 2xl:text-6xl font-medium py-4 md:pt-8">
            Success Stories
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
            <div className="stories-line3 flex justify-between gap-6">
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
          </div>
        </span>
      </div>

      {/* your hook */}
      <div className="hook-container w-full flex justify-center my-12 2xl:my-20 md:max-h-60 bg-white z-40">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row gap-8">
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
          <div
            ref={hookListRef}
            className="hook-element w-full md:w-1/2 flex flex-col md:overflow-y-scroll no-scrollbar gap-8"
          >
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

      {/* personal story */}
      <div className="w-full relative flex flex-col items-center overflow-x-hidden gap-8 py-12  bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop">
        <span className="personal-text-container hidden absolute md:grid place-items-center w-full h-5/6 bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop z-50">
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
        <div className="w-10/12 md:w-9/12 flex flex-col gap-4">
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

      {/* recent insight */}
      <div className="recent-insight w-full flex flex-col items-center pb-8 gap-8">
        <div className="w-10/12 md:w-9/12 flex flex-col gap-8">
          <span className="flex font-Anton mt-8 md:mt-0">
            <h1 className="font-medium text-2xl md:text-4xl 2xl:text-6xl">
              Recent
            </h1>
            <h1 className="font-medium text-2xl md:text-4xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp; insights
            </h1>
          </span>
          <div className="w-full flex flex-col">
            <span className="w-full flex flex-col md:flex-row gap-2">
              <InsightCard
                img={"/insight_3.png"}
                title={"A Day in the Life of a Social Media Manager"}
                description={
                  "Get an insider's look at the world of social media management. Follow a day in the life of a social media manager and uncover the strategies and tools that keep campaigns running smoothly."
                }
              />
              <InsightCard
                img={"/insight_2.png"}
                title={"Planning Your Social Media Success"}
                description={
                  "Unlock the secrets of effective content planning. Dive into the art of creating a content calendar that keeps your social media strategy on track and your audience engaged."
                }
              />
              <InsightCard
                img={"/insight_1.png"}
                title={"A Deep Dive into Social Media Surfing"}
                description={
                  "Explore the latest trends and strategies in the ever-evolving world of social media. Learn how to ride the digital waves with finesse and make a splash in your online presence."
                }
              />
            </span>
          </div>
        </div>
        <span className="w-1/2 hidden md:flex justify-center gap-4">
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
        </span>
        <hr className="w-9/12 h-1 bg-slate-200" />
      </div>

      {/* contact us */}
      <div className="w-full py-10 flex overflow-hidden justify-center">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-4 pb-8">
          <h4 className="font-semibold text-black w-full md:w-1/2 text-base md:text-lg">
            We love to help brands succeed. Let&apos;s Start a Winning Project
            Together.
          </h4>
          <Link href="/contactus">
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

      {isHitTheBottom ? (
        <div className="absolute bottom-0 left-0 w-full h-screen z-50 bg-valuesBg">
          <ConatctCard
            hideSection={setHitTheBottom}
            setOpenContact={setOpenContact}
          />
        </div>
      ) : null}

      {/* footer */}
      <Footer />
    </main>
  );
}
