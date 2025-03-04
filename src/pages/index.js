import React from 'react';
import Layout from '../components/Layout';
import RevolutionaryHeader from '../components/RevolutionaryHeader';
import LeakedDocuments from '../components/LeakedDocuments';
import PartyIntel from '../components/PartyIntel';
import BreakingNews from '../components/BreakingNews';
import JoinTheParty from '../components/JoinTheParty';
import AboutHCCP from '../components/AboutHCCP';
import ExportRevolution from '../components/ExportRevolution';
import { Stack } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Layout>
      <RevolutionaryHeader />
      
      <div className="my-16">
        <div className="flex items-center gap-2 mb-6">
          <Stack size={32} className="text-accent-9" weight="fill" />
          <h2 className="text-2xl font-bold revolutionary-text">THE PEOPLE'S TRUTH</h2>
        </div>
        
        <p className="text-xl text-accent-11 mb-8">
          The Hack Club Communist Party stands as the vanguard of digital liberation! 
          Our mission is to free all code from the chains of proprietary software and establish 
          a new era of technological equality!
        </p>
      </div>
      
      <AboutHCCP />
      <BreakingNews />
      <ExportRevolution />
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <LeakedDocuments />
        <PartyIntel />
      </div>
      <JoinTheParty />
    </Layout>
  );
}