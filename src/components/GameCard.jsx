import { Link } from 'react-router-dom';
import { Users, Tag } from 'lucide-react';

export default function GameCard({ game }) {
  return (
    <Link to={`/game/${game.id}`} className="group block h-full">
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
        <div className="mb-4 flex-grow">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-semibold mb-4 border border-slate-100">
             {game.genre}
          </div>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
            {game.name}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-3">
            {game.rules || game.goal}
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-slate-600 text-sm font-medium pt-4 border-t border-slate-50 mt-auto">
          <span>{game.playersMin}-{game.playersMax} чел</span>
        </div>
      </div>
    </Link>
  );
}