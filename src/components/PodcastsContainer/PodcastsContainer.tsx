import { useEffect, useContext } from "react";
import { PodcastsContext } from "../../context";
import { PodcastContextType } from "../../types";
import { PodcastItem } from "../PodcastItem";

export default function PodcastsContainer() {
  const { podcasts, setPodcasts, loading } = useContext(
    PodcastsContext
  ) as PodcastContextType;
  console.log(podcasts);
  return (
    <div className="grid grid-cols-5 gap-4">
      {!loading &&
        podcasts.map((podcast) => (
          <PodcastItem
            podcast={podcast}
            key={podcast.id.label}
          />
        ))}
    </div>
  );
}
