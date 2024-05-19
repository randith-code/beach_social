"use client";
import { useState } from "react";

const ServiceItem = ({ img, hoverImage, title, className }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative flex flex-col items-center justify-center w-28 h-fit lg:w-32 gap-4"
    >
      <div
        style={{
          backgroundImage: hover ? `url(${hoverImage})` : `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`aspect-square rounded-full w-24 2xl:w-28  grid place-items-center`}
      ></div>
      <h2 className="font-Anton text-xl text-center text-wrap w-full">
        {title}
      </h2>
    </div>
  );
};

export default ServiceItem;
