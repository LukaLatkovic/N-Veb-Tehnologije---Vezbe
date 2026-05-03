import { useState } from 'react';

function Vezba5() {
  const [pretraga, setPretraga] = useState('');

  const korisnici = ['Marko', 'Jelena', 'Nikola', 'Ana', 'Stefan', 'Milica'];

  const filtriraniKorisnici = korisnici.filter((korisnik) =>
    korisnik.toLowerCase().includes(pretraga.toLowerCase())
  );

  return (
    <div>
      <h2>Vezba 14.5 - Filtriranje i pretraga liste</h2>

      <input
        type="text"
        placeholder="Pretrazi korisnike"
        value={pretraga}
        onChange={(e) => setPretraga(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />

      <ul>
        {filtriraniKorisnici.map((korisnik, index) => (
          <li key={index}>{korisnik}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vezba5;