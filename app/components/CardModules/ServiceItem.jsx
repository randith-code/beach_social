"use client";
import { useState } from "react";

const ServiceItem = ({ img, hoverImage, title }) => {
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
      className="flex flex-col items-center w-1/6 gap-4"
    >
      <div className="aspect-square rounded-full grid place-items-center">
        {hover ? (
          <img className="w-20 h-20" src={hoverImage} alt="hoverImage" />
        ) : (
          <img className="w-20 h-20" src={img} alt="service_image" />
        )}
      </div>
      <h2 className="font-Anton text-xl text-center">{title}</h2>
    </div>
  );
};

export default ServiceItem;
