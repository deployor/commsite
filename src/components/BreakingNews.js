import React from 'react';
import { Brain } from '@phosphor-icons/react';

export default function BreakingNews() {
  const breakingNews = [
    {
      headline: "URGENT: Parliamentary Elections Soon Open!",
      content: "The time has come, comrade! Cast your vote now at hcparliament.ovh/online-ballot and help shape the future of Hack Club!",
      date: "1 hour ago"
    },
    {
      headline: "Record Numbers Join The Revolution",
      content: "Thousands of comrades are making their voices heard in these historic elections. Every vote brings us closer to digital liberation!",
      date: "3 hours ago"
    },
    {
      headline: "Your Vote Is Your Power",
      content: "Remember: each vote strengthens our collective voice. Visit hcparliament.ovh/online-ballot to exercise your revolutionary right!",
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