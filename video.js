import React from "react";
import ReactPlayer from "react-player";

export default function Video({video}) {

  return (
      <ReactPlayer
        className="bg-video"
        url={video}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height=""
      />
  );
}
