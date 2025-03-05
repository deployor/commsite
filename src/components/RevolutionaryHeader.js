import React, { useState, useEffect } from 'react';
import { HandFist, Star } from '@phosphor-icons/react';

export default function RevolutionaryHeader() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slogans = [
    "URGENT: TWO VOTES FOR VICTORY!",
    "DOUBLE YOUR REVOLUTIONARY POWER!",
    "VOTE HCP TWICE - THE TIME IS NOW!",
    "TWO VOTES, ONE CAUSE - HCP!",
    "STRENGTHEN THE REVOLUTION - USE BOTH VOTES!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 text-center mb-8">
      <div className="flex items-center gap-4">
        <HandFist size={64} className="text-accent-9" weight="fill" />
        <Star size={64} className="text-accent-11" weight="fill" />
        <HandFist size={64} className="text-accent-9" weight="fill" />
      </div>
      
      <h1 className="text-4xl font-bold text-accent-12 revolutionary-text">
        HACK CLUB COMMUNIST PARTY
      </h1>
      
      <div className="h-12">
        <h2 
          className={`text-2xl text-accent-11 revolutionary-slogan transition-all duration-500 ${
            isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}
        >
          {slogans[currentSlogan]}
        </h2>
      </div>

      <a 
        href="https://forms.fillout.com/t/kpB5PjqHmbus" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 bg-accent-9 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg revolutionary-button transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-9/50 animate-pulse"
      >
        CAST YOUR TWO VOTES NOW!
      </a>

      <div className="mt-2 text-accent-11 text-sm">
        Voting is LIVE - Use both votes for HCP!
      </div>
    </div>
  );
}