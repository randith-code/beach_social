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
      className="flex flex-col items-center w-28  lg:w-32 gap-4"
    >
      <div
        style={{
          backgroundImage: hover ? `url(${hoverImage})` : `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`aspect-square rounded-full w-24 2xl:w-28  grid place-items-center`}
      ></div>
      <h2 className="font-Anton w-full text-xl text-center break-all">
        {title}
      </h2>
    </div>
  );
};

export default ServiceItem;
