import { useNavigate } from "react-router-dom";
import { Podcast, PodcastType } from "../../types";

interface Props {
  podcast: Podcast;
}

export default function PodcastItem({ podcast }: Props) {
  const navigate = useNavigate();
  console.log(podcast);
  const handleNavigate = () => {
    navigate(`/podcast/${podcast.id.attributes["im:id"]}`);
  };

  return (
    <>
      <div
        className="max-w-sm rounded shadow-lg items-center"
        onClick={handleNavigate}
        style={{ cursor: "pointer" }}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-24 rounded-full"
            src={podcast["im:image"][0]?.label}
            alt={podcast?.title?.label}
          />
        </div>
        <div className="pr-2 pl-2 pb-2 text-center">
          <div className="font-semibold text-base pb-2">
            {podcast?.title?.label}
          </div>
          <p className="text-gray-500 text-base">
            {podcast?.["im:artist"]?.label}
          </p>
        </div>
      </div>
    </>
  );
}
