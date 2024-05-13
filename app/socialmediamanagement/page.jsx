"use client";
import { useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Scrollbar from "smooth-scrollbar";

import CustomNavbar from "../components/Navigation/CustomNavBar";
import Footer from "../components/Navigation/Footer";
import OurValuesItem from "../components/CardModules/OurValuesItem";
import StoryCard from "../components/CardModules/storycrad";
import ServiceItem from "../components/CardModules/ServiceItem";
import ParticlesComponent from "../components/Hero section/Particle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const SocialMediaMangement = () => {
  const [openContact, setOpenContact] = useState(false);
  const containerRef = useRef();

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

  const handleOpenContact = () => {
    setOpenContact(true);
  };
  return (
    <main ref={containerRef} className="h-screen">
      <CustomNavbar className={"absolute bg-transparent top-0 left-0"} />
      <ParticlesComponent id="partical_social" />
      <div className=" absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-center w-full h-[100vh]" />
      <div className="absolute w-[30%] z-10 right-0">
        <img
          src="/background_demo.png"
          className="w-full"
          alt="a background feature"
        />
      </div>
      <div className="values h-screen w-full flex justify-center items-center pt-32 pb-16">
        <div className="w-3/4">
          <div className="flex flex-col gap-6 w-2/3">
            <h1 className="font-Anton pt-20 text-5xl 2xl:text-7xl">
              Social Media Management
            </h1>
            <p className="font-Anton">
              In today&apos;s digital landscape, maintaining an active and
              engaging social media presence is more crucial than ever. At Beach
              Social, we offer comprehensive Social Media Management services
              designed to amplify your brand&apos;s online footprint and connect
              with your audience more effectively.
            </p>
            <div className="flex 2xl:w-3/4 justify-between py-10">
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
                title="X"
              />
              <ServiceItem
                className="w-24 h-24"
                img={"/gram.svg"}
                hoverImage={"/gram_hover.svg"}
                title="Instagram"
              />
              <ServiceItem
                className="w-24 h-24"
                img={"/social_media.svg"}
                hoverImage={"/social_media_hover.svg"}
                title="Social Media"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className="hook-container w-full flex justify-center pt-16 pb-40 bg-white">
        <div className="w-3/4 h-fit flex flex-col md:flex-row gap-8 pt-28">
          <div className="hook-title-section md:w-1/2 flex flex-col h-fit gap-4">
            <span className="flex font-Anton">
              <h1 className="font-medium text-4xl md:text-6xl 2xl:text-7xl">
                Our &quot;
              </h1>
              <h1 className="font-medium text-4xl md:text-6xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                Services
              </h1>
              <h1 className="font-medium text-4xl md:text-6xl 2xl:text-7xl">
                &quot;
              </h1>
            </span>
            <p className="font-medium text-lg 2xl:text-xl">
              At Beach Social, our core values drive everything we do. We
              champion Community, embrace Innovation, uphold Integrity, and
              celebrate Inclusivity. These principles ensure our platform
              remains a vibrant, trusted, and inclusive space for all.
            </p>
          </div>
          <div className="relative md:w-1/2">
            <div className="hook-inner-container flex flex-col gap-32 2xl:gap-48 w-full">
              <OurValuesItem
                item={"Strategy Development:"}
                description={
                  "We begin by understanding your brand, goals, and audience. Using this insight, we craft a tailored social media strategy that aligns with your business objectives and sets the stage for digital success."
                }
              />
              <OurValuesItem
                item={"Content Creation:"}
                description={
                  "Dive into a sea of creativity with our expert content creators. From eye-catching graphics to compelling copy, we produce content that resonates with your target audience and embodies your brand’s voice."
                }
              />
              <OurValuesItem
                item={"Daily Management and Posting:"}
                description={
                  "Leave the day-to-day management of your social media profiles to us. We ensure that your accounts are active, engaging, and timely—keeping your brand top-of-mind and your audience engaged."
                }
              />
              <OurValuesItem
                item={"Monitoring and Engagement:"}
                description={
                  "We monitor your social channels to ensure that every comment, query, and opportunity for engagement doesn’t slip through the net. Our team helps nurture relationships by interacting with your audience in a genuine and professional manner."
                }
              />
              <OurValuesItem
                item={"Analytics and Reporting:"}
                description={
                  "With our comprehensive analytics tools, we track the performance of your campaigns and provide detailed reports. This helps us refine strategies and make data-driven decisions to boost your social media effectiveness."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="values bg-valuesBg w-full py-16 flex justify-center 2xl:py-28">
        <div className="w-10/12 md:w-9/12 flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex items-center md:justify-end">
            <span className="flex flex-col justify-start gap-4 w-10/12 mt-8">
              <span className="flex font-Anton">
                <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                  Why &quot;
                </h1>
                <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                  Choose Us
                </h1>
                <h1 className="font-medium text-2xl md:text-4xl 2xl:text-7xl">
                  &quot;
                </h1>
              </span>
              <p className="font-medium w-full md:w-full 2xl:text-xl">
                At Beach Social, we don&apos;t just manage your social
                media&#59; we empower your brand to thrive in a digital world.
                Our team of social media experts is passionate about crafting
                unique strategies that drive engagement, increase followers, and
                convert leads into loyal customers. Partner with us to
                experience the difference that professional social media
                management can make.
              </p>
              <button className="bg-black group hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-sm text-white rounded-3xl w-fit px-4 py-2 2xl:py-2 2xl:px-6">
                <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
                  Get in Touch
                </p>
              </button>
            </span>
          </div>
          <div className="w-10/12 md:w-1/2 h-fit flex justify-center py-8">
            <div className="relative w-3/4 md:w-3/4">
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
      <div className="success-story-container py-16 relative bg-white w-full z-40 flex justify-center 2xl:py-28">
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
      <div className="w-full flex overflow-hidden justify-center my-16">
        <div className="contact-us w-10/12 md:w-9/12 flex flex-col gap-6">
          <span className="flex items-center justify-start md:text-xl">
            <h2 className="text-black text-base md:text-2xl 2xl:text-4xl font-bold">
              Join our
            </h2>
            <h2 className="text-base md:text-xl font-bold bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-4xl">
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

export default SocialMediaMangement;
