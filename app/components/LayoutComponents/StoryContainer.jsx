import React from "react";
import StoryCard from "../CardModules/storycrad";
const chunkArray = (array, chunkSizes) => {
  let results = [];
  let index = 0;

  chunkSizes.forEach((size) => {
    if (index < array.length) {
      results.push(array.slice(index, index + size));
      index += size;
    }
  });

  // If there are remaining items, put them in a new chunk
  if (index < array.length) {
    results.push(array.slice(index));
  }

  return results;
};

const StoryContainer = ({ successStories }) => {
  const chunkSizes = [3, 2, 3]; // Define your chunk sizes here
  const chunks = chunkArray(successStories, chunkSizes);

  return (
    <div className="hidden md:flex flex-col gap-1 md:gap-6 py-8">
      {chunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className={`stories-line${chunkIndex + 1} flex justify-between gap-6`}
        >
          {chunk.map((story, index) => (
            <StoryCard
              key={index}
              img={story.acf.casestudy_hero}
              title={story.acf.project_title}
              description={story.acf.card_title}
              isLarge={chunkSizes[chunkIndex] === 2}
              about_client={story.acf.about_client}
              about_client_image={story.acf.about_client_image}
              casestudy_hero={story.acf.casestudy_hero}
              our_goal={story.acf.our_goal}
              our_goal_image={story.acf.our_goal_image}
              project_title={story.acf.project_title}
              service={story.acf.service}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default StoryContainer;
