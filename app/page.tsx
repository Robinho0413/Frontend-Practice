import Image from "next/image";
import Button from "@/components/ui/button";
import PlayIcon from "@/components/icons/playIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Footer from "@/components/sections/footer";
import StreamItYourWay from "@/components/sections/streamItYourWay";
import Tracklist from "@/components/sections/tracklist";

const tracks = [
  { id: 1, title: 'The Small Things', artist: 'Conro', duration: '3:35' },
  { id: 2, title: 'Track 2', artist: 'Artist 2', duration: '4:20' },
  { id: 3, title: 'Track 3', artist: 'Artist 3', duration: '2:30' },
  { id: 4, title: 'Track 4', artist: 'Artist 4', duration: '3:15' },
  { id: 5, title: 'Track 5', artist: 'Artist 5', duration: '5:00' },
  { id: 6, title: 'Track 6', artist: 'Artist 6', duration: '3:50' },
  { id: 7, title: 'Track 7', artist: 'Artist 7', duration: '4:10' },
  { id: 8, title: 'Track 8', artist: 'Artist 8', duration: '3:25' },
  { id: 9, title: 'Track 9', artist: 'Artist 9', duration: '4:00' },
  { id: 10, title: 'Track 10', artist: 'Artist 10', duration: '3:35' },
  { id: 11, title: 'Track 11', artist: 'Artist 11', duration: '4:45' },
  { id: 12, title: 'Track 12', artist: 'Artist 12', duration: '3:55' },
];

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

        <StreamItYourWay />

        <Tracklist tracks={tracks} />

      </div>
      <Footer />
    </div>
  );
}
