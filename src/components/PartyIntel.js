import React, { useState } from 'react';
import { UsersThree, FolderLock } from '@phosphor-icons/react';

export default function PartyIntel() {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  const partyIntel = {
    "hUWUp": {
      description: "Known connections to corporate gaming interests. Suspected of receiving funding from major anime merchandising companies.",
      details: "hUWUp has been seen collaborating with major gaming corporations to push their agenda. Their secret meetings often involve discussions about anime merchandise and how to infiltrate the gaming community."
    },
    "HCPP": {
      description: "Unable to maintain consistent platform beyond 'pets are cute.' Leadership structure resembles oligarchy.",
      details: "HCPP's platform is as unstable as their leadership. Their main agenda revolves around promoting cute pets, but internal conflicts and oligarchic tendencies have led to a lack of direction."
    },
    "RATP-HCC": {
      description: "Attempted compromise with banking interests. Secret meetings with HCB representatives documented.",
      details: "RATP-HCC has been caught red-handed in secret meetings with HCB representatives. Their attempts to compromise with banking interests have raised suspicions about their true intentions."
    },
    "SANSP": {
      description: "Classified intelligence suggests potential merger talks with HCB.",
      details: "SANSP is rumored to be in merger talks with HCB. Classified intelligence indicates that they are looking to consolidate power and resources, potentially forming a new super-party."
    },
    "HGP": {
      description: "Limited platform focus reduces broader appeal. Internal conflicts over ice cream flavors.",
      details: "HGP's narrow focus on specific issues has limited their appeal. Internal conflicts, particularly over preferred ice cream flavors, have further weakened their position."
    },
  };

  const checkPassword = () => {
    // The password is "revolution" - this is just for fun, not real security
    if (password.toLowerCase() === 'revolution') {
      setIsAuthorized(true);
    }
  };

  if (!isArchiveOpen) {
    return (
      <button 
        onClick={() => setIsArchiveOpen(true)}
        className="w-full p-4 bg-gray-900 border border-accent-9 rounded hover:bg-gray-800 transition-colors flex items-center gap-2 justify-center"
      >
        <FolderLock size={24} className="text-accent-9" weight="fill" />
        <span className="text-accent-11">CLASSIFIED INTELLIGENCE ARCHIVE</span>
      </button>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="my-12 border border-accent-9 p-6 rounded bg-black">
        <div className="flex items-center gap-2 mb-6">
          <FolderLock size={32} className="text-accent-9" weight="fill" />
          <h2 className="text-2xl font-bold revolutionary-text">RESTRICTED ACCESS</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-accent-11 mb-2">
            Comrade, this section contains classified intelligence. 
            The password is what we seek - our glorious REVOLUTION!
          </p>
          <p className="text-gray-400 text-sm italic">
            (Hint: It starts with 'rev' and ends with 'tion'... and it's what we're fighting for!)
          </p>
          
          <div className="flex gap-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
              placeholder="The password is revolution"
              className="bg-gray-800 border border-accent-9 rounded px-4 py-2 text-white"
            />
            <button
              onClick={checkPassword}
              className="bg-accent-9 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
            >
              VERIFY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-12">
      <div className="flex items-center gap-2 mb-6">
        <UsersThree size={32} className="text-accent-9" weight="fill" />
        <h2 className="text-2xl font-bold revolutionary-text">CLASSIFIED INTELLIGENCE</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(partyIntel).map(([party, intel], index) => (
          <div 
            key={index} 
            className="border border-accent-9 p-4 rounded bg-black hover:bg-gray-900 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-11">{party}</h3>
            <div className="flex gap-2 items-start">
              <span className="text-accent-9 font-bold">INTEL:</span>
              <p className="text-gray-300">{intel.description}</p>
            </div>
            <details className="mt-2">
              <summary className="text-accent-11 cursor-pointer">More Details</summary>
              <p className="text-gray-400 mt-2">{intel.details}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}