const ListItem = ({ item, description }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex font-Anton items-center gap-4">
        <div className="w-6 h-6 rounded-lg aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
        <h2 className="font-medium text-xl 2xl:text-2xl">{item}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;
