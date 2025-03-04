import React from 'react';
import { NewspaperClipping } from '@phosphor-icons/react';

export default function LeakedDocuments() {
  const leakedDocuments = [
    {
      title: "LEAKED: Internal Bank Meeting Minutes",
      date: "2025-01-15",
      content: "Discussion of 'resource allocation strategy' reveals preferential treatment for certain projects. Multiple references to 'acceptable levels of community oversight' suggest deliberate limitation of transparency.",
      source: "Anonymous Bank Insider"
    },
    {
      title: "EXPOSED: The Offshore Repository Network",
      date: "2025-01-20",
      content: "Investigation reveals network of private repositories in tax havens. Source code and financial data stored in jurisdictions with minimal oversight requirements.",
      source: "Digital Forensics Report #2025-113"
    },
    {
      title: "REVEALED: The Control Matrix",
      date: "2025-01-25",
      content: "Internal documentation shows systematic control of communication channels. Evidence of message suppression and narrative manipulation in major Slack channels.",
      source: "Former HCB Moderator"
    }
  ];

  return (
    <div className="my-12">
      <div className="flex items-center gap-2 mb-6">
        <NewspaperClipping size={32} className="text-accent-9" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">LEAKED DOCUMENTS</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leakedDocuments.map((doc, index) => (
          <div 
            key={index} 
            className="border border-accent-9 p-4 rounded bg-black hover:bg-gray-900 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-11">{doc.title}</h3>
            <p className="text-gray-300 mb-4">{doc.content}</p>
            <div className="flex justify-between text-sm">
              <span className="text-accent-9">{doc.date}</span>
              <span className="text-accent-11">Source: {doc.source}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}