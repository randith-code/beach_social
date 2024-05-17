"use client";
import parse from "html-react-parser";
import Link from "next/link";

const InsightCard = ({ img, title, description }) => {
  return (
    <Link
      className="w-full lg:w-1/3"
      href={{
        pathname: "/recentinsight",
        query: {
          img,
          title,
          description,
        },
      }}
    >
      <div className="bg-black rounded-xl w-full h-full flex flex-col items-center p-4 cursor-pointer">
        <img className="w-11/12" src={img} alt="insight image" />
        <div className="text-white flex flex-col gap-4 pt-4">
          <h3 className="font-bold md:text-xl lg:text-base 2xl:text-2xl">
            {title}
          </h3>
          <p className="text-xs line-clamp-4 md:text-sm lg:text-sm font-light 2xl:text-xl">
            {parse(description)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;
