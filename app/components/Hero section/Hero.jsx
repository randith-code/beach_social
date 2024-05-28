"use client";
import React from "react";
import { useEffect, useState, createRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import parse from "html-react-parser";

import ParticlesComponent from "./Particle";
import Navbar from "../Navigation/Navbar";
import { getHeroContent } from "@/app/api/posts";
import LeftArc from "./LeftArc";
import RightArc from "./RightArc";
import {
  FirstFeatureCard,
  SecondFeaturesCard,
  ThirdFeatureCard,
  FourthFeatureCard,
} from "./FeaturesCard";
import Link from "next/link";
import { getHomeContent } from "@/app/api/posts";

const Hero = () => {
  const rightArcRef = createRef();
  const leftArcRef = createRef();
  const navRef = createRef();

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();
      if (rightArcRef.current && leftArcRef.current) {
        tl.from(leftArcRef.current, {
          duration: 1.5,
          opacity: 0.2,
          ease: "power1.inOut",
        });
        tl.from(
          rightArcRef.current,
          {
            duration: 1.5,
            opacity: 0.2,
            ease: "power1.inOut",
          },
          0
        );
      }

      if (navRef.current) {
        gsap.from(navRef.current, {
          yPercent: "-100",
          duration: 0.8,
          ease: "power1.inOut",
        });
      }
      gsap.from(".feature-container", {
        yPercent: "100",
        opacity: 0.5,
        duration: 1,
        ease: "power1.inOut",
      });
      gsap.from(".main-title", {
        opacity: 0.5,
        yPercent: "-25",
        duration: 0.6,
      });
      gsap.from([".main-content", ".contact-button"], {
        opacity: 0,
        duration: 0.5,
      });
    });
  }, []);

  const [heroContent, setHeroContent] = useState();

  const handleFetch = async () => {
    const res = await getHomeContent();
    setHeroContent(res.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <header className="relative w-full h-fit md:h-fit">
      <Navbar ref={navRef} />
      <div className="flex flex-col w-full items-center gap-6 pt-16">
        <h1 className="main-title 2xl:pt-20 text-6xl 2xl:text-8xl font-Anton font-bold w-10/12 md:w-1/2 text-center bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text">
          {heroContent ? heroContent.acf.header_title : null}
        </h1>
        <p className="main-content font-medium 2xl:text-xl text-sm w-10/12 md:w-2/5 text-center">
          {heroContent ? heroContent.acf.header_description : null}
        </p>
        <Link href="/contactus">
          <button className="contact-button group bg-black rounded-3xl hover:bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop text-white py-2 px-6">
            <p className="font-semibold group-hover:text-black bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop inline-block text-transparent bg-clip-text 2xl:text-xl">
              Get in Touch
            </p>
          </button>
        </Link>
      </div>
      <div className="absolute top-0 left-0 right-0  hidden w-full h-full inset-0 -z-10 md:flex justify-between">
        <LeftArc className="arcs" ref={leftArcRef} />
        <RightArc className="arcs" ref={rightArcRef} />
      </div>
      <ParticlesComponent id="particles" />
      <div className="w-full h-auto flex justify-center pt-16 pb-2">
        <span className="feature-container grid grid-cols-2 md:flex w-10/12 md:w-3/4 gap-6 justify-between">
          <FirstFeatureCard className="features" />
          <SecondFeaturesCard className="features" />
          <ThirdFeatureCard className="features" />
          <FourthFeatureCard className="features" />
        </span>
      </div>
    </header>
  );
};

export default Hero;
