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

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutUs = () => {
  const [openContact, setOpenContact] = useState(false);
  const containerRef = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    if (scrollContainer) {
      const innerScroller = Scrollbar.init(scrollContainer.current, {
        damping: 0.07,
      });
    }
  }, [scrollContainer]);

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
    <main ref={containerRef} className="h-screen relative">
      <ParticlesComponent id="particles_about" />
      <CustomNavbar className={"absolute bg-transparent top-0 left-0"} />
      <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />
      <div className="values h-screen w-full flex justify-center items-center pt-32 pb-16">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row items-center">
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center items-center pt-8">
            <div className="relative w-3/4 md:w-3/4 mt-8">
              <img
                className="absolute top-0 w-full aspect-square z-10"
                src="/view_img.png"
                alt="into image"
              />
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop translate-x-4 -translate-y-4"></div>
            </div>
          </div>
          {/* description */}
          <div className="w-full md:w-1/2 flex items-center">
            <span className="flex flex-col justify-start gap-4 w-full mt-8">
              <h1 className="font-Anton text-5xl 2xl:text-7xl">About Us</h1>
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
      {/* services */}
      <div className="w-full py-20 flex justify-center">
        <div className="w-3/4 flex justify-between gap-14">
          <ServiceItem img={"/chatbot.png"} title={"Chatbots"} />
          <ServiceItem
            img={"/management.png"}
            title={"Social Media Management"}
          />
          <ServiceItem
            img={"/advertising.png"}
            title={"Social Media Advertising"}
          />
          <ServiceItem
            img={"/consulting.png"}
            title={"Social Media Consulting"}
          />
          <ServiceItem img={"/promotion.png"} title={"Event Promotion"} />
          <ServiceItem img={"/copy_writing.png"} title={"Copy Writing"} />
        </div>
      </div>

      {/* personal stories */}
      <div className="w-full relative flex flex-col items-center overflow-x-hidden gap-8 py-16  bg-valuesBg">
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
      {/* your hook */}
      <div className="hook-container w-full flex justify-center py-24 2xl:my-20 md:max-h-96 bg-white z-40">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row gap-8">
          <div className="hook-element w-full md:w-1/2 flex flex-col gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                Our &quot;
              </h1>
              <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Values
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
          <div className="w-full md:w-1/2 flex flex-col">
            <div ref={scrollContainer} className="w-full md:overflow-hidden">
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
      <div className="w-full bg-lightBlue flex justify-center py-16">
        <div className="flex flex-col gap-6 w-3/4">
          <span className="flex items-center text-4xl font-Anton">
            <h1>Meet Our</h1>
            <h1 className="bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
              &nbsp;Team
            </h1>
          </span>
          <p className="w-full text-sm font-medium">
            Behind every post and pixel is our dedicated team of dreamers,
            thinkers, and doers. From tech gurus to creative mavens, our
            team&apos;s diverse backgrounds and skills breathe life into Beach
            Social&apos;s vision every day.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-between">
            <TeamMemberCard
              img={"/member1.png"}
              name={"User Name"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue quam. Donec vitae feugiat orci, at tempor enim. Etiam sit amet viverra quam,"
              }
            />
            <TeamMemberCard
              img={"/member2.png"}
              name={"User Name"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue quam. Donec vitae feugiat orci, at tempor enim. Etiam sit amet viverra quam,"
              }
            />
            <TeamMemberCard
              img={"/member3.png"}
              name={"User Name"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis congue quam. Donec vitae feugiat orci, at tempor enim. Etiam sit amet viverra quam,"
              }
            />
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className="w-full flex bg-white overflow-hidden justify-center py-16">
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
      <Footer />
    </main>
  );
};

export default AboutUs;
