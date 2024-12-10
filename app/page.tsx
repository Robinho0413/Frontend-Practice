import Image from "next/image";
import Button from "@/components/ui/button";
import PlayIcon from "@/components/icons/playIcon";
import ShareIcon from "@/components/icons/shareIcon";

export default function Home() {
  return (
    <div className="bg-tile bg-repeat">
      <div className="absolute inset-0 h-screen bg-hero bg-no-repeat bg-cover bg-center mask-gradient brightness-50 blur-sm"></div>
      <div className="relative flex items-center justify-center gap-20 h-screen mt-16">
        <div className="relative">
          <Image src="/images/cover.webp" alt="Cover" width={500} height={500} />
          <div className="absolute -left-2 bottom-0 rotate-[-90deg] origin-bottom-left text-white text-xl font-normal italic">
            <span className="text-primary font-medium">Instinct</span> — Released May 22, 2020
          </div>
        </div>
        <div className="uppercase">
          <h1 className="text-5xl font-monextBlack tracking-widest font-stroke mb-3">Level days</h1>
          <h2 className="text-3xl font-monextRegular font-bold mb-16">Conro</h2>
          <div className="flex flex-row gap-2 mt-4">
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
  );
}
