import { useState } from 'react';

function Vezba1() {
  const [prikaz, setPrikaz] = useState('pocetna');

  return (
    <div>
      <h2>Vezba 14.1 - Jednostavna SPA</h2>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPrikaz('pocetna')}>Pocetna</button>
        <button onClick={() => setPrikaz('oNama')} style={{ marginLeft: '10px' }}>
          O nama
        </button>
      </nav>

      {prikaz === 'pocetna' && (
        <div>
          <h3>Dobrodosli</h3>
          <p>Ovo je pocetna stranica nase SPA aplikacije.</p>
        </div>
      )}

      {prikaz === 'oNama' && (
        <div>
          <h3>O nama</h3>
          <p>Mi smo tim koji uci React od pocetka.</p>
        </div>
      )}
    </div>
  );
}

export default Vezba1;