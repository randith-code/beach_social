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
      className="flex flex-col items-center w-full md:w-1/6 gap-4"
    >
      <div className="aspect-square rounded-full grid place-items-center">
        {hover ? (
          <img className={`${className}`} src={hoverImage} alt="hoverImage" />
        ) : (
          <img className={`${className}`} src={img} alt="service_image" />
        )}
      </div>
      <h2 className="font-Anton text-xl text-center">{title}</h2>
    </div>
  );
};

export default ServiceItem;
