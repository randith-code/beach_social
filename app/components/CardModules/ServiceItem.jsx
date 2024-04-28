const ServiceItem = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center w-1/6 gap-4">
      <div className="aspect-square rounded-full grid place-items-center">
        <img src={img} alt="service_image" />
      </div>
      <h2 className="font-Anton text-xl text-center">{title}</h2>
    </div>
  );
};

export default ServiceItem;
