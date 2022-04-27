import React from "react";
import { useRecoilState } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist?.tracks.items.map((track, index) => (
        <Song track={track} key={track.id} order={index} />
      ))}
    </div>
  );
}

export default Songs;
