import { Link } from 'react-router-dom';
import { Home, List, Settings, Dice5 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-panel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-brand-600 hover:text-brand-500 transition-colors">
            <Dice5 size={28} />
            <span className="font-bold text-xl tracking-tight text-slate-900">BoardGames</span>
          </Link>
          
          <div className="flex gap-6">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-brand-500 font-medium transition-colors">
              <Home size={18} /> <span>Главная</span>
            </Link>
            <Link to="/catalog" className="flex items-center gap-2 text-slate-600 hover:text-brand-500 font-medium transition-colors">
              <List size={18} /> <span>Каталог</span>
            </Link>
            <Link to="/admin" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium transition-all">
              <Settings size={18} /> <span>Админ</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}