const OurValuesItem = ({ item, description }) => {
  return (
    <div className="flex justify-start py-4 gap-4 2xl:pb-16">
      <div className="w-6 h-6 rounded-lg aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
      <div className="flex flex-1 flex-col gap-4 2xl:gap-6">
        <h2 className="font-Anton font-medium text-2xl 2xl:text-4xl">{item}</h2>
        <p className="text-sm 2xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default OurValuesItem;
