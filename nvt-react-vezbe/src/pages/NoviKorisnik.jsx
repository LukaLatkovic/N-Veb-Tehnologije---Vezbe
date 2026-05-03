import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

function NoviKorisnik() {
    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [greska, setGreska] = useState(null);

    const navigate = useNavigate();

    const obradiFormu = (e) => {
        e.preventDefault();

        if (ime.trim() === '' || email.trim() === '') {
            setGreska('Ime i email su obavezni.');
            return;
        }

        if (!email.includes('@')) {
            setGreska('Email mora sadrzati znak @.');
            return;
        }

        setLoading(true);
        setGreska(null);

        const noviKorisnik = {
            name: ime,
            email: email,
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noviKorisnik),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Greska pri slanju podataka.');
                }

                return res.json();
            })
            .then((data) => {
                console.log('Dodat korisnik:', data);
                navigate('/korisnici');
            })
            .catch((err) => {
                setGreska(err.message);
                setLoading(false);
            });
    };

    return (
        <section className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
                Dodavanje novog korisnika
            </h2>

            <p className="mb-6 text-slate-500">
                Popunite podatke i posaljite POST zahtev ka API-ju.
            </p>

            <form onSubmit={obradiFormu} className="space-y-4">
                <div>
                    <label className="mb-1 block font-medium text-slate-700">Ime</label>
                    <input
                        type="text"
                        placeholder="Unesite ime"
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        placeholder="Unesite email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                    {loading ? 'Slanje...' : 'Sacuvaj korisnika'}
                </button>
            </form>

            <div className="mt-4">
                {loading && <Loading />}
                {greska && <Error poruka={greska} />}
            </div>
        </section>
    );
}

export default NoviKorisnik;