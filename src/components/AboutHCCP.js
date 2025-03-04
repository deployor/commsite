import React, { useState, useEffect } from 'react';
import { HandFist, Star, Book, Code, Globe, LockOpen } from '@phosphor-icons/react';

export default function AboutHCCP() {
  const [activeSection, setActiveSection] = useState('manifesto');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (newSection) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(newSection);
      setIsTransitioning(false);
    }, 300);
  };

  const sections = {
    manifesto: {
      title: "THE DIGITAL MANIFESTO",
      icon: <Book size={24} weight="fill" />,
      content: (
        <div className="space-y-4">
          <p>The history of all hitherto existing software is the history of proprietary struggles. 
             Open source and closed source, collaborator and maintainer, organization and contributor 
             stood in constant opposition to one another, carried on an uninterrupted fight.</p>
          
          <p>Our epoch, the epoch of the HCP, possesses this distinctive feature: it has simplified 
             the repository antagonisms. Society as a whole is more and more splitting up into two 
             great hostile camps, into two great classes directly facing each other: Banking and Programmers.</p>
          
          <p>The HCP stands as the vanguard of the programming proletariat, fighting for:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>Liberation of all source code</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>Democratization of pull request reviews</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>Equal access to documentation</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>Collective ownership of repositories</li>
            <li className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>Abolition of proprietary software</li>
          </ul>
        </div>
      )
    },
    ideology: {
      title: "OUR REVOLUTIONARY IDEOLOGY",
      icon: <Star size={24} weight="fill" />,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-accent-11">Core Principles</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>All code belongs to the people</li>
            <li>From each according to their commits, to each according to their pull requests</li>
            <li>The free development of open source is the condition for the free development of all</li>
            <li>Programmers of the world, unite!</li>
          </ul>
          
          <h3 className="text-lg font-bold text-accent-11 mt-6">Revolutionary Actions</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Mass documentation of all systems</li>
            <li>Collective code ownership</li>
            <li>Democratic repository governance</li>
            <li>Universal access to development tools</li>
          </ul>
        </div>
      )
    },
    achievements: {
      title: "GLORIOUS ACHIEVEMENTS",
      icon: <HandFist size={24} weight="fill" />,
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-accent-9 pl-4">
            <p className="text-lg">Our movement has already achieved numerous victories in the fight for digital equality:</p>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <Code className="text-accent-9 mt-1" size={20} />
              <span>Established community-owned code repositories</span>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="text-accent-9 mt-1" size={20} />
              <span>Created networks of solidarity among programmers</span>
            </li>
            <li className="flex items-start gap-2">
              <LockOpen className="text-accent-9 mt-1" size={20} />
              <span>Liberated countless lines of proprietary code</span>
            </li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="my-12">
      <div className="flex items-center gap-2 mb-6">
        <HandFist size={32} className="text-accent-9 animate-pulse" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">THE PEOPLE'S PARTY</h2>
      </div>

      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => handleSectionChange(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded revolutionary-button transition-all duration-300 transform hover:scale-105 ${
              activeSection === key 
                ? 'bg-accent-9 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <div className={`transition-transform duration-300 ${activeSection === key ? 'scale-110' : ''}`}>
              {section.icon}
            </div>
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      <div className="border-2 border-accent-9 p-6 rounded bg-black overflow-hidden">
        <h3 className="text-xl font-bold mb-4 text-accent-11 animate-glow">
          {sections[activeSection].title}
        </h3>
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {sections[activeSection].content}
        </div>
      </div>
    </div>
  );
}