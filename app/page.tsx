import Image from "next/image";
import Button from "@/components/ui/button";
import PlayIcon from "@/components/icons/playIcon";
import ShareIcon from "@/components/icons/shareIcon";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="bg-tile bg-repeat">
      <div className="absolute inset-0 h-screen bg-hero bg-no-repeat bg-cover bg-center mask-gradient brightness-50 blur-sm"></div>
      <div className="mx-auto flex flex-col items-center px-4">
        <div className="relative flex flex-col lg:flex-row items-center sm:justify-center gap-8 lg:gap-14 xl:gap-20 h-screen mt-28 sm:mt-40 md:mt-80 lg:mt-16 w-full sm:w-[500px] md:w-[712px] lg:w-full">
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

        <div className="w-full h-screen">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="uppercase text-white text-3xl">Stream it your way</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
