"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "./components/Hero section/Hero";
import StoryCard from "./components/CardModules/storycrad";
import ListItem from "./components/Hero section/ListItem";
import InsightCard from "./components/CardModules/InsightCard";
import Footer from "./components/Navigation/Footer";
import ConatctUs from "./components/ContactUs/ContactUs";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function Home() {
  const partnersDesc =
    "We build strong client relationships based on trust and honesty. You can always count on us to have your back.";

  const containerRef = useRef();

  const [openContact, setOpenContact] = useState(false);

  useGSAP(
    () => {
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
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".values",
          toggleActions: "restart complete restart pause",
          scrub: 1,
          end: "center center",
        },
      });
      gsap.to(".top-logos", {
        xPercent: "-25",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".top-logos",
          toggleActions: "restart complete restart pause",
          scrub: 1,
          end: "center center",
        },
      });
      gsap.to(".bottom-logos", {
        xPercent: "25",
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".bottom-logos",
          toggleActions: "restart complete restart pause",
          scrub: 1,
          end: "center center",
        },
      });
    },
    { scope: containerRef.current }
  );

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  return (
    <main
      ref={containerRef}
      className="flex overflow-x-hidden font-Roboto flex-col gap-8"
    >
      <Hero />

      {/* partners */}
      <div className="w-full flex flex-col gap-4 items-center bg-white z-40">
        <span className="partner-header flex">
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            Friends
          </h1>
          <h1 className="font-extrabold text-4xl">
            &nbsp; we have made along the way
          </h1>
        </span>
        <p className="partner-desc text-xs w-2/6 text-center">{partnersDesc}</p>
        <div className="flex flex-col gap-8 mt-8 bg-white z-40">
          <div className="top-logos flex gap-4 overflow-hidden">
            <img src="/aely.png" alt="partner company logo" />
            <img src="/camp.png" alt="partner company logo" />
            <img src="/graanted.png" alt="partner company logo" />
            <img src="/legato.png" alt="partner company logo" />
            <img src="/metric.png" alt="partner company logo" />
            <img src="/mint.png" alt="partner company logo" />
            <img src="/oax.png" alt="partner company logo" />
          </div>
          <div className="bottom-logos flex gap-6 overflow-hidden">
            <img src="/overland.png" alt="partner company logo" />
            <img src="/sunrun.png" alt="partner company logo" />
            <img src="/sign.png" alt="partner company logo" />
            <img src="/screensight.png" alt="partner company logo" />
            <img src="/miller.png" alt="partner company logo" />
            <img src="/oax.png" alt="partner company logo" />
            <img src="/legato.png" alt="partner company logo" />
          </div>
        </div>
      </div>

      {/* services */}
      <div className="flex flex-col items-center mt-8 bg-white z-40">
        <span className="services flex">
          <h1 className="font-extrabold text-4xl">We&apos;ve got just what</h1>
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            &nbsp; you need.
          </h1>
        </span>
        <div className="services grid grid-cols-[1fr_50px_1fr] text-2xl gap-y-8 font-bold pt-8">
          <div className="services text-right">Copy Writing</div>
          <div className="services text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="services text-left">Chat bots</div>

          <div className="services text-right">Email Campaign</div>
          <div className="services text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="services text-left">SMS Campaign</div>

          <div className="services text-right">Event Promotion</div>
          <div className="services text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="services text-left">Creative Designs</div>

          <div className="services text-right">Social Media Advertising</div>
          <div className="services text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="services text-left">Social Media Consulting</div>

          <div className="services text-right">Social Media Management</div>
          <div className="services text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="services text-left">Google adwords Campaign</div>
        </div>
      </div>

      {/* values */}
      <div className="values bg-valuesBg w-full flex justify-center">
        <div className="w-10/12 flex">
          <div className="w-1/2 flex items-center justify-end">
            <span className="flex flex-col justify-start gap-4 w-10/12 mt-8">
              <h2 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                Values
              </h2>
              <p className="font-semibold w-10/12">
                We value authenticity, community, and growth. We believe in
                telling genuine stories that resonate with both the heart and
                history of a business, fostering a sense of belonging among
                customers and strengthening community ties.
              </p>
              <button className="bg-black text-sm text-white rounded-3xl w-fit px-4 py-2">
                Get in Touch
              </button>
            </span>
          </div>
          <div className="w-1/2 h-fit flex justify-center py-8">
            <div className="relative w-2/3">
              <img
                className="absolute top-0 w-full aspect-square z-10"
                src="/view_img.png"
                alt="into image"
              />
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400 translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* success stories */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-full z-40 flex justify-center">
        <span className="w-8/12 flex flex-col">
          <h3 className="text-4xl font-bold pt-8">Success Stories</h3>
          <div className="flex flex-col gap-6 py-8">
            <div className="flex justify-between gap-6">
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
            <div className="flex justify-between gap-6">
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
            <div className="flex justify-between gap-6">
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
      <div className="w-full flex justify-center my-8 max-h-60 bg-white z-40">
        <div className="w-8/12 flex gap-8">
          <div className="w-1/2 flex flex-col gap-4">
            <span className="flex">
              <h1 className="font-extrabold text-4xl">Your &quot;</h1>
              <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                Hook
              </h1>
              <h1 className="font-extrabold text-4xl">&quot;</h1>
            </span>
            <p>
              Where creativity meets strategy. Elevate your social presence with
              compelling content, engaging campaigns, and strategic maneuvers.
              Discover how we transform your unique hook into a magnetic force,
              capturing attention and fostering connections in the digital
              realm. Let your brand story shine with Beach Social.
            </p>
          </div>
          <div className="w-1/2 flex flex-col overflow-y-scroll no-scrollbar gap-8">
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
      <div className="w-full flex flex-col items-center gap-8 py-12  bg-gradient-to-r from-emerald-400 to-cyan-400">
        <div className="flex w-full gap-8 overflow-x-hidden">
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
        </div>
        <div className="w-8/12 flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Personal Story</h3>
          <p>
            We value authenticity, community, and growth. We believe in telling
            genuine stories that resonate with both the heart and history of a
            business, fostering a sense of belonging among customers and
            strengthening community ties.
          </p>
        </div>
      </div>

      {/* recent insight */}
      <div className="w-full flex flex-col items-center pb-8 gap-8">
        <div className="w-8/12 flex flex-col gap-8">
          <span className="flex">
            <h1 className="font-extrabold text-4xl">Recent</h1>
            <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              &nbsp; insights
            </h1>
          </span>
          <div className="w-full flex flex-col">
            <span className="w-full flex gap-2">
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
        <span className="w-1/2 flex justify-center gap-4">
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
          <div className="w-12 h-2 rounded-lg bg-black"></div>
        </span>
        <hr className="w-8/12 h-1 bg-slate-200" />
      </div>

      {/* contact us */}
      <div className="w-full flex overflow-hidden justify-center pb-8">
        {openContact ? (
          <ConatctUs
            className={"absolute z-40"}
            setOpenContact={setOpenContact}
          />
        ) : null}

        <div className="w-8/12 flex flex-col gap-4">
          <h4 className="font-semibold text-black w-1/2 text-lg">
            We love to help brands succeed. Let&apos;s Start a Winning Project
            Together.
          </h4>
          <span className="flex gap-8">
            <div className="w-fit relative">
              <h1 className="font-bold text-black text-6xl z-20 relative">
                Get in Touch with Us
              </h1>
              <div className="w-full h-6 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 absolute bottom-0 left-0"></div>
            </div>
            <div
              className="rounded-full bg-black cursor-pointer -translate-y-1/2 grid place-items-center w-16 aspect-square"
              onClick={handleOpenContact}
            >
              <img className="w-4" src="/side_arrow.svg" alt="button icon" />
            </div>
          </span>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
