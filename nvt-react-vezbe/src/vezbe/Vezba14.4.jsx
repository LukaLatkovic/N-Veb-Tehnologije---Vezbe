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
    <div>
      <h2>Vezba 14.4 - Dinamicka lista</h2>

      <form onSubmit={dodajStavku}>
        <input
          type="text"
          placeholder="Unesite stavku"
          value={unos}
          onChange={(e) => setUnos(e.target.value)}
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Dodaj</button>
      </form>

      <ul style={{ marginTop: '20px' }}>
        {stavke.map((stavka, index) => (
          <li key={index}>{stavka}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vezba4;