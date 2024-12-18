import React from 'react';
import AppleIcon from "../icons/appleIcon";
import BandcampIcon from "../icons/bandcampIcon";
import MonstercatPlayerLargeIcon from "../icons/monstercatPlayerLargeIcon";
import SoundcloudIcon from "../icons/soundcloudIcon";
import SpotifyIcon from "../icons/spotifyIcon";
import YoutubeIcon from "../icons/youtubeIcon";

const StreamItYourWay: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-start mt-20 lg:mt-0">
      <h2 className="uppercase text-xl sm:text-2xl md:text-4xl xl:text-5xl font-monextRegular font-bold">Stream it your way</h2>
      <ul className="flex flex-row mt-4 md:mt-8">
        <li className="flex items-center justify-center border px-2 py-3 md:px-4 md:py-6">
          <a href="#">
            <MonstercatPlayerLargeIcon className="w-24" />
          </a>
        </li>
        <li className="flex items-center justify-center border p-3 md:p-6">
          <a href="#">
            <BandcampIcon />
          </a>
        </li>
        <li className="flex items-center justify-center border p-3 md:p-6">
          <a href="#">
            <SoundcloudIcon />
          </a>
        </li>
        <li className="flex items-center justify-center border p-3 md:p-6">
          <a href="#">
            <AppleIcon />
          </a>
        </li>
        <li className="flex items-center justify-center border p-3 md:p-6">
          <a href="#">
            <YoutubeIcon />
          </a>
        </li>
        <li className="flex items-center justify-center border p-3 md:p-6">
          <a href="#">
            <SpotifyIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default StreamItYourWay;