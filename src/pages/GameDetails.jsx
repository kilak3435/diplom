import { useParams, Link } from 'react-router-dom';
import { useGames } from '../context/GamesContext';
import { ArrowLeft, Users, Tag, Calendar, Target, BookOpen, Star } from 'lucide-react';

export default function GameDetails() {
  const { id } = useParams();
  const { games, loading } = useGames();
  
  if (loading) return <div className="text-center py-20">Загрузка...</div>;
  
  const game = games.find(x => String(x.id) === id);
  if (!game) return <div className="text-center py-20 text-slate-500">Игра не найдена</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/catalog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors">
        <ArrowLeft size={20} /> Вернуться в каталог
      </Link>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-semibold border border-brand-100">
            <Tag size={16} /> {game.genre}
          </span>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 text-slate-700 font-semibold border border-slate-100">
            <Calendar size={16} /> {game.year || 'Неизвестно'}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{game.name}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-500 font-medium">Количество игроков</div>
              <div className="font-semibold text-slate-900">{game.playersMin} - {game.playersMax}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Star size={24} />
            </div>
            <div>
              <div className="text-sm text-slate-500 font-medium">Сложность</div>
              <div className="font-semibold text-slate-900">{game.difficulty || 'Средняя'}</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="text-brand-500" /> Цель игры
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg bg-slate-50/50 p-6 rounded-2xl border border-slate-50">
              {game.goal}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="text-brand-500" /> Правила
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg bg-slate-50/50 p-6 rounded-2xl border border-slate-50 whitespace-pre-wrap">
              {game.rules}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}