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

  return (
    <div>
      <h2>Vezba 14.2 - Kontrolisana forma</h2>

      <form onSubmit={obradiFormu}>
        <input
          type="text"
          placeholder="Unesite ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '300px',
            marginBottom: '10px'
          }}
        />
        <br />
        <button type="submit">Posalji</button>
      </form>

      {poruka && (
        <p style={{ marginTop: '20px', color: 'green' }}>
          {poruka}
        </p>
      )}
    </div>
  );
}

export default Vezba2;