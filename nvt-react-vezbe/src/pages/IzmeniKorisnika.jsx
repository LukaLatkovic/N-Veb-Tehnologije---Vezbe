import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

function IzmeniKorisnika() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ime, setIme] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [greska, setGreska] = useState(null);

    useEffect(() => {
        setLoading(true);
        setGreska(null);

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Greska pri ucitavanju korisnika.');
                }

                return res.json();
            })
            .then((data) => {
                setIme(data.name);
                setEmail(data.email);
                setLoading(false);
            })
            .catch((err) => {
                setGreska(err.message);
                setLoading(false);
            });
    }, [id]);

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

        const izmenjeniKorisnik = {
            name: ime,
            email: email,
        };

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(izmenjeniKorisnik),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Greska pri slanju izmena.');
                }

                return res.json();
            })
            .then((data) => {
                console.log('Izmenjen korisnik:', data);
                navigate('/korisnici');
            })
            .catch((err) => {
                setGreska(err.message);
                setLoading(false);
            });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">
                Izmeni korisnika
            </h2>

            <p className="mb-6 text-slate-500">
                Izmenite podatke korisnika i posaljite PUT zahtev ka API-ju.
            </p>

            <form onSubmit={obradiFormu} className="space-y-4">
                <div>
                    <label className="mb-1 block font-medium text-slate-700">Ime</label>
                    <input
                        type="text"
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium text-slate-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                >
                    Sacuvaj izmene
                </button>
            </form>

            <div className="mt-4">
                {greska && <Error poruka={greska} />}
            </div>
        </section>
    );
}

export default IzmeniKorisnika;