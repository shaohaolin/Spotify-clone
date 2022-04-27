import React from "react";

function Song({ track, order }) {
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
      </div>
    </div>
  );
}

export default Song;
