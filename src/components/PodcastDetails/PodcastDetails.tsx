import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { usePodcastDetails } from "../../hooks";
import { Loader } from "../../components";

export default function PodcastDetails() {
  const podcastId = useParams();
  const { currentPodcast, detailsLoading } = usePodcastDetails({
    podcastId: podcastId.id,
  });

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
              <div className="flex flex-col text-center rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                <div className="flex flex-col p-6">
                  <table className="table-auto">
                    <tbody>
                      <tr>
                        <td>Genre Name: </td>
                        <td>{currentPodcast?.primaryGenreName}</td>
                      </tr>
                      <tr>
                        <td>Country: </td>
                        <td>{currentPodcast?.country}</td>
                      </tr>
                      <tr>
                        <td>Release Date:</td>
                        <td>
                          {moment(currentPodcast?.releaseDate).format(
                            "DD/MM/YYYY"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Explicitness:</td>
                        <td>{currentPodcast?.collectionExplicitness}</td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <h5
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <a
                      href={currentPodcast?.trackViewUrl!}
                      target="_blank"
                    >
                      See more details in Apple Podcast
                    </a>
                  </h5>
                  <br />

                  <Link
                    to={`/podcast/${podcastId.id}/episode/${currentPodcast?.collectionId}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex gap-2 ml-5"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Listen to:
                    <span>
                      <svg
                        fill="#000000"
                        width="20px"
                        height="20px"
                        viewBox="-2.3 0 122.88 122.88"
                        version="1.1"
                        id="Layer_1"
                      >
                        <g>
                          <path d="M111.85,108.77c-3.47,4.82-8.39,8.52-14.13,10.48c-0.26,0.12-0.55,0.18-0.84,0.18c-0.28,0-0.56-0.06-0.82-0.17v0.06 c0,1.96-1.6,3.56-3.57,3.56l-7.68,0c-1.96,0-3.57-1.6-3.57-3.56l0-55.13c0-1.96,1.6-3.57,3.57-3.57h7.68c1.96,0,3.57,1.6,3.57,3.57 v0.34c0.26-0.12,0.54-0.18,0.82-0.18c0.22,0,0.44,0.04,0.64,0.1l0,0.01c4.36,1.45,8.26,3.92,11.42,7.11V59.15 c0-14.89-4.99-27.63-13.81-36.6l-3.91,5.83c-7.95-8.75-19.4-14.27-32.08-14.27c-12.76,0-24.29,5.59-32.24,14.45l-4.73-5.78 C13.47,31.65,8.54,44.21,8.54,59.15V73.4c3.4-4.08,7.92-7.22,13.07-8.93l0-0.01c0.21-0.07,0.43-0.11,0.64-0.11 c0.28,0,0.57,0.06,0.82,0.17v-0.34c0-1.96,1.61-3.57,3.57-3.57l7.68,0c1.96,0,3.57,1.6,3.57,3.57v55.13c0,1.96-1.61,3.56-3.57,3.56 h-7.68c-1.96,0-3.57-1.6-3.57-3.56v-0.06c-0.25,0.11-0.53,0.17-0.82,0.17c-0.3,0-0.58-0.07-0.83-0.18 c-5.74-1.96-10.66-5.66-14.13-10.48c-1.82-2.52-3.24-5.34-4.17-8.37l-3.12,0V59.15c0-16.27,6.65-31.05,17.37-41.77 C28.09,6.66,42.88,0,59.14,0c16.27,0,31.06,6.66,41.77,17.37c10.72,10.72,17.37,25.5,17.37,41.77v41.25h-2.27 C115.1,103.39,113.68,106.23,111.85,108.77L111.85,108.77L111.85,108.77z" />
                        </g>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
