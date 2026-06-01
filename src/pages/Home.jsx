import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-6xl font-bold tracking-tight text-slate-900">
          Мир настольных игр <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-teal-400">в одном каталоге</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Изучайте, находите и выбирайте лучшие настольные игры для любой компании. Огромная база игр с правилами и подробным описанием.
        </p>
        <div className="pt-8">
          <Link to="/catalog" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/40 hover:-translate-y-1">
            Перейти в каталог <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}