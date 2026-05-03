import { useState } from 'react';

function Vezba6() {
  const [stavke, setStavke] = useState(['HTML', 'CSS', 'JavaScript']);
  const [novaVrednost, setNovaVrednost] = useState('');
  const [indexZaIzmenu, setIndexZaIzmenu] = useState(null);

  const obrisiStavku = (index) => {
    const novaLista = stavke.filter((_, i) => i !== index);
    setStavke(novaLista);
  };

  const pokreniIzmenu = (index) => {
    setNovaVrednost(stavke[index]);
    setIndexZaIzmenu(index);
  };

  const sacuvajIzmenu = () => {
    if (novaVrednost.trim() === '') {
      return;
    }

    const novaLista = [...stavke];
    novaLista[indexZaIzmenu] = novaVrednost;
    setStavke(novaLista);
    setNovaVrednost('');
    setIndexZaIzmenu(null);
  };

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.6 - Brisanje i uredjivanje stavki
      </h2>

      <ul className="mb-6 space-y-3">
        {stavke.map((stavka, index) => (
          <li
            key={index}
            className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 shadow-sm"
          >
            <span className="font-medium text-slate-800">{stavka}</span>

            <div className="flex gap-2">
              <button
                onClick={() => pokreniIzmenu(index)}
                className="bg-amber-500 px-3 py-2 text-sm font-medium text-white hover:bg-amber-600"
              >
                Izmeni
              </button>

              <button
                onClick={() => obrisiStavku(index)}
                className="bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Obrisi
              </button>
            </div>
          </li>
        ))}
      </ul>

      {indexZaIzmenu !== null && (
        <div className="max-w-xl bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-slate-900">
            Izmena stavke
          </h3>

          <input
            type="text"
            value={novaVrednost}
            onChange={(e) => setNovaVrednost(e.target.value)}
            className="mb-3 w-full bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
          />

          <button
            onClick={sacuvajIzmenu}
            className="bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800"
          >
            Sacuvaj izmenu
          </button>
        </div>
      )}
    </section>
  );
}

export default Vezba6;