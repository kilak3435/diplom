import { createContext, useContext, useState, useEffect } from 'react';

const GamesContext = createContext();

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const localGames = localStorage.getItem('boardGames');
        if (localGames) {
          setGames(JSON.parse(localGames));
        } else {
          const response = await fetch('/games.json');
          const data = await response.json();
          setGames(data);
          localStorage.setItem('boardGames', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Failed to load games:', error);
      } finally {
        setLoading(false);
      }
    };
    loadGames();
  }, []);

  const saveGames = (newGames) => {
    setGames(newGames);
    localStorage.setItem('boardGames', JSON.stringify(newGames));
  };

  const addGame = (game) => {
    const newGame = { ...game, id: Date.now() }; // Simple ID generation
    saveGames([...games, newGame]);
  };

  const updateGame = (updatedGame) => {
    saveGames(games.map(g => g.id === updatedGame.id ? updatedGame : g));
  };

  const deleteGame = (id) => {
    saveGames(games.filter(g => g.id !== id));
  };

  return (
    <GamesContext.Provider value={{ games, loading, addGame, updateGame, deleteGame }}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGames() {
  return useContext(GamesContext);
}
