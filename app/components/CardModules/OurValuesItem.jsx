const OurValuesItem = ({ item, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 rounded-lg aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
      <div>
        <h2 className="font-Anton font-medium text-lg 2xl:text-xl">{item}</h2>
        <p className="text-sm 2xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default OurValuesItem;
