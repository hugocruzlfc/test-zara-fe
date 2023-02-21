import React from "react";
import { Podcast } from "../../types";

interface Props {
  podcast: Podcast;
}

export default function PodcastItem({ podcast }: Props) {
  const temp = podcast?.id.attributes;
  console.log();
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        /> */}
        <div className="px-4 py-4">
          <div className="font-semibold text-base mb-2">
            {podcast?.title?.label}
          </div>
          <p className="text-gray-500 text-base">{podcast?.artist?.label}</p>
        </div>
      </div>
    </>
  );
}
