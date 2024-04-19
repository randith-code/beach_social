const InsightCard = ({ img, title, description }) => {
  return (
    <div className="bg-black rounded-xl w-4/12 p-4">
      <img src={img} alt="insight image" />
      <div className="text-white flex flex-col gap-4 pt-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
