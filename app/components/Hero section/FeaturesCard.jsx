export const FirstFeatureCard = ({ content }) => {
  return (
    <div className="relative min-w-48 w-2/12 lg:w-3/12 aspect-square">
      <div className="w-1/2 aspect-square bg-main rounded-xl absolute bottom-0 left-0 -translate-x-1 translate-y-1"></div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white drop-shadow w-full aspect-square rounded-xl">
        <img className="w-14 xl:w-1/3" src="/target.png" alt="feature image" />
        <p className="text-center 2xl:text-xl font-semibold">
          Stratergic Social Media Planing
        </p>
      </div>
    </div>
  );
};

export const SecondFeaturesCard = ({ content }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center min-w-48 bg-white drop-shadow w-2/12 lg:w-3/12 aspect-square rounded-xl border-b-main border-b-4">
      <img className="w-14 xl:w-1/3" src="/ideas.png" alt="feature image" />
      <p className="text-center 2xl:text-xl font-semibold">
        Stratergic Social Media Planing
      </p>
    </div>
  );
};

export const ThirdFeatureCard = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-w-48 bg-white drop-shadow w-2/12 lg:w-3/12 aspect-square rounded-xl border-t-main border-t-4">
      <img className="w-14 xl:w-1/3" src="/stats.png" alt="feature image" />
      <p className="text-center 2xl:text-xl font-semibold">
        Stratergic Social Media Planing
      </p>
    </div>
  );
};

export const FourthFeatureCard = ({ content }) => {
  return (
    <div className="relative min-w-48 w-2/12 lg:w-3/12 aspect-square">
      <div className="w-1/2 aspect-square bg-main rounded-xl absolute top-0 right-0 translate-x-1 -translate-y-1"></div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white drop-shadow w-full aspect-square rounded-xl">
        <img className="w-14 xl:w-1/3" src="/people.png" alt="feature image" />
        <p className="text-center 2xl:text-xl font-semibold">
          Stratergic Social Media Planing
        </p>
      </div>
    </div>
  );
};
