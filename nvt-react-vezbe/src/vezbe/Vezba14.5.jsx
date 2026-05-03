import { useState } from 'react';

function Vezba5() {
  const [pretraga, setPretraga] = useState('');

  const korisnici = ['Marko', 'Jelena', 'Nikola', 'Ana', 'Stefan', 'Milica'];

  const filtriraniKorisnici = korisnici.filter((korisnik) =>
    korisnik.toLowerCase().includes(pretraga.toLowerCase())
  );

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.5 - Filtriranje i pretraga liste
      </h2>

      <div className="mb-5 max-w-xl bg-white p-5 shadow-sm">
        <label className="mb-1 block font-medium text-slate-700">
          Pretraga korisnika
        </label>

        <input
          type="text"
          placeholder="Pretrazi korisnike"
          value={pretraga}
          onChange={(e) => setPretraga(e.target.value)}
          className="w-full bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
        />

        <p className="mt-3 text-sm text-slate-500">
          Broj rezultata: {filtriraniKorisnici.length}
        </p>
      </div>

      {filtriraniKorisnici.length === 0 ? (
        <p className="bg-white p-4 text-slate-500 shadow-sm">
          Nema korisnika koji odgovaraju pretrazi.
        </p>
      ) : (
        <ul className="grid gap-3 md:grid-cols-2">
          {filtriraniKorisnici.map((korisnik, index) => (
            <li key={index} className="bg-white p-4 font-medium shadow-sm">
              {korisnik}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Vezba5;