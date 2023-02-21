import React from "react";
import { Podcast } from "../../types";

interface Props {
  podcast: Podcast;
}

export default function PodcastItem({ podcast }: Props) {
  console.log(podcast["im:image"][0]);
  return (
    <>
      <div className="max-w-sm rounded shadow-lg items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-24 rounded-full"
            src={podcast["im:image"][0].label}
            alt={podcast?.title.label}
          />
        </div>
        <div className="pr-2 pl-2 pb-2 text-center">
          <div className="font-semibold text-base mb-2">
            {podcast?.title?.label}
          </div>
          <p className="text-gray-500 text-base">
            {podcast?.["im:artist"].label}
          </p>
        </div>
      </div>
    </>
  );
}
