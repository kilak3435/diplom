import { Link}from 'react-router-dom';
import{ArrowRight}from 'lucide-react';

export default function Home(){
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-6xl font-bold tracking-tight text-slate-900">
          мир настолок <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400">онлайн каталог</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          выбирайте лучшие настольные игры для друзей. тут есть правила и описание к каждой игре.
        </p>
        <div className="pt-8">
          <Link to="/catalog" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 hover:-translate-y-1">
            к играм <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}