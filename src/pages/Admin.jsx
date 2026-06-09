import{useState}from 'react';
import{useGames}from '../context/GamesContext';
import{Edit2,Trash2, Plus,X}from 'lucide-react';

export default function Admin(){
  const{games,loading,addGame,updateGame,deleteGame}= useGames();
  const [okno,setOkno]=useState(false);
  const [dannie,setDannie]=useState({ name:'', genre:'',playersMin:2,playersMax:4,difficulty:'Средняя',year:2024,goal:'',rules:'' });
  const [redID,setRedID]=useState(null);

  const otkritOkno=(g=null)=>{
    if (g){
      setDannie(g);
      setRedID(g.id);
   }else {
      setDannie({ name: '', genre:'',playersMin:2,playersMax:4,difficulty:'Средняя',year:2024,goal:'',rules:'' });
      setRedID(null);
    }
    setOkno(true);
  };

  const sabmit=(e)=>{
    e.preventDefault();
    if (redID){
      updateGame({ ...dannie,id:redID });
   }else {
      addGame(dannie);
    }
    setOkno(false);
  };

  if (loading) return <div className="text-center py-20 text-slate-500">ждите...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">админка</h1>
        <button onClick={()=>otkritOkno()} className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all">
          <Plus size={20} /> добавить
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm">
              <th className="py-4 px-6 font-medium">имя</th>
              <th className="py-4 px-6 font-medium">жанр</th>
              <th className="py-4 px-6 font-medium">игроки</th>
              <th className="py-4 px-6 font-medium text-right">опции</th>
            </tr>
          </thead>
          <tbody>
            {games.map(g=>(
              <tr key={g.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-slate-900">{g.name}</td>
                <td className="py-4 px-6 text-slate-600">{g.genre}</td>
                <td className="py-4 px-6 text-slate-600">{g.playersMin}-{g.playersMax}</td>
                <td className="py-4 px-6 flex justify-end gap-3">
                  <button onClick={()=>otkritOkno(g)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit2 size={18} /></button>
                  <button onClick={()=>deleteGame(g.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {okno && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onClick={()=>setOkno(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"><X size={24} /></button>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">{redID ? 'редакт' :'новая'}</h2>
            
            <form onSubmit={sabmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">название</label>
                <input required type="text" value={dannie.name} onChange={e=>setDannie({...dannie, name:e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">жанр</label>
                <input required type="text" value={dannie.genre} onChange={e=>setDannie({...dannie,genre:e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">мин игр.</label>
                  <input required type="number" value={dannie.playersMin} onChange={e=>setDannie({...dannie, playersMin:parseInt(e.target.value)})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">макс игр.</label>
                  <input required type="number" value={dannie.playersMax} onChange={e=>setDannie({...dannie,playersMax:parseInt(e.target.value)})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">правила</label>
                <textarea required value={dannie.rules} onChange={e=>setDannie({...dannie,rules:e.target.value})} className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500" rows="3"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 rounded-xl mt-4">
                готово
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
