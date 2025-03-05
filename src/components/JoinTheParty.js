import React from 'react';
import { Handshake, Star } from '@phosphor-icons/react';

export default function JoinTheParty() {
  return (
    <div className="my-12 border-2 border-accent-9 p-6 rounded bg-black">
      <div className="flex items-center gap-2 mb-6">
        <Handshake size={32} className="text-accent-9" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">VOTE NOW - DOUBLE POWER!</h2>
      </div>
      
      <div className="space-y-6">
        <p className="text-lg text-accent-11">
          URGENT: Comrade! Voting is LIVE and you have TWO VOTES! 
          Cast both votes for HCP to double your revolutionary impact!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Use BOTH votes for maximum impact",
            "Strengthen our leading position",
            "Support open source revolution",
            "Vote HCP twice for victory"
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
            href="https://forms.fillout.com/t/kpB5PjqHmbus"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-9 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
          >
            CAST YOUR TWO VOTES NOW!
          </a>
          <p className="mt-4 text-sm text-accent-11 font-bold">
            Remember: You have TWO votes - Use them both for HCP!
          </p>
        </div>
      </div>
    </div>
  );
}