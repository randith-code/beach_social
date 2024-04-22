const TeamMemberCard = ({ img, name, description }) => {
  return (
    <div className="rounded-xl w-full md:w-4/12 flex flex-col items-center p-4">
      <img src={img} alt="insight image" />
      <div className="flex flex-col gap-4 pt-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm font-base">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
