"use client";
import { TbPlaylist } from "react-icons/tb";
export default function Library() {
  const onClick = () => {
    //handle upload
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
      </div>
    </div>
  );
}
