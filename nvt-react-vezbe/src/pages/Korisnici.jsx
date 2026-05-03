import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

function Korisnici() {
    const [korisnici, setKorisnici] = useState([]);
    const [loading, setLoading] = useState(true);
    const [greska, setGreska] = useState(null);

    useEffect(() => {
        ucitajKorisnike();
    }, []);

    const ucitajKorisnike = () => {
        setLoading(true);
        setGreska(null);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Greska pri ucitavanju korisnika.');
                }

                return res.json();
            })
            .then((data) => {
                setKorisnici(data);
                setLoading(false);
            })
            .catch((err) => {
                setGreska(err.message);
                setLoading(false);
            });
    };

    const obrisiKorisnika = (id) => {
        const potvrda = window.confirm(
            'Da li ste sigurni da zelite da obrisete ovog korisnika?'
        );

        if (!potvrda) {
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Brisanje nije uspelo.');
                }

                setKorisnici((prethodniKorisnici) =>
                    prethodniKorisnici.filter((korisnik) => korisnik.id !== id)
                );
            })
            .catch((err) => {
                alert('Greska: ' + err.message);
            });
    };

    if (loading) {
        return <Loading />;
    }

    if (greska) {
        return <Error poruka={greska} />;
    }

    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Svi korisnici</h2>
                    <p className="text-slate-500">
                        Lista korisnika preuzeta sa JSONPlaceholder API-ja.
                    </p>
                </div>

                <Link
                    to="/novi"
                    className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                >
                    Dodaj novog
                </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {korisnici.map((korisnik) => (
                    <article
                        key={korisnik.id}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                    >
                        <h3 className="text-lg font-bold text-slate-900">
                            {korisnik.name}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">{korisnik.email}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <Link
                                to={`/korisnici/${korisnik.id}`}
                                className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
                            >
                                Detalji
                            </Link>

                            <Link
                                to={`/korisnici/${korisnik.id}/izmeni`}
                                className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-white hover:bg-amber-600"
                            >
                                Izmeni
                            </Link>

                            <button
                                onClick={() => obrisiKorisnika(korisnik.id)}
                                className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                            >
                                Obrisi
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Korisnici;