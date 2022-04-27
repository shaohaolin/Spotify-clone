import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const colors = [
  "from-indigo-500",
  "from-purple-500",
  "from-pink-500",
  "from-red-500",
  "from-orange-500",
  "from-yellow-500",
  "from-green-500",
  "from-teal-500",
  "from-blue-500",
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black cursor-pointer space-x-3 opacity-90 hover:opacity-80 rounded-full p-1 pr-2 text-white">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section>
        <div
          className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} text-white p-8 h-80`}
        ></div>
      </section>
    </div>
  );
}

export default Center;