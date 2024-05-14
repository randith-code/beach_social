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
import ConatctCard from "./components/ContactUs/ContactCard";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";
import Overlay from "./components/CardModules/Overlay";
import { getInsightPost1, getInsightPost2, getInsightPost3 } from "./api/posts";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const partnersDesc =
    "We build strong client relationships based on trust and honesty. You can always count on us to have your back.";

  const containerRef = useRef();

  const [openContact, setOpenContact] = useState(false);
  const [isHitTheBottom, setHitTheBottom] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const scroller = containerRef.current;

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

      if (document.querySelector(".gsap-marker-scroller-start")) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        bodyScrollBar.addListener(({ offset }) => {
          gsap.set(markers, { marginTop: -offset.y });
        });
      }

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
        gsap.to(".personal-initial", {
          scale: 6,
          opacity: 0,
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
          opacity: 0.4,
          duration: 0.5,
          stagger: 0.1,
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
        gsap.from(".recent-insight", {
          yPercent: "5",
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

  const [insightContent1, setInsightContent1] = useState();
  const [insightContent2, setInsightContent2] = useState();
  const [insightContent3, setInsightContent3] = useState();

  const handleDataFetch = async () => {
    const res1 = await getInsightPost1();
    const res2 = await getInsightPost2();
    const res3 = await getInsightPost3();

    setInsightContent1({
      title: res1.data.title.rendered,
      content: res1.data.excerpt.rendered,
    });

    setInsightContent2({
      title: res2.data.title.rendered,
      content: res2.data.excerpt.rendered,
    });

    setInsightContent3({
      title: res3.data.title.rendered,
      content: res3.data.excerpt.rendered,
    });
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

  return (
    <main
      id="main-container"
      ref={containerRef}
      className="flex relative overflow-x-hidden flex-col h-screen"
    >
      <Hero />
      {/* partners */}
      <div className="w-full flex flex-col gap-6 items-center py-32 bg-white z-40">
        <span className="partner-header font-Anton flex">
          <h1 className="font-bold text-2xl md:text-5xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
            Friends
          </h1>
          <h1 className="font-bold text-2xl md:text-5xl 2xl:text-6xl">
            &nbsp; we have made along the way
          </h1>
        </span>
        <p className="partner-desc 2xl:text-xl text-xs md:text-sm font-medium w-1/2 md:w-2/6 text-center">
          {partnersDesc}
        </p>
        <div className="flex flex-col gap-8 md:gap-14 mt-8 bg-white z-40">
          <div className="flex w-full gap-10 overflow-x-hidden">
            <div className="top-logos flex gap-6 -translate-x-2/3 2xl:-translate-x-1/3">
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/aely.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/camp.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/graanted.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/legato.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/metric.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/mint.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/oax.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/aely.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/camp.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/graanted.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/legato.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/metric.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/mint.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/oax.png"
                alt="partner company logo"
              />
            </div>
          </div>
          <div className="flex w-full overflow-x-hidden">
            <div className="bottom-logos flex md:gap-10">
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/overland.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/sunrun.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/sign.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/screensight.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/miller.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/oax.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/legato.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/overland.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/overland.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/sunrun.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/sign.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/screensight.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/miller.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/oax.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/legato.png"
                alt="partner company logo"
              />
              <img
                className="h-12 md:h-auto aspect-auto"
                src="/overland.png"
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
            <div className="text-left flex-1">SMS Campaign</div>
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
            <div className="text-left flex-1">Social Media Consulting</div>
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

      {/* success stories */}
      <div className="success-story-container py-16 relative bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop w-full z-40 flex justify-center">
        <span className="initial-text-container hidden absolute md:flex justify-center items-baseline w-full h-full bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop z-50">
          <h3 className="story-initial font-Anton text-center text-4xl font-medium mt-60">
            Success Stories
          </h3>
        </span>
        <span className="w-10/12 md:w-9/12 flex flex-col">
          <h3 className="story-title font-Anton text-2xl md:text-5xl 2xl:text-6xl font-medium py-4 md:pt-8">
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
      <div className="hook-container w-full flex justify-center bg-white">
        <div className="w-3/4 h-fit flex flex-col md:flex-row gap-8 pt-28">
          <div className="hook-title-section md:w-1/2 flex flex-col h-fit gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                Your &quot;
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Story
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-base lg:text-lg 2xl:text-xl">
              Let&apos;s capture your brand&apos;s story together at Beach
              Social. We&apos;ll tap into what makes you unique and turn it into
              a viral sensation that captivates and engages. Ready to shine in
              the digital landscape? Partner with us and watch your social
              presence transform into your greatest asset.
            </p>
          </div>
          <div className="relative md:w-1/2">
            <div className="hook-inner-container flex flex-col gap-16 md:gap-32 2xl:gap-48 w-full">
              <ListItem
                item={"Impactful Sharing"}
                description={
                  "We believe in sharing content that not only elevates your social status but also empowers your audience with useful and interesting information, giving everyone a reason to engage and spread the word."
                }
              />
              <ListItem
                item={"Emotional Resonance"}
                description={
                  "We're committed to crafting messages that resonate on a deeper emotional level, ensuring that every campaign not only captures attention but also maintains engagement by striking s heartfelt chord."
                }
              />
              <ListItem
                item={"Visibility and Imitation"}
                description={
                  "Our stratergies are designed to make your brand's actions highly visible, encouraging imitation and wider adoption by making sure your message is seen by as many as possible."
                }
              />
              <ListItem
                item={"Narrative Power"}
                description={
                  "We harness the power of storytelling to seamlessly integrate your brand into narratives that people feel compelled to share, driving both connection and conversion through compelling, memorable tales."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* recent insight */}
      <div className="recent-insight w-full flex flex-col items-center pt-16 md:pt-48 gap-8">
        <div className="w-10/12 md:w-9/12 flex flex-col gap-8">
          <span className="flex font-Anton mt-8 md:mt-0">
            <h1 className="font-medium text-2xl md:text-5xl 2xl:text-6xl">
              Recent
            </h1>
            <h1 className="font-medium text-2xl md:text-5xl 2xl:text-6xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp; insights
            </h1>
          </span>
          <div className="w-full flex flex-col">
            <span className="w-full flex flex-col lg:flex-row gap-6 lg:gap-2 2xl:gap-2">
              {insightContent1 ? (
                <InsightCard
                  img={"/insight_3.png"}
                  title={insightContent1.title}
                  description={insightContent1.content}
                />
              ) : null}
              {insightContent2 ? (
                <InsightCard
                  img={"/insight_2.png"}
                  title={insightContent2.title}
                  description={insightContent2.content}
                />
              ) : null}
              {insightContent3 ? (
                <InsightCard
                  img={"/insight_1.png"}
                  title={insightContent3.title}
                  description={insightContent3.content}
                />
              ) : null}
            </span>
          </div>
        </div>
        <span className="w-1/2 hidden md:flex justify-center pb-16 gap-4">
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
      <div className="w-full py-16 flex overflow-hidden justify-center">
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
        <Overlay className={"bg-valuesBg"}>
          <div className="w-full h-full z-50">
            <ConatctCard
              hideSection={setHitTheBottom}
              setOpenContact={setOpenContact}
            />
          </div>
        </Overlay>
      ) : null}

      {/* footer */}
      <Footer />
    </main>
  );
}
