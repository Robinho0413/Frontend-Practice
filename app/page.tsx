import Image from "next/image";
import Button from "@/components/ui/button";
import PlayIcon from "@/components/icons/playIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Footer from "@/components/sections/footer";
import MonstercatPlayerLargeIcon from "@/components/icons/monstercatPlayerLargeIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import AppleIcon from "@/components/icons/appleIcon";
import BandcampIcon from "@/components/icons/bandcampIcon";
import SoundcloudIcon from "@/components/icons/soundcloudIcon";
import SpotifyIcon from "@/components/icons/spotifyIcon";

export default function Home() {
  return (
    <div className="bg-tile bg-repeat">
      <div className="absolute inset-0 h-screen bg-hero bg-no-repeat bg-cover bg-center mask-gradient brightness-50 blur-sm"></div>
      <div className="mx-auto flex flex-col items-center px-4 w-full sm:w-[500px] md:w-[712px] lg:w-fit max-w-7xl">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 xl:gap-20 lg:h-screen mt-28 sm:mt-28 md:mt-48 lg:mt-16 w-full">
          <div className="relative w-full lg:w-96 xl:w-[500px]">
            <Image src="/images/cover.webp" alt="Cover" width={500} height={500} className="w-full mb-10 md:mb-0" />
            <div className="md:absolute -left-2 bottom-0 md:rotate-[-90deg] origin-bottom-left text-white text-md sm:text-lg md:text-xl font-normal italic">
              <span className="text-primary font-medium">Instinct</span> — Released May 22, 2020
            </div>
          </div>
          <div className="uppercase flex flex-col items-start justify-center text-center w-full lg:w-auto">
            <h1 className="text-xl md:text-3xl xl:text-5xl font-monextBlack tracking-widest font-stroke mb-3">Level days</h1>
            <h2 className="text-md sm:text-xl md:text-2xl xl:text-3xl font-monextRegular font-bold md:mb-8">Conro</h2>
            <div className="flex flex-row gap-2 mt-6">
              <Button>
                <PlayIcon />
                Listen now
              </Button>
              <Button variant="secondary">
                <ShareIcon />
                Share
              </Button>
            </div>
          </div>
        </div>

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

      </div>
      <Footer />
    </div>
  );
}
