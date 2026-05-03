import { useState } from 'react';
import Vezba1 from './vezbe/Vezba14.1';
import Vezba2 from './vezbe/Vezba14.2';
import Vezba3 from './vezbe/Vezba14.3';
import Vezba4 from './vezbe/Vezba14.4';
import Vezba5 from './vezbe/Vezba14.5';
import Vezba6 from './vezbe/Vezba14.6';

function App() {
  const [aktivna, setAktivna] = useState('1');

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React vezbe 14.1 - 14.6</h1>

      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setAktivna('1')}>Vezba 14.1</button>
        <button onClick={() => setAktivna('2')} style={{ marginLeft: '10px' }}>Vezba 14.2</button>
        <button onClick={() => setAktivna('3')} style={{ marginLeft: '10px' }}>Vezba 14.3</button>
        <button onClick={() => setAktivna('4')} style={{ marginLeft: '10px' }}>Vezba 14.4</button>
        <button onClick={() => setAktivna('5')} style={{ marginLeft: '10px' }}>Vezba 14.5</button>
        <button onClick={() => setAktivna('6')} style={{ marginLeft: '10px' }}>Vezba 14.6</button>
      </nav>

      {aktivna === '1' && <Vezba1 />}
      {aktivna === '2' && <Vezba2 />}
      {aktivna === '3' && <Vezba3 />}
      {aktivna === '4' && <Vezba4 />}
      {aktivna === '5' && <Vezba5 />}
      {aktivna === '6' && <Vezba6 />}
    </div>
  );
}

export default App;