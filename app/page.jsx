"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import Hero from "./components/Hero section/Hero";
import StoryCard from "./components/CardModules/storycrad";
import ListItem from "./components/Hero section/ListItem";
import Footer from "./components/Navigation/Footer";
import ConatctCard from "./components/ContactUs/ContactCard";
import ContactUsPopUP from "./components/ContactUs/ContactUsPopUp";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";
import Overlay from "./components/CardModules/Overlay";
import InsightContainer from "./components/LayoutComponents/InsightContainer";
import {
  getInsightPosts,
  getSuccessStoryPosts,
  getHomeContent,
} from "./api/posts";
import {
  splitString,
  pairServices,
  splitStringIntoParts,
} from "./utils/utilityFunctions/stringFormat";

import logo_1 from "../public/oki.svg";
import logo_2 from "../public//varnish.svg";
import logo_3 from "../public/bbq.svg";
import logo_4 from "../public/palmroom.svg";
import logo_5 from "../public/up_up.svg";
import logo_6 from "../public/projectx.svg";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef();

  const [openContact, setOpenContact] = useState(false);
  const [isHitTheBottom, setHitTheBottom] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [homeContent, setHomeContent] = useState([]);

  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const scroller = containerRef.current;

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

      mm.add("(min-width: 768px)", () => {
        let bodyScrollBar = Scrollbar.init(scroller, {
          damping: 0.07,
          delegateTo: document,
        });

        bodyScrollBar.setPosition(0, 0);

        bodyScrollBar.addListener((status) => {
          if (status.limit.y === status.offset.y) {
            setHitTheBottom(true);
          } else {
            setHitTheBottom(false);
          }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);
        ScrollTrigger.defaults({ scroller: scroller });

        ScrollTrigger.scrollerProxy(scroller, {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          },
        });

        gsap.to(".service-initial-text", {
          scale: 6,
          opacity: 0,
          display: "none",
          scrollTrigger: {
            trigger: ".service-initial-text",
            toggleActions: "restart complete none reset",
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
            toggleActions: "restart complete none reset",
            start: "top 20%",
          },
        });

        gsap.to(".story-initial", {
          scale: 6,
          opacity: 0,
          display: "none",
          scrollTrigger: {
            trigger: ".story-initial",
            toggleActions: "restart complete reverse reset",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 2,
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
          // opacity: 0.4,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".service",
            toggleActions: "restart complete none pause",
            scrub: 1,
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
        gsap.from(".recent-insight", {
          yPercent: "5",
          duration: 0.4,
          scrollTrigger: {
            trigger: ".recent-insight",
            toggleActions: "restart complete restart pause",
            scrub: 1,
          },
        });

        gsap.to(".hook-inner-container", {
          scrollTrigger: {
            trigger: ".hook-container",
            pin: ".hook-title-section",
            toggleActions: "restart reverse none pause",
            scrub: 1,
            start: "top top",
            end: () =>
              `bottom +=${
                document.querySelector(".hook-title-section").offsetHeight + 112
              }`,
          },
        });
      });
    },
    { scope: containerRef.current }
  );

  const [insightContent, setInsightContent] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [partnersTitle, setPartnersTitle] = useState([]);
  const [pairedServices, setPairedSrvices] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [serviceTitle, setServiceTitle] = useState([]);
  const [yourStoryTitle, setYourStoryTitle] = useState([]);
  const [insightTitle, setInsightTitle] = useState([]);

  const handleDataFetch = async () => {
    try {
      const res = await getInsightPosts();
      const resStory = await getSuccessStoryPosts();
      const resHome = await getHomeContent();
      setSuccessStories(resStory.data);
      setInsightContent(res.data);
      setHomeContent(resHome.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  useEffect(() => {
    handleDataFetch();
  }, []);

  useEffect(() => {
    if (homeContent.acf) {
      setPartnersTitle(splitString(homeContent.acf.partners_title));
      setPairedSrvices(pairServices(homeContent.acf.services));
      setItemList(pairServices(homeContent.acf.story_items));
      setServiceTitle(splitStringIntoParts(homeContent.acf.service_title, 2));
      setYourStoryTitle(
        splitStringIntoParts(homeContent.acf.your_story_title, 1)
      );
      setInsightTitle(
        splitStringIntoParts(homeContent.acf.recent_insight_title, 1)
      );
    }
  }, [homeContent]);

  return (
    <main
      id="main-container"
      ref={containerRef}
      className="flex relative overflow-x-hidden flex-col h-screen"
    >
      <Hero />
      {/* partners */}
      <div className="w-full flex flex-col gap-6 items-center py-16 md:py-32 bg-white z-40">
        <span className="partner-header font-Anton flex">
          <h1 className="font-bold text-2xl md:text-5xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
            {partnersTitle ? partnersTitle[0] : `Friends`}
          </h1>
          <h1 className="font-bold text-2xl md:text-5xl 2xl:text-6xl">
            &nbsp;{" "}
            {partnersTitle ? partnersTitle[1] : `we have made along the way`}
          </h1>
        </span>
        <p className="partner-desc 2xl:text-xl text-xs md:text-sm font-medium w-1/2 md:w-2/6 text-center">
          {homeContent.acf
            ? homeContent.acf.partners_description
            : `We build strong client relationships based on trust and honesty. You can always count on us to have your back.`}
        </p>
        <div className="flex flex-col gap-8 md:gap-14 mt-8 bg-white z-40">
          <div className="flex w-full gap-10 overflow-x-scroll no-scrollbar md:overflow-x-hidden">
            <div className="top-logos flex gap-6 -translate-x-2/3 2xl:-translate-x-1/4">
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
            </div>
          </div>
          <div className="flex w-full overflow-x-scroll no-scrollbar md:overflow-x-hidden">
            <div className="bottom-logos flex md:gap-10">
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_1}
                alt="partner company logo"
              />
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_2}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_3}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_4}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_5}
                alt="partner company logo"
              />{" "}
              <Image
                className="h-12 md:h-28 aspect-auto"
                src={logo_6}
                alt="partner company logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="service-main-container relative flex flex-col h-fit py-8 md:py-0 md:h-screen font-Anton items-center gap-12 2xl:gap-20 justify-center bg-white z-40">
        <span className="hidden service-text-container absolute md:flex items-start justify-center w-full h-full bg-white z-50">
          <span className="service-initial-text flex items-center h-fit py-16">
            <h1 className="font-medium text-5xl 2xl:text-7xl">
              {homeContent
                ? `${serviceTitle[0]} \u00A0`
                : `We&apos;ve got just what`}
            </h1>
            <h1 className="font-medium text-5xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              {homeContent ? serviceTitle[1] : `&nbsp; you need.`}
            </h1>
          </span>
        </span>
        <span className="services flex">
          <h1 className="font-medium text-2xl md:text-5xl 2xl:text-7xl">
            {homeContent
              ? `${serviceTitle[0]} \u00A0`
              : `We&apos;ve got just what`}
          </h1>
          <h1 className="font-medium text-2xl md:text-5xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
            {homeContent ? serviceTitle[1] : `&nbsp; you need.`}
          </h1>
        </span>
        <div className="service-container flex flex-col gap-8 items-center w-full">
          {homeContent.acf
            ? pairedServices.map((servicePair, index) => (
                <div
                  key={index}
                  className="services flex justify-center items-center w-full font-normal text-xl md:text-4xl 2xl:text-6xl gap-4"
                >
                  <div className="text-right flex-1">{servicePair[0]}</div>
                  <div className="text-center flex justify-center items-center w-6 md:w-10">
                    <hr className="h-1 md:h-1.5 w-full bg-black rounded-lg" />
                  </div>
                  <div className="text-left flex-1">{servicePair[1]}</div>
                </div>
              ))
            : null}

          <button
            onClick={handlePopUpOpen}
            className="contact-button group bg-black rounded-3xl hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-white lg:mb-16 py-2 px-8  2xl:mt-16"
          >
            <p className="font-semibold font-Roboto group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-xl">
              Learn more
            </p>
          </button>
        </div>
      </div>

      {/* success stories */}
      <div className="success-story-container py-16 relative bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop w-full z-40 flex justify-center">
        <span className="initial-text-container hidden absolute md:flex justify-center items-baseline w-full h-full bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop z-50">
          <h3 className="story-initial font-Anton text-center text-4xl font-medium mt-60">
            {homeContent.acf ? homeContent.acf.success_story_title : null}
          </h3>
        </span>
        <span className="w-10/12 md:w-9/12 flex flex-col">
          <h3 className="story-title font-Anton text-2xl md:text-5xl 2xl:text-6xl font-medium py-4 md:pt-8">
            {homeContent.acf ? homeContent.acf.success_story_title : null}
          </h3>
          <div className="md:hidden grid grid-cols-2 gap-2 pb-4">
            {successStories
              ? successStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    img={story.acf.casestudy_hero}
                    title={story.acf.project_title}
                    description={story.acf.card_title}
                    isLarge={false}
                    about_client={story.acf.about_client}
                    about_client_image={story.acf.about_client_image}
                    casestudy_hero={story.acf.casestudy_hero}
                    our_goal={story.acf.our_goal}
                    our_goal_image={story.acf.our_goal_image}
                    project_title={story.acf.project_title}
                    service={story.acf.service}
                  />
                ))
              : null}
          </div>
          <div className="hidden md:flex flex-col gap-1 md:gap-6 py-8">
            <div className="stories-line1 flex justify-between gap-6">
              {successStories[0] ? (
                <StoryCard
                  img={successStories[0].acf.casestudy_hero}
                  title={successStories[0].acf.project_title}
                  description={successStories[0].acf.card_title}
                  isLarge={false}
                  about_client={successStories[0].acf.about_client}
                  about_client_image={successStories[0].acf.about_client_image}
                  casestudy_hero={successStories[0].acf.casestudy_hero}
                  our_goal={successStories[0].acf.our_goal}
                  our_goal_image={successStories[0].acf.our_goal_image}
                  project_title={successStories[0].acf.project_title}
                  service={successStories[0].acf.service}
                />
              ) : null}
              {successStories[1] ? (
                <StoryCard
                  img={successStories[1].acf.casestudy_hero}
                  title={successStories[1].acf.project_title}
                  description={successStories[1].acf.card_title}
                  isLarge={false}
                  about_client={successStories[1].acf.about_client}
                  about_client_image={successStories[1].acf.about_client_image}
                  casestudy_hero={successStories[1].acf.casestudy_hero}
                  our_goal={successStories[1].acf.our_goal}
                  our_goal_image={successStories[1].acf.our_goal_image}
                  project_title={successStories[1].acf.project_title}
                  service={successStories[1].acf.service}
                />
              ) : null}
              {successStories[2] ? (
                <StoryCard
                  img={successStories[2].acf.casestudy_hero}
                  title={successStories[2].acf.project_title}
                  description={successStories[2].acf.card_title}
                  isLarge={false}
                  about_client={successStories[2].acf.about_client}
                  about_client_image={successStories[2].acf.about_client_image}
                  casestudy_hero={successStories[2].acf.casestudy_hero}
                  our_goal={successStories[2].acf.our_goal}
                  our_goal_image={successStories[2].acf.our_goal_image}
                  project_title={successStories[2].acf.project_title}
                  service={successStories[2].acf.service}
                />
              ) : null}
            </div>
            <div className="stories-line2 flex justify-between gap-6">
              {successStories[3] ? (
                <StoryCard
                  img={successStories[3].acf.casestudy_hero}
                  title={successStories[3].acf.project_title}
                  description={successStories[3].acf.card_title}
                  isLarge={true}
                  about_client={successStories[3].acf.about_client}
                  about_client_image={successStories[3].acf.about_client_image}
                  casestudy_hero={successStories[3].acf.casestudy_hero}
                  our_goal={successStories[3].acf.our_goal}
                  our_goal_image={successStories[3].acf.our_goal_image}
                  project_title={successStories[3].acf.project_title}
                  service={successStories[3].acf.service}
                />
              ) : null}
              {successStories[4] ? (
                <StoryCard
                  img={successStories[4].acf.casestudy_hero}
                  title={successStories[4].acf.project_title}
                  description={successStories[4].acf.card_title}
                  isLarge={true}
                  about_client={successStories[4].acf.about_client}
                  about_client_image={successStories[4].acf.about_client_image}
                  casestudy_hero={successStories[4].acf.casestudy_hero}
                  our_goal={successStories[4].acf.our_goal}
                  our_goal_image={successStories[4].acf.our_goal_image}
                  project_title={successStories[4].acf.project_title}
                  service={successStories[4].acf.service}
                />
              ) : null}
            </div>
            <div className="stories-line3 flex justify-between gap-6">
              {successStories[5] ? (
                <StoryCard
                  img={successStories[5].acf.casestudy_hero}
                  title={successStories[5].acf.project_title}
                  description={successStories[5].acf.card_title}
                  isLarge={false}
                  about_client={successStories[5].acf.about_client}
                  about_client_image={successStories[5].acf.about_client_image}
                  casestudy_hero={successStories[5].acf.casestudy_hero}
                  our_goal={successStories[5].acf.our_goal}
                  our_goal_image={successStories[5].acf.our_goal_image}
                  project_title={successStories[5].acf.project_title}
                  service={successStories[5].acf.service}
                />
              ) : null}
              {successStories[6] ? (
                <StoryCard
                  img={successStories[6].acf.casestudy_hero}
                  title={successStories[6].acf.project_title}
                  description={successStories[6].acf.card_title}
                  isLarge={false}
                  about_client={successStories[6].acf.about_client}
                  about_client_image={successStories[6].acf.about_client_image}
                  casestudy_hero={successStories[6].acf.casestudy_hero}
                  our_goal={successStories[6].acf.our_goal}
                  our_goal_image={successStories[6].acf.our_goal_image}
                  project_title={successStories[6].acf.project_title}
                  service={successStories[6].acf.service}
                />
              ) : null}
              {successStories[7] ? (
                <StoryCard
                  img={successStories[7].acf.casestudy_hero}
                  title={successStories[7].acf.project_title}
                  description={successStories[7].acf.card_title}
                  isLarge={false}
                  about_client={successStories[7].acf.about_client}
                  about_client_image={successStories[7].acf.about_client_image}
                  casestudy_hero={successStories[7].acf.casestudy_hero}
                  our_goal={successStories[7].acf.our_goal}
                  our_goal_image={successStories[7].acf.our_goal_image}
                  project_title={successStories[7].acf.project_title}
                  service={successStories[7].acf.service}
                />
              ) : null}
            </div>
          </div>
        </span>
      </div>

      {/* your hook */}
      <div className="hook-container w-full flex justify-center bg-white">
        <div className="w-3/4 h-fit flex flex-col md:flex-row gap-16 pt-28">
          <div className="hook-title-section md:w-1/2 flex flex-col h-fit gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                {homeContent ? yourStoryTitle[0] : `Your`} &quot;
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                {homeContent ? yourStoryTitle[1] : `Story`}
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-base lg:text-lg 2xl:text-xl">
              {homeContent.acf
                ? homeContent.acf.your_story_description
                : `Let&apos;s capture your brand&apos;s story together at Beach
              Social. We&apos;ll tap into what makes you unique and turn it into
              a viral sensation that captivates and engages. Ready to shine in
              the digital landscape? Partner with us and watch your social
              presence transform into your greatest asset.`}
            </p>
          </div>
          <div className="relative md:w-1/2">
            <div className="hook-inner-container flex flex-col gap-8 md:gap-32 2xl:gap-48 w-full">
              {homeContent.acf
                ? itemList.map((item, key) => (
                    <ListItem key={key} item={item[0]} description={item[1]} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>

      {/* recent insight */}
      <div className="recent-insight w-full flex flex-col items-center pt-16 md:pt-48 gap-8">
        <div className="w-10/12 md:w-9/12 flex flex-col gap-8">
          <span className="flex font-Anton mt-8 md:mt-0">
            <h1 className="font-medium text-2xl md:text-5xl 2xl:text-6xl">
              {homeContent ? `${insightTitle[0]}` : `Recent`}
            </h1>
            <h1 className="font-medium text-2xl md:text-5xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp; {homeContent ? insightTitle[1] : `insights`}
            </h1>
          </span>
          <InsightContainer insightContent={insightContent} />
        </div>
        <hr className="w-9/12 h-1 bg-slate-200" />
      </div>

      {/* contact us */}
      <div className="w-full py-16 flex overflow-visible  md:overflow-hidden justify-center">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-4 pb-8">
          <h4 className="font-semibold text-black w-full md:w-1/2 text-base md:text-lg">
            {homeContent.acf ? homeContent.acf.get_in_touch_description : null}
          </h4>
          <Link href="/contactus">
            <span className="flex gap-8 2xl:gap-16">
              <div className="w-fit relative">
                <h1
                  onMouseEnter={handleContactEnter}
                  onMouseLeave={handleContactLeave}
                  className="font-medium font-Anton text-black text-4xl md:text-6xl 2xl:text-8xl z-20 relative"
                >
                  {homeContent.acf ? homeContent.acf.get_in_touch_title : null}
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
        <Overlay className={"bg-valuesBg hidden md:block"}>
          <div className="w-full h-full z-50">
            <ConatctCard
              hideSection={setHitTheBottom}
              setOpenContact={setOpenContact}
            />
          </div>
        </Overlay>
      ) : null}
      <ContactUsPopUP open={popUpOpen} handelPopUpClose={handlePopUpClose} />
      {/* footer */}
      <Footer handlePopUpOpen={handlePopUpOpen} />
    </main>
  );
}
