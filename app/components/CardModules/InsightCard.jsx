import parse from "html-react-parser";

const InsightCard = ({ img, title, description }) => {
  return (
    <div className="bg-black rounded-xl w-full md:w-4/12 flex flex-col items-center p-4">
      <img className="w-11/12" src={img} alt="insight image" />
      <div className="text-white flex flex-col gap-4 pt-4">
        <h3 className="font-bold 2xl:text-2xl">{title}</h3>
        <p className="text-xs font-light 2xl:text-xl">{parse(description)}</p>
      </div>
    </div>
  );
};

export default InsightCard;
