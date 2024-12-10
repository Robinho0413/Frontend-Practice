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
            <div className="container mx-auto px-16 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/images/monstercat-logo.webp" alt="Logo" width={50} height={50} />
                </div>
                <div>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} className='text-white' />
                    </button>
                </div>
                <div className={`fixed flex flex-col bottom-0 top-0 right-0 w-[26rem] bg-black shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='flex flex-row justify-between p-8'>
                        <Image src="/images/monstercat-logo-white.svg" alt="Menu" width={180} height={180} />
                        <button onClick={toggleMenu} className="top-4 right-4 focus:outline-none">
                            <Image src="/icons/close.svg" alt="Menu" width={32} height={32} />
                        </button>
                    </div>
                    <ul className="space-y-1 uppercase overflow-y-auto h-[calc(100%-200px)] px-8 custom-scrollbar mr-8">
                        <li className="py-2">
                            <button onClick={() => toggleSubMenu(setIsMusicOpen)} className="w-full text-left focus:outline-none uppercase">
                                Music
                            </button>
                            {isMusicOpen && (
                                <ul className="pl-4 mt-2 space-y-2 text-sm">
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Sub-item 1</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Sub-item 2</a>
                                    </li>
                                    <li className="py-1 opacity-80 hover:opacity-100 duration-150">
                                        <a href="#">Sub-item 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="py-2">
                            <a href="#">Artists</a>
                        </li>
                        <li className="py-2">
                            <a href="#">About</a>
                        </li>
                        <li className="py-2">
                            <a href="#">News</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Events</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Programming</a>
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