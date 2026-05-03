import { useState } from 'react';

function Vezba4() {
  const [unos, setUnos] = useState('');
  const [stavke, setStavke] = useState([]);

  const dodajStavku = (e) => {
    e.preventDefault();

    if (unos.trim() === '') {
      return;
    }

    setStavke([...stavke, unos]);
    setUnos('');
  };

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.4 - Dinamicka lista
      </h2>

      <form onSubmit={dodajStavku} className="mb-5 flex max-w-2xl gap-2">
        <input
          type="text"
          placeholder="Unesite stavku"
          value={unos}
          onChange={(e) => setUnos(e.target.value)}
          className="flex-1 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-700"
        />

        <button
          type="submit"
          className="bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800"
        >
          Dodaj
        </button>
      </form>

      {stavke.length === 0 ? (
        <p className="bg-white p-4 text-slate-500 shadow-sm">
          Lista je trenutno prazna.
        </p>
      ) : (
        <ul className="space-y-2">
          {stavke.map((stavka, index) => (
            <li key={index} className="bg-white p-4 shadow-sm">
              <span className="mr-2 font-semibold text-emerald-700">
                {index + 1}.
              </span>
              {stavka}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Vezba4;