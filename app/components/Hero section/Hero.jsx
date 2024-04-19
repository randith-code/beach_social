"use client";
import React from "react";
import { useEffect, useState, createRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import parse from "html-react-parser";

import ParticlesComponent from "./Particle";
import Navbar from "../Navigation/Navbar";
import { getHeroContent } from "@/app/services/posts";
import LeftArc from "./LeftArc";
import RightArc from "./RightArc";
import {
  FirstFeatureCard,
  SecondFeaturesCard,
  ThirdFeatureCard,
  FourthFeatureCard,
} from "./FeaturesCard";

const Hero = () => {
  const [content, setContent] = useState();
  const rightArcRef = createRef();
  const leftArcRef = createRef();
  const navRef = createRef();

  const handleGetContent = async () => {
    const res = await getHeroContent();
    setContent(res.data);
  };

  let doc;
  if (content) {
    doc = parse(content.content.rendered);
  }
  const title = "Ride the Social Tide with Beach Social";
  const description =
    "Dive into a sea of endless possibilities with Beach Social, where every ripple in the digital ocean brings you closer to a vibrant online community. Join us and surf the social wave like never before";

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (rightArcRef.current && leftArcRef.current) {
      tl.from(leftArcRef.current, {
        duration: 1,
        opacity: 0.2,
        ease: "power1.inOut",
      });
      tl.from(
        rightArcRef.current,
        { duration: 1, opacity: 0.2, ease: "power1.inOut" },
        0
      );
    }

    // if (rightArcRef.current) {
    //   gsap.from(rightArcRef.current, {
    //     width: 0,
    //     duration: 1.5,
    //   });
    // }

    // if (leftArcRef.current) {
    //   gsap.from(leftArcRef.current, {
    //     width: 0,
    //     duration: 1.5,
    //   });
    // }

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
  }, []);

  useEffect(() => {
    handleGetContent();
  }, []);

  return (
    <header className="relative w-full h-screen">
      <Navbar ref={navRef} />
      <div className="flex flex-col w-full items-center gap-4 pt-10">
        <h1 className="main-title text-5xl font-Anton font-bold w-1/2 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="main-content font-medium text-sm w-2/5 text-center">
          {description}
        </p>
        <button className="contact-button bg-black rounded-2xl text-white py-1 px-3">
          Get in Touch
        </button>
      </div>
      <div className="absolute w-full h-full inset-0 -z-10 flex justify-between">
        <LeftArc ref={leftArcRef} />
        <RightArc ref={rightArcRef} />
      </div>
      <ParticlesComponent id="particles" />
      <div className="w-full h-auto flex justify-center pt-8">
        <span className="feature-container flex w-8/12 justify-between">
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
