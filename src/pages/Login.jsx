import { useState } from 'react';
import { useAuth}from '../context/AuthContext';
import{useNavigate}from 'react-router-dom';

export default function Login(){
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError]=useState('');
  const{login }=useAuth();
  const navigate=useNavigate();

  const handleLogin=(e) => {
    e.preventDefault();
    const success=login(username, password);
    if (success) {
      if (username === 'admin'){
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">Вход в систему</h2>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Логин</label>
            <input 
              type="text" 
              value={username} 
              onChange={e=>setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Пароль</label>
            <input 
              type="password" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 rounded-xl transition-all"
          >
            Войти
          </button>
        </form>
        <div className="mt-6 text-xs text-slate-400 text-center space-y-1">
          <p>Для проверки:</p>
          <p>Админ: admin / admin123</p>
          <p>Юзер: user / user123</p>
        </div>
      </div>
    </div>
  );
}
