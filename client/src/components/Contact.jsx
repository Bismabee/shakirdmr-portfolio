import React from 'react';
import { Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Contact = ({ theme }) => {
  return (
    <section>
      <SectionHeader title="03. HANDSHAKE" icon={<Zap size={16} />} theme={theme} />
      <div className="bg-black border border-gray-800 rounded-lg p-6 font-mono text-sm shadow-2xl">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="space-y-4">
          <div>
            <span className="text-emerald-500">shakir@portfolio:~$</span>
            <span className="text-white ml-2">./initiate_contact.sh</span>
          </div>
          <div className="text-gray-400">
            Initializing communication protocol...<br/>
            Email found: <span className="text-white hover:underline cursor-pointer">shakirsjd@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-emerald-500">➜</span>
            <input
              type="text"
              placeholder="Type message..."
              className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 focus:ring-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;