import { useState } from 'react';

function Vezba1() {
  const [prikaz, setPrikaz] = useState('pocetna');

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.1 - Jednostavna SPA
      </h2>

      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setPrikaz('pocetna')}
          className={`px-4 py-2 font-medium ${prikaz === 'pocetna'
            ? 'bg-emerald-700 text-white'
            : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
        >
          Pocetna
        </button>

        <button
          onClick={() => setPrikaz('oNama')}
          className={`px-4 py-2 font-medium ${prikaz === 'oNama'
            ? 'bg-emerald-700 text-white'
            : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
        >
          O nama
        </button>
      </div>

      <div className="bg-white p-5 shadow-sm">
        {prikaz === 'pocetna' && (
          <div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              Dobrodosli
            </h3>
            <p className="text-slate-600">
              Ovo je pocetna stranica nase SPA aplikacije. Sadrzaj se menja bez
              osvezavanja stranice.
            </p>
          </div>
        )}

        {prikaz === 'oNama' && (
          <div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">
              O nama
            </h3>
            <p className="text-slate-600">
              Mi smo tim koji uci React od pocetka i koristi state za promenu
              prikaza.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Vezba1;