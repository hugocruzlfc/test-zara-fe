import { Podcast } from "./Podcast";

export type PodcastContextType = {
  podcasts: Podcast[];
  setPodcasts: (podcasts: Podcast[]) => void;
  loading: boolean;
};
