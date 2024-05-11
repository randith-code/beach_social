const TeamMemberCard = ({ img, name, description }) => {
  return (
    <div className="rounded-xl w-full md:w-4/12 flex flex-col items-center p-4">
      <img
        src={img}
        alt="insight image"
        className="w-full aspect-square rounded-2xl"
      />
      <div className="flex flex-col gap-4 pt-4">
        <h3 className="font-bold 2xl:text-base">{name}</h3>
        <p className="text-sm 2xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
