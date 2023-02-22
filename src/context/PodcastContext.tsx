import { createContext, useState, useEffect } from "react";
import { getPodcasts } from "../services";
import {
  Podcast,
  PodcastContextType,
  PodcastType,
  LocalStorageKeys,
} from "../types";
import { useLocalStorage } from "../hooks";
import { Moment } from "moment/moment";
import moment from "moment";

export const PodcastsContext = createContext<PodcastContextType | null>(null);

const INITIAL_STATE: Podcast[] = [
  {
    category: {
      attributes: {
        id: "",
        label: "",
        scheme: "",
        term: "",
      },
    },
    id: {
      attributes: {
        [PodcastType.id]: "",
      },
      label: "",
    },
    [PodcastType.artist]: {
      attributes: {
        href: "",
      },
      label: "",
    },
    [PodcastType.contentType]: {
      attributes: {
        label: "",
        term: "",
      },
    },
    [PodcastType.image]: [],
    [PodcastType.name]: {
      label: "",
    },
    [PodcastType.price]: {
      attributes: {
        amount: "",
        currency: "",
      },
      label: "",
    },
    [PodcastType.releaseDate]: {
      attributes: {
        label: "",
      },
      label: "",
    },
    link: {
      attributes: {
        href: "",
        rel: "",
        type: "",
      },
    },
    rights: {
      label: "",
    },
    summary: {
      label: "",
    },
    title: {
      label: "",
    },
  },
];

interface Props {
  children: React.ReactNode;
}

export const PodcastContextProvider = ({ children }: Props) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>(INITIAL_STATE);
  const [loading, setLoading] = useState(true);
  const [podcastsStorage, setPodcastsStorage] = useLocalStorage<Podcast[]>(
    LocalStorageKeys.PODCASTS,
    []
  );
  const [fetchTime, setFetchTime] = useLocalStorage<string>(
    LocalStorageKeys.FETCH_TIME,
    ""
  );
  const actualTime = moment().utc().format("YYYY-MM-DD HH:mm:ss");

  useEffect(() => {
    let timeElapsed = 0;
    if (fetchTime === "") {
      setFetchTime(actualTime);
    } else {
      const timeToMoment = moment(fetchTime);
      timeElapsed = timeToMoment.diff(actualTime, "hours") * -1;
    }

    //
    console.log(timeElapsed);
    if (timeElapsed < 24) {
      if (podcastsStorage.length === 0) {
        setLoading(true);
        handleFetch();
      } else {
        setPodcasts(podcastsStorage);
        setLoading(false);
      }
    } else {
      setPodcasts(podcastsStorage);
      setLoading(false);
    }
  }, []);

  const handleFetch = () =>
    getPodcasts()
      .then((response) => {
        setLoading(false);
        setPodcasts(response.feed.entry);
        setPodcastsStorage(response.feed.entry);
      })
      .catch((error) => console.log(error.message));

  return (
    <PodcastsContext.Provider value={{ podcasts, setPodcasts, loading }}>
      {children}
    </PodcastsContext.Provider>
  );
};
