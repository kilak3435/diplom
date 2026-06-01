import { createContext, useContext,useState, useEffect } from 'react';

const GamesContext = createContext();

export function GamesProvider({ children }){
  const [igr, setIgr]=useState([]);
  const [zagr, setZagr]=useState(true);

  useEffect(()=>{
    const l=async ()=>{
      try {
        const d=localStorage.getItem('boardGames');
        if (d){
          setIgr(JSON.parse(d));
       }else {
          const r = await fetch('/games.json');
          const js = await r.json();
          setIgr(js);
          localStorage.setItem('boardGames', JSON.stringify(js));
        }
     }catch (err) {
        console.error(err);
      } finally {
        setZagr(false);
      }
    };
    l();
  },[]);

  const save=(arr)=>{
    setIgr(arr);
    localStorage.setItem('boardGames',JSON.stringify(arr));
  };

  const addGame = (g) => {
    const nov ={...g,id:Date.now() };
    save([...igr,nov]);
  };

  const updateGame=(upd)=>{
    save(igr.map(g=>g.id === upd.id ? upd : g));
  };

  const deleteGame = (id)=>{
    save(igr.filter(g => g.id !== id));
  };

  return (
    <GamesContext.Provider value={{ games: igr,loading:zagr,addGame, updateGame,deleteGame }}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGames(){
  return useContext(GamesContext);
}
