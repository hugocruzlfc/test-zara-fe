import { useState, CSSProperties, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PodcastsContext } from "../../context";
import { PodcastContextType } from "../../types";

export default function Spinner() {
  const { loading } = useContext(PodcastsContext) as PodcastContextType;

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    height: "20px",
    width: "20px",
  };

  return (
    <div className="sweet-loading">
      <ClipLoader
        color="#4299E1"
        loading={loading}
        cssOverride={override}
      />
    </div>
  );
}
