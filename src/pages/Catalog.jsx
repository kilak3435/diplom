import { useState, useMemo } from 'react';
import { useGames } from '../context/GamesContext';
import GameCard from '../components/GameCard';
import { Search } from 'lucide-react';

export default function Catalog() {
  const { games, loading } = useGames();
  const [query, setQuery] = useState('');

  const filteredGames = useMemo(() => {
    return games.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));
  }, [games, query]);

  if (loading) {
    return <div className="text-center py-20 text-slate-500">Загрузка каталога...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Каталог Игр</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Поиск по названию..." 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 bg-white focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all text-lg shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredGames.slice(0, 100).map(game => ( // ограничиваем вывод для производительности, так как игр может быть 2000
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      
      {filteredGames.length === 0 && (
        <div className="text-center py-20 text-slate-500 text-lg">
          Игры не найдены. Попробуйте изменить запрос.
        </div>
      )}
    </div>
  );
}