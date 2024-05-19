"use client";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";

import CustomNavbar from "../components/Navigation/CustomNavBar";
import Footer from "../components/Navigation/Footer";
import OurValuesItem from "../components/CardModules/OurValuesItem";
import TeamMemberCard from "../components/CardModules/TeamMemberCard";
import ServiceItem from "../components/CardModules/ServiceItem";
import ParticlesComponent from "../components/Hero section/Particle";
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";
import ClickAndDragScroll from "../components/CardModules/ClickAndDragScroll";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutUs = () => {
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
      gsap.to(".values-inner-container", {
        scrollTrigger: {
          trigger: ".values-container",
          pin: ".values-title-section",
          toggleActions: "restart reverse none pause",
          scrub: 1,
          start: "top top",
          end: () =>
            `+=${
              document.querySelector(".values-inner-container").offsetHeight +
              176
            } +=${
              document.querySelector(".values-title-section").offsetHeight + 176
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

  const handleOpenContact = () => {
    setOpenContact(true);
  };

  return (
    <main ref={containerRef} className="h-screen relative pt-16 md:pt-0">
      <ParticlesComponent id="particles_about" />
      <CustomNavbar className={"absolute bg-transparent top-0 left-0"} />
      <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />
      <div className="values h-screen w-full flex justify-center items-center pt-32 pb-16">
        <div className="w-10/12 md:w-9/12 flex flex-col lg:flex-row justify-between items-center">
          <div className="w-10/12 lg:w-1/2 h-fit flex justify-start items-center pt-8">
            <div className="relative w-full md:w-10/12 mt-8">
              <img
                className="absolute top-0 w-full rounded-3xl aspect-square z-10"
                src="/about_us.jpg"
                alt="into image"
              />
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop translate-x-4 -translate-y-4"></div>
            </div>
          </div>
          {/* description */}
          <div className="w-full lg:w-1/2 flex items-center">
            <span className="flex flex-col justify-start gap-4 w-full mt-8">
              <h1 className="font-Anton text-5xl 2xl:pb-12 2xl:text-7xl">
                About Us
              </h1>
              <p className="text-sm w-full 2xl:text-lg">
                Founded on the scenic coasts of North Carolina and South
                Carolina, Beach Social emerged from a vision to meld digital
                communication with authentic human connections. Inspired by the
                vibrant life of coastal towns&ndash;from Myrtle Beach to Oak
                Island and now Wilmington&ndash;we started our journey in
                December 2022. Our aim was to embody the spirit of the beach,
                where diverse paths meet and leave unique marks in the sand,
                transforming these interactions into a dynamic social media
                platform that resonates with the energy of our coastal
                communities.
              </p>
              <p className="text-sm w-full 2xl:text-lg">
                At Beach Social, our mission is simple yet profound: to empower
                individuals and businesses to forge meaningful connections
                through innovative social media solutions. We believe in the
                transformative power of connection to drive personal growth and
                business success. From orchestrating large&ndash;scale events
                that captivate thousands to boosting business revenues by a
                minimum of 20% or more across restaurants, nightclubs,
                boutiques, and smoke shops, we don&apos;t just manage social
                media&ndash;we create impactful experiences that help our
                clients flourish in the digital landscape.
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="w-full py-20 flex justify-center">
        <div className="relative  whitespace-nowrap w-3/4 grid grid-cols-3 lg:flex lg:overflow-x-scroll lg:h-fit no-scrollbar gap-20">
          <ClickAndDragScroll
            className={"w-full h-fit flex gap-20 no-scrollbar"}
          >
            <ServiceItem
              img={"/web_design.svg"}
              hoverImage={"/web_design_hover.svg"}
              title={"Web Designing"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/management.svg"}
              hoverImage={"/management_hover.svg"}
              title={"Social Media Management"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/advertising.svg"}
              hoverImage={"/advertising_hover.svg"}
              title={"Social Media Advertising"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/consulting.svg"}
              hoverImage={"/consulting_hover.svg"}
              title={"Social Media Consulting"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/promotion.svg"}
              hoverImage={"/promotion_hover.svg"}
              title={"Event Promotion"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/copy_writing.svg"}
              hoverImage={"/copy_writing_hover.svg"}
              title={"Copy Writing"}
              className={"w-full"}
            />
            <ServiceItem
              img={"/email_sms_campaign.svg"}
              hoverImage={"/email_sms_campaign_hover.svg"}
              title={"Email / SMS Campaign"}
              className={"w-full 2xl:w-32"}
            />
            <ServiceItem
              img={"/google_ad_campaign.svg"}
              hoverImage={"/google_ad_campaign_hover.svg"}
              title={"Google adwords Campaign"}
              className={"w-full 2xl:w-32"}
            />
            <ServiceItem
              img={"/creative_design.svg"}
              hoverImage={"/creative_design_hover.svg"}
              title={"Creative Designs"}
              className={"w-full"}
            />
          </ClickAndDragScroll>
          {/* <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-300 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div> */}
        </div>
      </div>

      {/* personal stories */}
      <div className="w-full relative flex flex-col items-center overflow-x-hidden gap-8 py-20 md:py-28  bg-valuesBg">
        <div className="srcoller-inner flex w-full gap-8 overflow-x-scroll no-scrollbar md:overflow-visible md:-translate-x-1/3">
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
            Coming from a family of small business owners and having worked
            closely with local enterprises for years, the Beach Social deeply
            understand the nuances and needs of small businesses. We&apos;re
            here to leverage this expertise to craft compelling stories and
            strategies that ensure significant returns, regardless of your
            business&apos;s size.
          </p>
        </div>
      </div>
      {/* our values */}
      <div className="values-container w-full flex justify-center py-20 md:pt-16 md:pb-40 bg-white">
        <div className="w-3/4 h-fit flex flex-col md:flex-row gap-16 md:pt-28">
          <div className="values-title-section md:w-1/2 flex flex-col h-fit gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                Our &quot;
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Values
              </h1>
              <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-lg md:text-base lg:text-lg 2xl:text-xl">
              At Beach Social, our core values drive everything we do. We
              champion Community, embrace Innovation, uphold Integrity, and
              celebrate Inclusivity. These principles ensure our platform
              remains a vibrant, trusted, and inclusive space for all.
            </p>
          </div>
          <div className="relative md:w-1/2">
            <div className="values-inner-container flex flex-col gap-8 md:gap-32 2xl:gap-48 w-full">
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
      </div>

      {/* meet the team */}
      <div className="w-full bg-lightBlue flex justify-center py-16 2xl:py-32">
        <div className="flex flex-col gap-6 w-3/4">
          <span className="flex items-center text-4xl font-Anton 2xl:text-6xl">
            <h1>Meet Our</h1>
            <h1 className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp;Team
            </h1>
          </span>
          <p className="w-full text-sm font-medium 2xl:text-lg">
            Behind every post and pixel is our dedicated team of dreamers,
            thinkers, and doers. From tech gurus to creative mavens, our
            team&apos;s diverse backgrounds and skills breathe life into Beach
            Social&apos;s vision every day.
          </p>
          <div className="relative z-40 flex flex-col md:flex-row w-full justify-between">
            <TeamMemberCard
              img={
                "https://beachsocial.leadmedia.lk/wp-content/uploads/2024/05/Noah.png"
              }
              title={"Founder"}
              name={"Noah Rudolph"}
              description={
                "Noah Rudolph is the visionary founder with over 10 years of experience across restaurants, bars, nightclubs, and large-scale events, managing more than five establishments. His extensive background in marketing ensures that wherever he leads, success follows."
              }
            />
            <TeamMemberCard
              img={
                "https://beachsocial.leadmedia.lk/wp-content/uploads/2024/05/Bridgette.jpg"
              }
              title={"Videographer"}
              name={"Dolan Brassier"}
              description={
                "Dolan Brassier is a prominent videographer known for his dynamic work with top YouTube brands like Danny Duncan. His keen eye captures more than what meets the lens, bringing visionary content to life with exceptional clarity and creativity."
              }
            />
            <TeamMemberCard
              img={"/member3.png"}
              title={"Marketing Specialist"}
              name={"Bridgette Tayman"}
              description={
                "Bridgette Tayman, a marketing guru from Maryland, combines her keen eye for aesthetics with a deep expertise in restaurant branding and design. Her innovative visual strategies not only enhance the dining atmosphere but also significantly elevate the overall brand experience."
              }
            />
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

export default AboutUs;
