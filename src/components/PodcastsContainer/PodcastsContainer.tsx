import { useContext, useState } from "react";
import { PodcastsContext } from "../../context";
import { PodcastContextType } from "../../types";
import { PodcastItem } from "../PodcastItem";
import { Search } from "../Search";

export default function PodcastsContainer() {
  const { podcasts, setPodcasts, loading } = useContext(
    PodcastsContext
  ) as PodcastContextType;
  const [search, setSearch] = useState("");

  //console.log(podcasts);

  const podcastFiltered = !search
    ? podcasts
    : podcasts.filter(
        (podcast) =>
          podcast.title.label
            .toLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          podcast["im:artist"].label.includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="grid grid-cols-3 gap-6">
        {!loading &&
          podcastFiltered.map((podcast) => (
            <PodcastItem
              podcast={podcast}
              key={podcast?.id?.label}
            />
          ))}
      </div>
    </>
  );
}
