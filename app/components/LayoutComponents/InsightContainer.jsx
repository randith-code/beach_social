"use client";
import React, { useState, useRef, useEffect } from "react";
import InsightCard from "../CardModules/InsightCard";

const InsightContainer = ({ insightContent }) => {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (index) => {
    const container = scrollRef.current;
    const itemWidth = container.children[0].offsetWidth;
    container.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setSelected(index);
  };

  const handleScrollEvent = () => {
    const container = scrollRef.current;
    const itemWidth = container.children[0].offsetWidth;
    const index = Math.round(container.scrollLeft / itemWidth);
    setSelected(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScrollEvent);
    return () => container.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full flex flex-col">
        <span
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory gap-6"
          ref={scrollRef}
        >
          {insightContent &&
            insightContent.map((insight, index) => (
              <InsightCard
                key={insight.id}
                title={insight.acf.insight_title}
                description={insight.acf.insight_content}
                img={insight.acf.featured_image}
                className="snap-start flex-none"
              />
            ))}
        </span>
      </div>
      <span className="w-1/2 hidden md:flex justify-center pb-16 gap-4">
        {insightContent &&
          insightContent.map((_, index) => (
            <div
              key={index}
              className={`w-12 h-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                selected === index
                  ? "bg-gradient-to-br from-gradiantLftBtm to-gradiantRghtTop"
                  : "bg-black"
              }`}
              onClick={() => handleScroll(index)}
            ></div>
          ))}
      </span>
    </div>
  );
};

export default InsightContainer;
