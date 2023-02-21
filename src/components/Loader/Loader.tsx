import React from "react";
import ContentLoader from "react-content-loader";

export default function Loader() {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect
        x="159"
        y="-9"
        rx="3"
        ry="3"
        width="302"
        height="21"
      />
      <rect
        x="12"
        y="0"
        rx="3"
        ry="3"
        width="113"
        height="194"
      />
      <rect
        x="162"
        y="31"
        rx="3"
        ry="3"
        width="410"
        height="153"
      />
    </ContentLoader>
  );
}
