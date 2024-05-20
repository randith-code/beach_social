export const FirstFeatureCard = ({ content }) => {
  return (
    <div className="relative w-full md:w-3/12 lg:w-3/12 aspect-square rounded-xl hover:border-4 hover:border-cyan-400">
      <div className="w-1/2 aspect-square bg-main rounded-xl absolute bottom-0 left-0 -translate-x-1 translate-y-1"></div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white drop-shadow w-full aspect-square rounded-xl">
        <img className="w-1/2 xl:w-1/3" src="/target.png" alt="feature image" />
        <p className="text-center text-xs md:text-sm 2xl:text-xl font-semibold w-3/4">
          Strategic Social Media Planing
        </p>
      </div>
    </div>
  );
};

export const SecondFeaturesCard = ({ content }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center bg-white drop-shadow w-full md:w-3/12 lg:w-3/12 aspect-square rounded-xl border-b-main border-b-4 hover:border-4 hover:border-cyan-400">
      <img className="w-1/2 xl:w-1/3" src="/ideas.png" alt="feature image" />
      <p className="text-center text-xs md:text-sm 2xl:text-xl font-semibold w-3/4">
        Engaging Content Creation
      </p>
    </div>
  );
};

export const ThirdFeatureCard = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-white drop-shadow w-full md:w-3/12 lg:w-3/12 aspect-square rounded-xl border-t-main border-t-4 hover:border-4 hover:border-cyan-400">
      <img className="w-1/2 xl:w-1/3" src="/stats.png" alt="feature image" />
      <p className="text-center text-xs md:text-sm 2xl:text-xl font-semibold w-3/4">
        Data-Driven Analytics
      </p>
    </div>
  );
};

export const FourthFeatureCard = ({ content }) => {
  return (
    <div className="relative w-full md:w-3/12 lg:w-3/12 aspect-square rounded-xl hover:border-4 hover:border-cyan-400">
      <div className="w-1/2 aspect-square bg-main rounded-xl absolute top-0 right-0 translate-x-1 -translate-y-1"></div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white drop-shadow w-full aspect-square rounded-xl">
        <img className="w-1/2 xl:w-1/3" src="/people.png" alt="feature image" />
        <p className="text-center text-xs md:text-sm 2xl:text-xl font-semibold w-3/4">
          Proactive Community Management
        </p>
      </div>
    </div>
  );
};
