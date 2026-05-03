import { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

import Vezba1 from './vezbe/Vezba14.1';
import Vezba2 from './vezbe/Vezba14.2';
import Vezba3 from './vezbe/Vezba14.3';
import Vezba4 from './vezbe/Vezba14.4';
import Vezba5 from './vezbe/Vezba14.5';
import Vezba6 from './vezbe/Vezba14.6';

import Pocetna from './pages/Pocetna';
import Korisnici from './pages/Korisnici';
import KorisnikDetalji from './pages/KorisnikDetalji';
import NoviKorisnik from './pages/NoviKorisnik';
import IzmeniKorisnika from './pages/IzmeniKorisnika';

function Vezbe14() {
  const [aktivna, setAktivna] = useState('1');

  const dugmad = [
    { id: '1', label: 'Vezba 14.1' },
    { id: '2', label: 'Vezba 14.2' },
    { id: '3', label: 'Vezba 14.3' },
    { id: '4', label: 'Vezba 14.4' },
    { id: '5', label: 'Vezba 14.5' },
    { id: '6', label: 'Vezba 14.6' },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        React vezbe 14.1 - 14.6
      </h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {dugmad.map((dugme) => (
          <button
            key={dugme.id}
            onClick={() => setAktivna(dugme.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${aktivna === dugme.id
              ? 'bg-emerald-700 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            {dugme.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        {aktivna === '1' && <Vezba1 />}
        {aktivna === '2' && <Vezba2 />}
        {aktivna === '3' && <Vezba3 />}
        {aktivna === '4' && <Vezba4 />}
        {aktivna === '5' && <Vezba5 />}
        {aktivna === '6' && <Vezba6 />}
      </div>
    </section>
  );
}

function App() {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${isActive
      ? 'bg-emerald-700 text-white'
      : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <h1 className="text-3xl font-bold text-slate-900">
            React vezbe - API aplikacija
          </h1>
          <p className="mt-1 text-slate-500">
            Vezbe 14, 15 i 16 iz predmeta Napredne web tehnologije
          </p>

          <nav className="mt-5 flex flex-wrap gap-2">
            <NavLink to="/" className={linkClass}>
              Pocetna
            </NavLink>

            <NavLink to="/vezbe14" className={linkClass}>
              Vezbe 14
            </NavLink>

            <NavLink to="/korisnici" className={linkClass}>
              Svi korisnici
            </NavLink>

            <NavLink to="/novi" className={linkClass}>
              Dodaj korisnika
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/vezbe14" element={<Vezbe14 />} />
          <Route path="/korisnici" element={<Korisnici />} />
          <Route path="/korisnici/:id" element={<KorisnikDetalji />} />
          <Route path="/korisnici/:id/izmeni" element={<IzmeniKorisnika />} />
          <Route path="/novi" element={<NoviKorisnik />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;