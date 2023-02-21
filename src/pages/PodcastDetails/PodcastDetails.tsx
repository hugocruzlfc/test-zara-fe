import { useParams } from "react-router-dom";
import { usePodcastDetails } from "../../hooks";
import { Loader } from "../../components";

export default function PodcastDetails() {
  const podcastId = useParams();
  const { currentPodcast, detailsLoading } = usePodcastDetails({
    podcastId: podcastId.id,
  });

  console.log(detailsLoading);
  console.log(currentPodcast);
  return (
    <div>
      {detailsLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 w-full">
          <div className="flex justify-center">
            <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
              <div className="flex flex-col text-center p-6">
                <img
                  src={currentPodcast?.artworkUrl30}
                  alt={currentPodcast?.trackName}
                  width="350"
                />
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 pt-5">
                  Title: {currentPodcast?.trackName}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                  Author: {currentPodcast?.artistName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5 w-full">
              <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <div className="flex flex-col justify-start p-2">
                  <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Episodes: {currentPodcast?.trackCount}
                  </h5>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <div className="flex flex-col justify-start p-6">
                  <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Url: {currentPodcast?.trackViewUrl}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300">
                    Last updated 3 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
