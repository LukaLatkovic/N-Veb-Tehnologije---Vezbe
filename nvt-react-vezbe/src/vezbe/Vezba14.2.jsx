import { useState } from 'react';

function Vezba2() {
  const [ime, setIme] = useState('');
  const [poruka, setPoruka] = useState('');

  const obradiFormu = (e) => {
    e.preventDefault();

    if (ime.trim() === '') {
      setPoruka('Molimo unesite ime.');
    } else {
      setPoruka(`Zdravo, ${ime}!`);
      setIme('');
    }
  };

  const jeGreska = poruka.includes('Molimo');

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.2 - Kontrolisana forma
      </h2>

      <form onSubmit={obradiFormu} className="bg-white p-5 shadow-sm">
        <label className="mb-1 block font-medium text-slate-700">
          Ime
        </label>

        <input
          type="text"
          placeholder="Unesite ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          className="mb-4 w-full max-w-md bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
        />

        <button
          type="submit"
          className="bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800"
        >
          Posalji
        </button>
      </form>

      {poruka && (
        <p
          className={`mt-4 p-4 font-medium ${jeGreska
            ? 'bg-red-50 text-red-700'
            : 'bg-green-50 text-green-700'
            }`}
        >
          {poruka}
        </p>
      )}
    </section>
  );
}

export default Vezba2;