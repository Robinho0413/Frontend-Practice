"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import MonstercatPlayerIcon from '../icons/monstercatPlayerIcon';
import DiscordIcon from '../icons/discordIcon';
import TiktokIcon from '../icons/tiktokIcon';
import InstagramIcon from '../icons/instagramIcon';
import TwitterIcon from '../icons/twitterIcon';
import TwitchIcon from '../icons/twitchIcon';
import FacebookIcon from '../icons/facebookIcon';
import Button from '../ui/button';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMusicOpen, setIsMusicOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isEventsOpen, setIsEventsOpen] = useState(false);
    const [isProgrammingOpen, setIsProgrammingOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (setSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
        setSubMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 font-monextRegular font-bold text-md">
            <div className="px-4 xl:px-16 py-2 xl:py-6 flex justify-between items-center w-full bg-black/80 xl:bg-transparent">
                <div className="flex items-center">
                    <Image src="/images/monstercat-logo.webp" alt="monstercat-logo" width={48} height={48} className='w-9 sm:w-12' />
                </div>
                <ul className='inset hidden xl:absolute top-24 right-0 xl:w-12 sm:flex xl:flex-col space-x-6 xl:space-x-0 xl:space-y-6 justify-center xl:justify-normal text-center items-center mr-0 xl:mr-14 h-full'>
                    <li>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TiktokIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TwitterIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <TwitchIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FacebookIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <DiscordIcon />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MonstercatPlayerIcon className='w-6' />
                        </a>
                    </li>
                </ul>
                <div>
                    <button onClick={toggleMenu} className="focus:outline-none flex items-center justify-center">
                        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} className='text-white' />
                    </button>
                </div>
                <div className={`fixed flex flex-col bottom-0 top-0 right-0 w-full sm:w-[26rem] bg-black shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='flex flex-row justify-between p-8'>
                        <Image src="/images/monstercat-logo-white.svg" alt="monstercat-logo" width={180} height={180} />
                        <button onClick={toggleMenu} className="top-4 right-4 focus:outline-none">
                            <Image src="/icons/close.svg" alt="Close" width={32} height={32} />
                        </button>
                    </div>
                    <ul className="space-y-1 uppercase overflow-y-auto h-[calc(100%-200px)] px-8 custom-scrollbar mr-8">
                        <li className="py-2">
                            <button onClick={() => toggleSubMenu(setIsMusicOpen)} className="flex gap-3 w-full text-left focus:outline-none uppercase">
                                Music
                                <Image
                                    src="/icons/chevronRight.svg"
                                    alt="Music"
                                    width={22}
                                    height={22}
                                    className={`transform transition-transform duration-100 ${isMusicOpen ? '-rotate-90' : ''}`}
                                />
                            </button>
                            {isMusicOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Our music</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Instinct</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Uncaged</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Silk</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="py-2">
                            <a href="#">Artists</a>
                        </li>
                        <li className="py-2">
                            <button onClick={() => toggleSubMenu(setIsAboutOpen)} className="flex gap-3 w-full text-left focus:outline-none uppercase">
                                About
                                <Image
                                    src="/icons/chevronRight.svg"
                                    alt="About"
                                    width={22}
                                    height={22}
                                    className={`transform transition-transform duration-100 ${isAboutOpen ? '-rotate-90' : ''}`}
                                />
                            </button>
                            {isAboutOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">About Monstercat</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Diversity & Inclusion</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Code of Ethics</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Environmental</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Careers</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="py-2">
                            <a href="#">News</a>
                        </li>
                        <li className="py-2">
                            <button onClick={() => toggleSubMenu(setIsEventsOpen)} className="flex gap-3 w-full text-left focus:outline-none uppercase">
                                Events
                                <Image
                                    src="/icons/chevronRight.svg"
                                    alt="Events"
                                    width={22}
                                    height={22}
                                    className={`transform transition-transform duration-100 ${isEventsOpen ? '-rotate-90' : ''}`}
                                />
                            </button>
                            {isEventsOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Monstercat Events Experience</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Upcoming Events</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="py-2">
                            <button onClick={() => toggleSubMenu(setIsProgrammingOpen)} className="flex gap-3 w-full text-left focus:outline-none uppercase">
                                Programming
                                <Image
                                    src="/icons/chevronRight.svg"
                                    alt="Programming"
                                    width={22}
                                    height={22}
                                    className={`transform transition-transform duration-100 ${isProgrammingOpen ? '-rotate-90' : ''}`}
                                />
                            </button>
                            {isProgrammingOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150 normal-case">
                                        <a href="#">MonstercatTV</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Call of the Wild</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Silk Showcase</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Upcoming Shows</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="py-2">
                            <a href="#">Gold</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Partners</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Press</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Player</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Shop</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Lost civilization</a>
                        </li>
                    </ul>
                    <div className='p-8 flex flex-col space-y-8'>
                        <ul className='flex flex-row space-x-4 items-center'>
                            <li>
                                <a href="#">
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TiktokIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <TwitchIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <DiscordIcon />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MonstercatPlayerIcon className='w-6' />
                                </a>
                            </li>
                        </ul>
                        <div className='flex items-center space-x-3 uppercase text-sm'>
                            <Button variant='secondary' size='small'>
                                Sign in
                            </Button>
                            <div>
                                <span>Or <Link href={'/'}>Sign up</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;