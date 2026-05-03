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

  return (
    <div>
      <h2>Vezba 14.3 - Validacija vise polja</h2>

      <form onSubmit={obradiFormu}>
        <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '300px' }}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '300px' }}
        />

        <input
          type="password"
          placeholder="Lozinka"
          value={lozinka}
          onChange={(e) => setLozinka(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '300px' }}
        />

        <button type="submit">Registruj se</button>
      </form>

      {poruka && (
        <p style={{ marginTop: '20px', color: poruka.includes('Uspesna') ? 'green' : 'red' }}>
          {poruka}
        </p>
      )}
    </div>
  );
}

export default Vezba3;