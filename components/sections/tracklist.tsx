import React from 'react';
import PlayIcon from '../icons/playIcon';
import ShareIcon from '../icons/shareIcon';

interface Track {
    id: number;
    title: string;
    artist: string;
    duration: string; // Ajout de la durée
}

interface TracklistProps {
    tracks: Track[];
}

const Tracklist: React.FC<TracklistProps> = ({ tracks }) => {
    return (
        <div className="relative w-full flex flex-col items-start mt-20">
            <h2 className="uppercase text-xl sm:text-2xl md:text-4xl xl:text-5xl font-monextRegular font-bold">Track list</h2>
            <ul className='w-full mt-4'>
                {tracks.map(track => (
                    <li key={track.id}>
                        <div className='flex flex-row items-center gap-8 py-4 pl-1'>
                            <p className='text-lg'>{track.id}</p>
                            <div className='flex flex-row items-center gap-6 w-full'>
                                <a href="">
                                    <PlayIcon className='w-6 h-6' />
                                </a>
                                <div className='flex flex-col w-full'>
                                    <p className='text-lg sm:text-xl font-semibold text-nowrap'>{track.title}</p>
                                    <p className='font-semibold'>{track.artist}</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-1 md:gap-8 xl:gap-12'>
                                <p className='text-lg'>
                                    {track.duration}
                                </p>
                                <a href="">
                                    <ShareIcon className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracklist;