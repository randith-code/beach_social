const ListItem = ({ item }) => {
  return (
    <div className="flex font-Anton items-center gap-4">
      <div className="w-6 h-6 rounded-lg aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
      <h2 className="font-medium text-xl 2xl:text-2xl">{item}</h2>
    </div>
  );
};

export default ListItem;
