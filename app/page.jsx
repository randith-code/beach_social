import Hero from "./components/Hero section/Hero";
import StoryCard from "./components/Success stories/storycrad";
import ListItem from "./components/Hero section/ListItem";

export default function Home() {
  const partnersDesc =
    "We build strong client relationships based on trust and honesty. You can always count on us to have your back.";

  return (
    <main className="flex flex-col gap-8">
      <Hero />

      {/* partners */}
      <div className="w-full flex flex-col gap-4 items-center bg-white z-40">
        <span className="flex">
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            Friends
          </h1>
          <h1 className="font-extrabold text-4xl">
            &nbsp; we have made along the way
          </h1>
        </span>
        <p className="text-xs w-2/6 text-center">{partnersDesc}</p>
        <div className="flex flex-col gap-8 mt-8 bg-white z-40">
          <div className="flex gap-4 overflow-hidden">
            <img src="/aely.png" alt="partner company logo" />
            <img src="/camp.png" alt="partner company logo" />
            <img src="/graanted.png" alt="partner company logo" />
            <img src="/legato.png" alt="partner company logo" />
            <img src="/metric.png" alt="partner company logo" />
            <img src="/mint.png" alt="partner company logo" />
            <img src="/oax.png" alt="partner company logo" />
          </div>
          <div className="flex gap-6 overflow-hidden">
            <img src="/overland.png" alt="partner company logo" />
            <img src="/sunrun.png" alt="partner company logo" />
            <img src="/sign.png" alt="partner company logo" />
            <img src="/screensight.png" alt="partner company logo" />
            <img src="/miller.png" alt="partner company logo" />
            <img src="/oax.png" alt="partner company logo" />
            <img src="/legato.png" alt="partner company logo" />
          </div>
        </div>
      </div>

      {/* services */}
      <div className="flex flex-col items-center mt-8 bg-white z-40">
        <span className="flex">
          <h1 className="font-extrabold text-4xl">We’ve got just what</h1>
          <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
            &nbsp; you need.
          </h1>
        </span>
        <div className="grid grid-cols-[1fr_50px_1fr] text-2xl gap-y-8 font-bold pt-8">
          <div className="text-right">Copy Writing</div>
          <div className="text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="text-left">Chat bots</div>

          <div className="text-right">Email Campaign</div>
          <div className="text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="text-left">SMS Campaign</div>

          <div className="text-right">Event Promotion</div>
          <div className="text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="text-left">Creative Designs</div>

          <div className="text-right">Social Media Advertising</div>
          <div className="text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="text-left">Social Media Consulting</div>

          <div className="text-right">Social Media Management</div>
          <div className="text-center flex justify-center items-center">
            <hr className="h-1 w-7/12 bg-black" />
          </div>
          <div className="text-left">Google adwords Campaign</div>
        </div>
      </div>

      {/* values */}
      <div className="bg-valuesBg w-full flex justify-center">
        <div className="w-10/12 flex">
          <div className="w-1/2 flex items-center justify-end">
            <span className="flex flex-col justify-start gap-4 w-10/12 mt-8">
              <h2 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                Values
              </h2>
              <p className="font-semibold w-10/12">
                We value authenticity, community, and growth. We believe in
                telling genuine stories that resonate with both the heart and
                history of a business, fostering a sense of belonging among
                customers and strengthening community ties.
              </p>
              <button className="bg-black text-sm text-white rounded-3xl w-fit px-4 py-2">
                Get in Touch
              </button>
            </span>
          </div>
          <div className="w-1/2 h-fit flex justify-center py-8">
            <div className="relative w-2/3">
              <img
                className="absolute top-0 w-full aspect-square z-10"
                src="/view_img.png"
                alt="into image"
              />
              <div className="rounded-2xl w-full aspect-square bg-gradient-to-r from-emerald-400 to-cyan-400 translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* success stories */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 w-full z-40 flex justify-center">
        <span className="w-8/12 flex flex-col">
          <h3 className="text-4xl font-bold pt-8">Success Stories</h3>
          <div className="flex flex-col gap-6 py-8">
            <div className="flex justify-between gap-6">
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
            </div>
            <div className="flex justify-between gap-6">
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={true}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={true}
              />
            </div>
            <div className="flex justify-between gap-6">
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
              <StoryCard
                img="/view_img.png"
                title={"Varnish Nightclub"}
                description={"Revolutionizing Nightlife Marketing Background"}
                isLarge={false}
              />
            </div>
          </div>
        </span>
      </div>

      {/* your hook */}
      <div className="w-full flex justify-center my-8 max-h-60 bg-white z-40">
        <div className="w-8/12 flex gap-8">
          <div className="w-1/2 flex flex-col gap-4">
            <span className="flex">
              <h1 className="font-extrabold text-4xl">Your "</h1>
              <h1 className="font-extrabold text-4xl bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block text-transparent bg-clip-text">
                Hook
              </h1>
              <h1 className="font-extrabold text-4xl">"</h1>
            </span>
            <p>
              Where creativity meets strategy. Elevate your social presence with
              compelling content, engaging campaigns, and strategic maneuvers.
              Discover how we transform your unique hook into a magnetic force,
              capturing attention and fostering connections in the digital
              realm. Let your brand story shine with Beach Social.
            </p>
          </div>
          <div className="w-1/2 flex flex-col overflow-y-scroll no-scrollbar gap-8">
            <ListItem
              item={
                "Elevate Your Social Game, Minimize Your Effort: We Handle the Digital Heavy Lifting."
              }
            />
            <ListItem
              item={
                "Social Media Success, Simplified: Targeted Strategies, Tangible Results."
              }
            />
            <ListItem
              item={
                "From Posts to Profits: We Craft Your Social Media Success, You Reap the Rewards"
              }
            />
            <ListItem
              item={
                "From Shoreline to Online: Crafting Digital Experiences as Memorable as a Day at the Beach."
              }
            />
            <ListItem
              item={
                "Your Business at the Beach, Amplified Online: We Navigate the Digital Currents for You."
              }
            />
            <ListItem
              item={
                "Seaside to Screenside: Crafting Your Beach Brand's Digital Journey."
              }
            />
          </div>
        </div>
      </div>

      {/* personal story */}
      <div className="w-full flex flex-col items-center gap-8 py-12  bg-gradient-to-r from-emerald-400 to-cyan-400">
        <div className="flex w-full gap-8 overflow-x-hidden">
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_3.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_1.png"
            alt="coresel image"
          />
          <img
            className="w-2/12 aspect-square"
            src="/personal_story_2.png"
            alt="coresel image"
          />
        </div>
        <div className="w-8/12 flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Personal Story</h3>
          <p>
            We value authenticity, community, and growth. We believe in telling
            genuine stories that resonate with both the heart and history of a
            business, fostering a sense of belonging among customers and
            strengthening community ties.
          </p>
        </div>
      </div>
    </main>
  );
}
