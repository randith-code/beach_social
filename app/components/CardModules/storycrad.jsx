const StoryCard = ({ img, title, description, isLarge }) => {
  const cardStyle = {
    backgroundImage: `url('${img}')`,
  };

  const size = !isLarge ? "aspect-square" : "aspect-video";
  const width = isLarge ? "w-6/12" : "w-4/12";
  return (
    <div
      className={`w-full aspect-square md:${width} md:${size} bg-cover bg-center rounded-lg`}
      style={cardStyle}
    >
      <div className="w-full h-full flex flex-col justify-end p-4">
        <h2 className="text-white text-xs md:text-lg font-semibold">{title}</h2>
        <p className="text-white text-xxs md:text-xs font-reguler">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
