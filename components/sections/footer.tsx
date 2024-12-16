// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-10 px-6">
      {/* Lignes Supérieures */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between border-t border-white/20 pb-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">ABOUT MONSTERCAT</h3>
          <ul className="space-y-1">
            <li>CONTACT US</li>
            <li>CAREERS</li>
            <li>NEWS</li>
            <li>PRESS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">TERMS OF SERVICE</h3>
          <ul className="space-y-1">
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        {/* Section Newsletter */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold text-lg">MONSTERCAT NEWS</h3>
          <p className="text-gray-400 italic">
            Don't miss a thing, stay up to date with the latest news from us.
          </p>
          <div className="mt-4 flex border-b border-gray-500">
            <input
              type="email"
              placeholder="Enter email"
              className="bg-transparent text-white outline-none w-full placeholder-gray-400"
            />
            <button className="text-white ml-2">→</button>
          </div>
        </div>
      </div>

      {/* Ligne Médiane */}
      <div className="border-t border-white/20 my-6" />

      {/* Lignes Inférieures */}
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 italic mb-2">
          2011 - 2024 © Monstercat, All Rights Reserved
        </p>
        <p className="text-sm text-gray-400 italic">
          We acknowledge with gratitude the traditional, ancestral and unceded
          land of the Coast Salish peoples, including the territories of the
          Squamish, Stó:lō and Tsleil-Waututh Nations.
        </p>
      </div>

      {/* Icônes Réseaux Sociaux */}
      <div className="mt-6 flex justify-center gap-6">
        {/* Remplacer par vos icônes réelles */}
        <span className="text-gray-400">YouTube</span>
        <span className="text-gray-400">Instagram</span>
        <span className="text-gray-400">TikTok</span>
        <span className="text-gray-400">Spotify</span>
        <span className="text-gray-400">Facebook</span>
      </div>
    </footer>
  );
};

export default Footer;
