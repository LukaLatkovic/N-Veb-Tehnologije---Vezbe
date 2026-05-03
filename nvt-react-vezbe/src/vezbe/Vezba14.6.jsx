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
    <div>
      <h2>Vezba 14.6 - Brisanje i uredjivanje stavki</h2>

      <ul>
        {stavke.map((stavka, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {stavka}
            <button onClick={() => obrisiStavku(index)} style={{ marginLeft: '10px' }}>
              Obrisi
            </button>
            <button onClick={() => pokreniIzmenu(index)} style={{ marginLeft: '10px' }}>
              Izmeni
            </button>
          </li>
        ))}
      </ul>

      {indexZaIzmenu !== null && (
        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            value={novaVrednost}
            onChange={(e) => setNovaVrednost(e.target.value)}
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <button onClick={sacuvajIzmenu}>Sacuvaj izmenu</button>
        </div>
      )}
    </div>
  );
}

export default Vezba6;