import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { PodcastsContext } from "../../context";
import { PodcastContextType } from "../../types";

export default function Chapter() {
  const params = useParams();
  const { podcasts, setPodcasts, loading } = useContext(
    PodcastsContext
  ) as PodcastContextType;

  const currentChapter = useMemo(
    () =>
      podcasts.find((podcast) => podcast.id.attributes["im:id"] === params.id),
    [params.id]
  );

  console.log(currentChapter);
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="flex justify-center">
        <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <div className="flex flex-col text-center p-6">
            <img
              src={currentChapter?.["im:image"][0]?.label}
              alt={currentChapter?.title?.label}
              width="350"
            />
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 pt-5">
              {currentChapter?.title.label} by{" "}
              {currentChapter?.["im:artist"].label}
            </p>
            <p className="font-semibold">Rights:</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-300">
              {currentChapter?.rights?.label}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-5 w-full">
          <div className="flex flex-col text-center rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <div className="flex flex-col p-6">
              <p className="font-semibold">Description:</p>
              <span className="text-xs text-neutral-500 dark:text-neutral-300">
                {currentChapter?.summary?.label}
              </span>
            </div>
          </div>

          <audio
            className="p-2 m-5 shadow-sm rounded-lg bg-neutral-700 dark:bg-neutral-300"
            src="../music/woman.mp3"
            preload="none"
            controls
          ></audio>
        </div>
      </div>
    </div>
  );
}
