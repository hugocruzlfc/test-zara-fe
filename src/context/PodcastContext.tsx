import { createContext, useState, useEffect } from "react";
import { getPodcasts } from "../services";
import { Podcast, PodcastContextType } from "../types";

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
        id: "",
      },
      label: "",
    },
    artist: {
      attributes: {
        href: "",
      },
      label: "",
    },
    contentType: {
      attributes: {
        label: "",
        term: "",
      },
    },
    image: [],
    name: {
      label: "",
    },
    price: {
      attributes: {
        amount: "",
        currency: "",
      },
      label: "",
    },
    releaseDate: {
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

  useEffect(() => {
    setLoading(true);
    getPodcasts().then((response) => {
      setLoading(false);
      setPodcasts(response.feed.entry);
    });
  }, []);

  return (
    <PodcastsContext.Provider value={{ podcasts, setPodcasts, loading }}>
      {children}
    </PodcastsContext.Provider>
  );
};
