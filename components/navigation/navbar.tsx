"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-16 py-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/images/monstercat-logo.webp" alt="Logo" width={50} height={50} />
                </div>
                <div>
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} className='text-white' />
                    </button>
                </div>
                <div className={`fixed top-0 right-0 w-[26rem] h-full bg-black shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='flex flex-row justify-between p-8'>
                        <Image src="/images/monstercat-logo-white.svg" alt="Menu" width={180} height={180} />
                        <button onClick={toggleMenu} className="top-4 right-4 focus:outline-none">
                            <Image src="/icons/close.svg" alt="Menu" width={32} height={32} />
                        </button>
                    </div>
                    <ul className="mt-16 space-y-4">
                        <li className="px-4 py-2">
                            <a href="#">Accueil</a>
                        </li>
                        <li className="px-4 py-2">
                            <a href="#">À propos</a>
                        </li>
                        <li className="px-4 py-2">
                            <a href="#">Services</a>
                        </li>
                        <li className="px-4 py-2">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;