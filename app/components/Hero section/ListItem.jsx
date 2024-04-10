const ListItem = ({ item }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
      <h2 className="font-bold">{item}</h2>
    </div>
  );
};

export default ListItem;
