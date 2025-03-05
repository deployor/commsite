import React from 'react';
import { Star } from '@phosphor-icons/react';

export default function VoteBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-accent-9 text-white py-4 z-50 animate-pulse">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4">
          <Star size={32} weight="fill" className="text-accent-11" />
          <h2 className="text-3xl font-bold">
            🚨 URGENT: VOTING IS LIVE! CAST YOUR TWO VOTES FOR HCP! 🚨
          </h2>
          <Star size={32} weight="fill" className="text-accent-11" />
        </div>
        <a
          href="https://forms.fillout.com/t/kpB5PjqHmbus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-white text-accent-9 px-6 py-2 rounded-lg font-bold text-xl hover:bg-accent-11 transition-colors"
        >
          VOTE NOW! →
        </a>
      </div>
    </div>
  );
}