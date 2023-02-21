import axios from "axios";

const ALL_PODCAST_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const PODCAST_DETAILS_URL = "https://itunes.apple.com/lookup?id={podcastId}";

export const getPodcasts = async () => {
  const request = axios.get(ALL_PODCAST_URL);
  const response = await request;
  return response.data;
};

export const getPodcastDetails = async (podcastId: string) => {
  const request = axios.get(
    PODCAST_DETAILS_URL.replace("{podcastId}", podcastId)
  );
  const response = await request;
  return response.data;
};
