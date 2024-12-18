// components/Footer.tsx
import React from 'react';
import DiscordIcon from '../icons/discordIcon';
import FacebookIcon from '../icons/facebookIcon';
import InstagramIcon from '../icons/instagramIcon';
import MonstercatPlayerIcon from '../icons/monstercatPlayerIcon';
import TiktokIcon from '../icons/tiktokIcon';
import TwitchIcon from '../icons/twitchIcon';
import TwitterIcon from '../icons/twitterIcon';
import YoutubeIcon from '../icons/youtubeIcon';
import SpotifyIcon from '../icons/spotifyIcon';
import AppleIcon from '../icons/appleIcon';
import TrillerIcon from '../icons/trillerIcon';
import ArrowRightIcon from '../icons/arrowRight';
import Button from '../ui/button';

const Footer = () => {
  return (
    <footer className="text-white py-10 bg-tile bg-repeat">
      <div className='px-4 w-full md:w-[712px] lg:w-[850px] xl:w-[1070px] max-w-7xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-between md:items-start border-t border-white pt-12 pb-6">
          <div className="flex flex-col gap-2 w-full">
            <ul className="font-monextRegular font-bold text-sm md:text-lg space-y-1 uppercase">
              <li>ABOUT MONSTERCAT</li>
              <li>CONTACT US</li>
              <li>CAREERS</li>
              <li>NEWS</li>
              <li>PRESS</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <ul className="font-monextRegular font-bold text-sm md:text-lg space-y-1">
              <li>TERMS OF SERVICE</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0 w-full">
            <h3 className="font-monextRegular font-bold text-sm md:text-lg uppercase opacity-50 mb-4">MONSTERCAT NEWS</h3>
            <p className="font-normal text-md italic">
              Don't miss a thing, stay up to date with the latest news from us.
            </p>
            <div className="mt-4 flex items-center border-b border-white/20">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-white outline-none w-full placeholder-white/30 text-xl py-3"
              />
              <Button variant="transparent" size='icon'>
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white my-6 lg:my-8" />

        <div className="flex flex-col md:flex-row lg:justify-between max-w-7xl mx-auto">
          <p className="font-normal text-md italic mb-2">
            2011 - 2024 © Monstercat, All Rights Reserved
          </p>
          <ul className='flex gap-4 mt-6 md:mt-0 items-center flex-wrap'>
            <li>
              <a href="#">
                <YoutubeIcon />
              </a>
            </li>
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
                <SpotifyIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <AppleIcon />
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
                <TrillerIcon className='w-5' />
              </a>
            </li>
            <li>
              <a href="#">
                <MonstercatPlayerIcon className='w-6' />
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col items-center text-center my-16 text-xs italic gap-4'>
          <p>We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.</p>
          <p>We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
