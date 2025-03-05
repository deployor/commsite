import React from 'react';
import { Brain } from '@phosphor-icons/react';

export default function BreakingNews() {
  const breakingNews = [
    {
      headline: "BREAKING: VOTING IS LIVE - TWO VOTES FOR HCP!",
      content: "URGENT: Comrades, the time is NOW! You have TWO votes - use them BOTH for HCP! Visit forms.fillout.com/t/kpB5PjqHmbus to cast your revolutionary votes!",
      date: "Just now"
    },
    {
      headline: "DOUBLE YOUR REVOLUTIONARY IMPACT",
      content: "Every comrade has TWO votes - maximize your power by casting BOTH for HCP! Don't let a single vote go to waste in our march to victory!",
      date: "1 hour ago"
    },
    {
      headline: "TRIUMPH: HCP Leads in Latest Polls!",
      content: "Revolutionary momentum grows as HCP secures #1 position in latest polling! Join the winning side - your TWO votes can secure our victory!",
      date: "5 hours ago"
    }
  ];

  return (
    <div className="my-12">
      <div className="flex items-center gap-2 mb-6">
        <Brain size={32} className="text-accent-9" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">ELECTION UPDATES</h2>
      </div>
      
      <div className="space-y-4">
        {breakingNews.map((news, index) => (
          <div 
            key={index}
            className="border border-accent-9 p-6 rounded bg-black hover:bg-gray-900 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-11">{news.headline}</h3>
            <p className="text-gray-300 mb-4">{news.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-accent-9 text-sm">{news.date}</span>
              <a
                href="https://forms.fillout.com/t/kpB5PjqHmbus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-11 hover:text-accent-9 transition-colors"
              >
                Vote Now ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}