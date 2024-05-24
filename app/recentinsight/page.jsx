"use client";
import { useState, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Scrollbar from "smooth-scrollbar";
import { useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import Image from "next/image";

import CustomNavbar from "../components/Navigation/CustomNavBar";
import Footer from "../components/Navigation/Footer";
import ContactUsPopUP from "../components/ContactUs/ContactUsPopUp";
import ParticlesComponent from "../components/Hero section/Particle";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const RecentInsight = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpOpen(true);
  };
  const handlePopUpClose = () => {
    setPopUpOpen(false);
  };

  const containerRef = useRef();
  const searchParams = useSearchParams();

  useGSAP(() => {
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

  return (
    <main ref={containerRef} className="h-screen">
      <CustomNavbar />
      <ParticlesComponent />
      <div className="absolute top-0 left-0 -z-50 bg-[url('/about_hero.png')] bg-cover bg-top w-full h-[80vh]" />

      <div className="w-full flex justify-center">
        <div className="w-3/4 py-28 flex flex-col gap-16">
          <h1 className="font-Anton text-6xl">{searchParams.get("title")}</h1>
          <div className="relative w-full aspect-square lg:w-1/3">
            <Image
              className="rounded-3xl"
              fill
              src={searchParams.get("img")}
              alt="blog image"
            />
          </div>
          <p>{parse(searchParams.get("description"))}</p>
        </div>
      </div>

      <ContactUsPopUP open={popUpOpen} handelPopUpClose={handlePopUpClose} />
      <Footer handlePopUpOpen={handlePopUpOpen} />
    </main>
  );
};

export default function WrappedRecentInsight() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecentInsight />
    </Suspense>
  );
}
