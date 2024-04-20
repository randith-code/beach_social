const StoryCard = ({ img, title, description, isLarge }) => {
  const cardStyle = {
    backgroundImage: `url('${img}')`,
  };

  const width = isLarge
    ? "md:w-6/12 aspect-square md:aspect-video bg-cover bg-center rounded-lg"
    : "md:w-4/12 aspect-square bg-cover bg-center rounded-lg";
  return (
    <div className={`${width}`} style={cardStyle}>
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
