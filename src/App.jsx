import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import GameDetails from './pages/GameDetails';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/game/:id' element={<GameDetails />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Board Games Catalog. All rights reserved.</p>
      </footer>
    </div>
  );
}