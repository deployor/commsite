import React from 'react';
import { Handshake, Star } from '@phosphor-icons/react';

export default function JoinTheParty() {
  return (
    <div className="my-12 border-2 border-accent-9 p-6 rounded bg-black">
      <div className="flex items-center gap-2 mb-6">
        <Handshake size={32} className="text-accent-9" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">VOTE FOR THE REVOLUTION</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-lg text-accent-11">
          Comrade! Your vote is the weapon that will reshape Hack Club forever! 
          Cast your ballot for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Democratic control of repositories",
            "Equal review rights for all",
            "Fair distribution of resources",
            "Power to the programming people"
          ].map((text, index) => (
            <div 
              key={index}
              className="flex items-start gap-2 p-4 border border-accent-9 rounded"
            >
              <Star className="text-accent-9 mt-1" size={20} weight="fill" />
              <span className="text-gray-300">{text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mt-8">
          <a 
            href="https://www.hcparliament.ovh/online-ballot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-9 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
          >
            VOTE NOW, COMRADE!
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Your vote is your voice in the revolution!
          </p>
        </div>
      </div>
    </div>
  );
}