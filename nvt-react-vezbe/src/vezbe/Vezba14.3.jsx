import { useState } from 'react';

function Vezba3() {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [lozinka, setLozinka] = useState('');
  const [poruka, setPoruka] = useState('');

  const obradiFormu = (e) => {
    e.preventDefault();

    if (ime.trim() === '' || email.trim() === '' || lozinka.trim() === '') {
      setPoruka('Sva polja moraju biti popunjena.');
      return;
    }

    if (!email.includes('@')) {
      setPoruka('Email mora sadrzati znak @.');
      return;
    }

    if (lozinka.length < 8) {
      setPoruka('Lozinka mora imati najmanje 8 karaktera.');
      return;
    }

    setPoruka(`Uspesna registracija: ${ime}, ${email}`);
    setIme('');
    setEmail('');
    setLozinka('');
  };

  const uspesno = poruka.includes('Uspesna');

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-900">
        Vezba 14.3 - Validacija vise polja
      </h2>

      <form onSubmit={obradiFormu} className="max-w-xl bg-white p-5 shadow-sm">
        <div className="mb-4">
          <label className="mb-1 block font-medium text-slate-700">Ime</label>
          <input
            type="text"
            placeholder="Ime"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            className="w-full bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block font-medium text-slate-700">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block font-medium text-slate-700">
            Lozinka
          </label>
          <input
            type="password"
            placeholder="Lozinka"
            value={lozinka}
            onChange={(e) => setLozinka(e.target.value)}
            className="w-full bg-slate-50 px-4 py-2 outline-none focus:bg-white focus:ring-2 focus:ring-emerald-700"
          />
        </div>

        <button
          type="submit"
          className="bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800"
        >
          Registruj se
        </button>
      </form>

      {poruka && (
        <p
          className={`mt-4 p-4 font-medium ${uspesno
            ? 'bg-green-50 text-green-700'
            : 'bg-red-50 text-red-700'
            }`}
        >
          {poruka}
        </p>
      )}
    </section>
  );
}

export default Vezba3;