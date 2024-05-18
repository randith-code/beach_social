"use client";
import { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";

import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import StoryCard from "../components/CardModules/storycrad";
import ParticlesComponent from "../components/Hero section/Particle";
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";
import StoryContainer from "../components/LayoutComponents/StoryContainer";
import { getSuccessStoryPosts } from "../api/posts";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const SuccessStories = () => {
  const [openContact, setOpenContact] = useState(false);
  const containerRef = useRef();
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

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

  const notSelected = `h-2 w-8 bg-white rounded-lg cursor-pointer`;
  const selected = `h-2 w-10 bg-cyan-400 rounded-lg cursor-pointer`;

  const [imageIndicater, setImageIndicater] = useState({
    section1: selected,
    section2: notSelected,
    section3: notSelected,
    section4: notSelected,
  });
  const [tracker, setTracker] = useState(1);
  const [heroImage, setHeroImage] = useState("/view_img.png");
  const [successStories, setSuccessStories] = useState([]);

  const handleDataFetch = async () => {
    try {
      const resStory = await getSuccessStoryPosts();
      setSuccessStories(resStory.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

  useEffect(() => {
    if (tracker == 1) {
      setImageIndicater({
        section1: selected,
        section2: notSelected,
        section3: notSelected,
        section4: notSelected,
      });
    } else if (tracker == 2) {
      setImageIndicater({
        section1: notSelected,
        section2: selected,
        section3: notSelected,
        section4: notSelected,
      });
    } else if (tracker == 3) {
      setImageIndicater({
        section1: notSelected,
        section2: notSelected,
        section3: selected,
        section4: notSelected,
      });
    } else if (tracker == 4) {
      setImageIndicater({
        section1: notSelected,
        section2: notSelected,
        section3: notSelected,
        section4: selected,
      });
    } else {
      setImageIndicater({
        section1: notSelected,
        section2: notSelected,
        section3: notSelected,
        section4: notSelected,
      });
    }
  }, [tracker]);

  const handleOpenContact = () => {
    setOpenContact(true);
  };
  return (
    <main ref={containerRef} className="h-screen">
      <Navbar />
      <ParticlesComponent id="partical_success" />
      <div className="w-full grid place-items-center">
        <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />
        <h1 className="text-5xl 2xl:text-8xl font-Anton py-16 font-bold text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          Success Stories
        </h1>
      </div>
      {/* feature success story */}
      <div className="w-full flex justify-center py-16 2xl:py-28">
        <div className="w-10/12 md:w-3/4 flex flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="relative w-full flex justify-center lg:w-5/12 aspect-square">
            <img
              src={heroImage}
              alt="featured story"
              className="w-full aspect-square rounded-3xl transition-all"
            />
            <div className="absolute bottom-10 flex justify-around w-1/2 z-50">
              <div
                onClick={() => {
                  setTracker(1);
                  successStories[0].acf.feature_image_1
                    ? setHeroImage(successStories[0].acf.feature_image_1)
                    : setHeroImage("/view_img.png");
                }}
                className={`transition-all ${imageIndicater.section1}`}
              />
              <div
                onClick={() => {
                  setTracker(2);
                  successStories[0].acf.feature_image_2
                    ? setHeroImage(successStories[0].acf.feature_image_2)
                    : setHeroImage("/view_img1.png");
                }}
                className={`transition-all ${imageIndicater.section2}`}
              />
              <div
                onClick={() => {
                  setTracker(3);
                  successStories[0].acf.feature_image_3
                    ? setHeroImage(successStories[0].acf.feature_image_3)
                    : setHeroImage("/view_img2.png");
                }}
                className={`transition-all ${imageIndicater.section3}`}
              />
              <div
                onClick={() => {
                  setTracker(4);
                  successStories[0].acf.feature_image_4
                    ? setHeroImage(successStories[0].acf.feature_image_4)
                    : setHeroImage("/view_img3.png");
                }}
                className={`transition-all ${imageIndicater.section4}`}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-12">
            <div className="w-full lg:w-3/4 flex flex-col gap-8 2xl:gap-12">
              <span className="flex flex-col gap-2 2xl:gap-4">
                <h2 className="font-Anton text-5xl 2xl:text-7xl">
                  {successStories[0]
                    ? successStories[0].acf.project_title
                    : "Featuted Case study"}
                </h2>
              </span>

              <p className="2xl:text-lg">
                {successStories[0]
                  ? successStories[0].acf.about_client
                  : "Case study description"}
              </p>
              <Link
                href={{
                  pathname: "/casestudy",
                  query: {
                    about_client: successStories[0]
                      ? successStories[0].acf.about_client
                      : "",
                    about_client_image: successStories[0]
                      ? successStories[0].acf.about_client_image
                      : "",
                    casestudy_hero: successStories[0]
                      ? successStories[0].acf.casestudy_hero
                      : "",
                    our_goal: successStories[0]
                      ? successStories[0].acf.our_goal
                      : "",
                    our_goal_image: successStories[0]
                      ? successStories[0].acf.our_goal_image
                      : "",
                    project_title: successStories[0]
                      ? successStories[0].acf.project_title
                      : "",
                    service: successStories[0]
                      ? successStories[0].acf.service
                      : "",
                  },
                }}
              >
                <button className="contact-button w-fit group bg-black rounded-3xl hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-white py-2 px-6">
                  <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-xl">
                    See more
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* success stories */}
      <div className="success-story-container md:py-16 relative bg-white w-full z-40 flex justify-center">
        <span className="w-10/12 md:w-9/12 flex flex-col">
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
          <StoryContainer successStories={successStories} />
        </span>
      </div>
      {/* contact us */}
      <div className="w-full flex overflow-hidden justify-center my-16">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-6">
          <span className="flex items-center justify-start md:text-xl">
            <h2 className="text-black text-xl md:text-2xl 2xl:text-4xl font-bold">
              Join our
            </h2>
            <h2 className=" text-xl md:text-xl font-bold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-4xl">
              &nbsp;Community
            </h2>
          </span>
          <h2 className="text-black w-3/4 font-medium text-sm 2xl:text-base">
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
      <Footer handlePopUpOpen={handlePopUpOpen} />{" "}
    </main>
  );
};

export default SuccessStories;
