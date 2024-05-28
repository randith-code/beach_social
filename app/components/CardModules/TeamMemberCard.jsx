import Image from "next/image";

const TeamMemberCard = ({ img, title, name, description }) => {
  return (
    <div className="rounded-xl w-full md:w-full flex flex-col items-center p-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
        <Image src={img} alt="team member photo" fill />
        {/* <img src={img} alt="insight image" className="w-full" /> */}
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <span className="flex flex-col">
          <p className="text-sm font-bold text-cyan-400">{title}</p>
          <h3 className="font-bold 2xl:text-base">{name}</h3>
        </span>
        <p className="text-sm 2xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
