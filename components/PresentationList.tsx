
import React from 'react';
import { Link } from 'react-router-dom';
import { presentations } from '../presentations';
import type { Presentation } from '../types';

const PresentationCard: React.FC<{ presentation: Presentation }> = ({ presentation }) => (
  <Link to={`/ppt/${presentation.id}`} className="block group">
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <img src={presentation.thumbnail} alt={presentation.name} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-sky-400 mb-2 truncate">{presentation.name}</h3>
        <p className="text-slate-400 text-sm">{presentation.description}</p>
      </div>
    </div>
  </Link>
);

const PresentationList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">React Presentations</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Browse through the available presentations. Click on a card to start viewing.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {presentations.map((p) => (
          <PresentationCard key={p.id} presentation={p} />
        ))}
      </div>
    </div>
  );
};

export default PresentationList;
