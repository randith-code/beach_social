"use client";
import { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";
import Image from "next/image";

import CustomNavbar from "../components/Navigation/CustomNavBar";
import Footer from "../components/Navigation/Footer";
import OurValuesItem from "../components/CardModules/OurValuesItem";
import StoryCard from "../components/CardModules/storycrad";
import ServiceItem from "../components/CardModules/ServiceItem";
import ParticlesComponent from "../components/Hero section/Particle";
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";
import { getSuccessStoryPosts, getSocialMediaContent } from "../api/posts";

import background_demo from "../../public/background_demo.png";
import {
  pairServices,
  splitStringIntoParts,
} from "../utils/utilityFunctions/stringFormat";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const SocialMediaMangement = () => {
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
      gsap.to(".hook-inner-container", {
        scrollTrigger: {
          trigger: ".hook-container",
          pin: ".hook-title-section",
          toggleActions: "restart reverse none pause",
          scrub: 1,
          start: "top top",
          end: () =>
            `+=${
              document.querySelector(".hook-inner-container").offsetHeight + 176
            } +=${
              document.querySelector(".hook-title-section").offsetHeight + 176
            }`,
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

  const [successStories, setSuccessStories] = useState([]);
  const [socialMediaContent, setSocialMediaContent] = useState();
  const [valueItems, setValueItems] = useState([]);
  const [serviceTitle, setServiceTitle] = useState([]);
  const [chooseUsTitle, setChooseUsTitle] = useState([]);
  const [communityTitle, setCommunityTitle] = useState([]);

  const handleDataFetch = async () => {
    try {
      const resStory = await getSuccessStoryPosts();
      const resSocial = await getSocialMediaContent();
      setSuccessStories(resStory.data);
      setSocialMediaContent(resSocial.data);
      setHeroImage[resStory.data[0].acf.feature_image_1];
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

  useEffect(() => {
    if (socialMediaContent) {
      setValueItems(pairServices(socialMediaContent.acf.our_services_items));
      setServiceTitle(
        splitStringIntoParts(socialMediaContent.acf.our_services_title, 1)
      );
      setChooseUsTitle(
        splitStringIntoParts(socialMediaContent.acf.why_choose_us_title, 2)
      );
      setCommunityTitle(
        splitStringIntoParts(socialMediaContent.acf.join_community_title, 1)
      );
    }
  }, [socialMediaContent]);

  const handleOpenContact = () => {
    setOpenContact(true);
  };
  return (
    <main ref={containerRef} className="h-screen">
      <CustomNavbar className={"absolute bg-transparent top-0 left-0"} />
      <ParticlesComponent id="partical_social" />
      <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-center w-full h-[100vh]" />
      <div className="absolute hidden lg:block pt-40 lg:pt-0 w-[30vw] h-[120vh] -z-10 right-0">
        <Image src={background_demo} fill alt="a background feature" />
      </div>
      <div className="values h-fit lg:h-screen w-full flex justify-center items-center pt-16 md:pt-20 lg:pt-32 pb-16">
        <div className="w-3/4">
          <div className="flex flex-col gap-6 w-full lg:w-2/3">
            <h1 className="font-Anton pt-20 text-5xl 2xl:text-7xl">
              {socialMediaContent
                ? socialMediaContent.acf.hero_title
                : `Social Media Management`}
            </h1>
            <p className="font-Anton 2xl:text-lg">
              {socialMediaContent
                ? socialMediaContent.acf.hero_description
                : `In today&apos;s digital landscape, maintaining an active and
              engaging social media presence is more crucial than ever. At Beach
              Social, we offer comprehensive Social Media Management services
              designed to amplify your brand&apos;s online footprint and connect
              with your audience more effectively.`}
            </p>
            <div className="grid grid-cols-2 gap-8 md:flex 2xl:w-3/4 justify-between py-10">
              <ServiceItem
                className="w-24 h-24"
                img={"/fb.svg"}
                hoverImage={"/fb_hover.svg"}
                title="Facebook"
              />
              <ServiceItem
                className="w-24 h-24"
                img={"/x.svg"}
                hoverImage={"/x_hover.svg"}
                title="Twitter"
              />
              <ServiceItem
                className="w-24 h-24"
                img={"/gram.svg"}
                hoverImage={"/gram_hover.svg"}
                title="Instagram"
              />
              <ServiceItem
                className="w-24 h-24"
                img={"/google.svg"}
                hoverImage={"/google_hover.svg"}
                title="Google"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className="hook-container w-full flex justify-center  pb-16 md:pt-0 lg:pt-16 md:pb-40 ">
        <div className="w-3/4 h-fit flex flex-col md:flex-row gap-16 md:pt-28">
          <div className="hook-title-section md:w-1/2 flex flex-col h-fit gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                {socialMediaContent ? serviceTitle[0] : `Our`} &quot;
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                {socialMediaContent ? serviceTitle[1] : `Services`}
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-lg 2xl:text-xl">
              {socialMediaContent
                ? socialMediaContent.acf.our_service_description
                : `At Beach Social, our core values drive everything we do. We
              champion Community, embrace Innovation, uphold Integrity, and
              celebrate Inclusivity. These principles ensure our platform
              remains a vibrant, trusted, and inclusive space for all.`}
            </p>
          </div>
          <div className="relative md:w-1/2">
            <div className="hook-inner-container flex flex-col gap-8 md:gap-32 2xl:gap-48 w-full">
              {socialMediaContent
                ? valueItems.map((item, key) => (
                    <OurValuesItem
                      key={key}
                      item={item[0]}
                      description={item[1]}
                    />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="values bg-valuesBg w-full py-16 flex justify-center 2xl:py-28">
        <div className="w-10/12 md:w-9/12 flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 flex items-center md:justify-end">
            <span className="flex flex-col justify-start gap-4 w-10/12 mt-8">
              <span className="flex font-Anton">
                <h1 className="font-medium text-3xl md:text-4xl 2xl:text-7xl">
                  {socialMediaContent ? chooseUsTitle[0] : `Why`} &quot;
                </h1>
                <h1 className="font-medium text-3xl md:text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                  {socialMediaContent ? chooseUsTitle[1] : `Choose Us`}
                </h1>
                <h1 className="font-medium text-3xl md:text-4xl 2xl:text-7xl">
                  &quot;
                </h1>
              </span>
              <p className="font-medium w-full md:w-full 2xl:text-xl">
                {socialMediaContent
                  ? socialMediaContent.acf.why_choose_us_description
                  : `At Beach Social, we don&apos;t just manage your social
                media&#59; we empower your brand to thrive in a digital world.
                Our team of social media experts is passionate about crafting
                unique strategies that drive engagement, increase followers, and
                convert leads into loyal customers. Partner with us to
                experience the difference that professional social media
                management can make.`}
              </p>
              <button className="bg-black group hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-sm text-white rounded-3xl w-fit px-4 py-2 2xl:py-2 2xl:px-6">
                <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-xl">
                  Get in Touch
                </p>
              </button>
            </span>
          </div>
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center py-8">
            <div className="relative w-full md:w-3/4">
              {socialMediaContent ? (
                <Image
                  className="absolute top-0 w-full rounded-3xl aspect-square z-10"
                  src={socialMediaContent.acf.why_choose_us_image}
                  alt="our values image"
                  fill
                />
              ) : (
                <Image
                  className="absolute top-0 w-full rounded-3xl aspect-square z-10"
                  src={"/place_holder.png"}
                  alt="our values image"
                  fill
                />
              )}
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
      {/* success stories */}
      <div className="success-story-container py-16 relative bg-white w-full z-40 flex justify-center 2xl:py-28">
        <span className="w-10/12 md:w-9/12 flex flex-col">
          <h3 className="story-title font-Anton text-2xl md:text-4xl 2xl:text-6xl font-medium py-4 md:pt-8">
            {socialMediaContent
              ? socialMediaContent.acf.recent_works
              : `Recent Works`}
          </h3>
          <div className="md:hidden grid grid-cols-2 gap-2 pb-4">
            {successStories
              ? successStories
                  .slice(0, 6)
                  .map((story) => (
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
          </div>
        </span>
      </div>
      {/* contact us */}
      <div className="w-full flex overflow-hidden justify-center md:my-16">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-6">
          <span className="flex items-center justify-start md:text-xl">
            <h2 className="text-black text-xl md:text-2xl 2xl:text-4xl font-bold">
              Join our
            </h2>
            <h2 className="text-xl md:text-xl font-bold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-4xl">
              &nbsp;Community
            </h2>
          </span>
          <h2 className="text-black w-3/4 font-medium text-sm 2xl:text-base">
            {socialMediaContent
              ? socialMediaContent.acf.join_community_description
              : `Whether you&apos;re looking to grow your brand, expand your social
            network, or just find a fun and friendly place to express yourself,
            Beach Social is your go-to platform. Connect with us to stay updated
            on exciting features, community highlights, and more as we continue
            to make social media a positive force in the world.`}
          </h2>
          <Link href="/contactus">
            <span className="flex mt-12 gap-8 2xl:gap-16">
              <div className="w-fit relative">
                <h1
                  onMouseEnter={handleContactEnter}
                  onMouseLeave={handleContactLeave}
                  className="font-medium font-Anton text-black text-4xl md:text-6xl 2xl:text-8xl z-20 relative"
                >
                  {socialMediaContent
                    ? socialMediaContent.acf.get_in_touch_with_us_title
                    : `Get in Touch with Us`}
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

export default SocialMediaMangement;
