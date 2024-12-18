import React from 'react';


const MusicVideo: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-start my-14">
      <h2 className="uppercase text-xl sm:text-2xl md:text-4xl xl:text-5xl font-monextRegular font-bold">Music Video</h2>
      <iframe
        src="https://www.youtube.com/embed/7nObtWENgxA?si=gUH-fLeUT4AADtV0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className='w-full aspect-video mt-4 md:mt-8'>
      </iframe>
    </div>
  );
};

export default MusicVideo;