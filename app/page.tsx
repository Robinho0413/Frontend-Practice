import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-tile bg-repeat">
      <div className="relative h-screen bg-hero bg-no-repeat bg-cover bg-center flex flex-row items-center justify-center gap-32 mask-gradient">
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm"></div>
        <div className="relative z-10 flex items-center justify-center gap-32">
          <div>
            <Image src="/images/cover.webp" alt="Cover" width={500} height={500} />
          </div>
          <div className="uppercase font-monextBlack">
            <h1 className="text-3xl tracking-widest font-stroke">Level days</h1>
            <h2 className="text-2xl">Conro</h2>
            <div className="flex flex-row gap-2 mt-4">
              <Button>
                <Image src="/icons/play.svg" alt="Play" width={20} height={20} className="mr-2" />
                Listen now
              </Button>
              <Button variant="secondary">
                <Image src="/icons/share.svg" alt="Play" width={20} height={20} className="mr-2" />
                Share
              </Button>
            </div>
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
