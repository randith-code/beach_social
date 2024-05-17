"use client";
import Link from "next/link";
import parse from "html-react-parser";

const StoryCard = ({
  img,
  title,
  description,
  isLarge,
  about_client,
  about_client_image,
  casestudy_hero,
  our_goal,
  our_goal_image,
  project_title,
  service,
}) => {
  const cardStyle = {
    backgroundImage: `url('${img}')`,
  };

  const width = isLarge
    ? "md:w-full aspect-square md:aspect-video bg-center rounded-xl md:rounded-3xl cursor-pointer"
    : "md:w-full aspect-square bg-center rounded-xl md:rounded-3xl cursor-pointer";

  const widthLink = isLarge
    ? "md:w-6/12 aspect-square md:aspect-video cursor-pointer"
    : "md:w-4/12 aspect-square cursor-pointer";
  return (
    <Link
      className={`${widthLink}`}
      href={{
        pathname: "/casestudy",
        query: {
          about_client,
          about_client_image,
          casestudy_hero,
          our_goal,
          our_goal_image,
          project_title,
          service,
        },
      }}
    >
      <div
        className={`transition-all duration-[2000ms] bg-120% hover:bg-100% ${width}`}
        style={cardStyle}
      >
        <div className="w-full h-full flex flex-col justify-end p-4">
          <h2 className="text-white text-xs md:text-lg font-semibold">
            {title}
          </h2>
          <p className="text-white text-xxs md:text-xs font-reguler line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
