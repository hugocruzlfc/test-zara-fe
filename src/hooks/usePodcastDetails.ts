import React, { useState, useEffect } from "react";
import { PodcastDetails } from "./../types";
import { getPodcastDetails } from "../services";

interface Props {
  podcastId?: string;
}

export default function usePodcastDetails({ podcastId }: Props) {
  const [currentPodcast, setCurrentPodcast] = useState<PodcastDetails | null>(
    null
  );
  const [detailsLoading, setDetailsLoading] = useState(true);

  useEffect(() => {
    setDetailsLoading(true);
    if (podcastId) {
      getPodcastDetails(podcastId).then((data) => {
        setCurrentPodcast(data.results[0]);
        setDetailsLoading(false);
      });
    }
  }, []);

  return { currentPodcast, detailsLoading };
}
