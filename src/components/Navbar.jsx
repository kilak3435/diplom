import { Link, useNavigate } from 'react-router-dom';
import { Home, List,Settings,Dice5, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar(){
  const{user, logout}= useAuth();
  const navigate=useNavigate();

  const handleLogout = ()=>{
    logout();
    navigate('/');
  };

  return (
    <nav className="glass-panel sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-brand-600 hover:text-brand-500 transition-colors">
            <Dice5 size={28} />
            <span className="font-bold text-xl tracking-tight text-slate-900">настолки</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-brand-500 font-medium transition-colors">
               <span>домой</span>
            </Link>
            <Link to="/catalog" className="flex items-center gap-2 text-slate-600 hover:text-brand-500 font-medium transition-colors">
               <span>игры</span>
            </Link>
            
            {user?.role === 'admin' && (
              <Link to="/admin" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-600 font-medium transition-all">
                 <span>админ</span>
              </Link>
            )}

            {user ? (
              <div className="flex items-center gap-4 ml-4 border-l border-slate-200 pl-4">
                <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                  <User size={16} /> {user.username}
                </span>
                <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1 transition-colors">
                  <LogOut size={16} /> выйти
                </button>
              </div>
            ) :(
              <Link to="/login" className="ml-4 border-l border-slate-200 pl-4 text-sm font-medium text-brand-600 hover:text-brand-500 transition-colors">
                войти
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}