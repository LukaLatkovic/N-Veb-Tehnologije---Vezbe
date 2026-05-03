import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

function KorisnikDetalji() {
    const { id } = useParams();

    const [korisnik, setKorisnik] = useState(null);
    const [loading, setLoading] = useState(true);
    const [greska, setGreska] = useState(null);

    useEffect(() => {
        setLoading(true);
        setGreska(null);

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Greska pri ucitavanju detalja korisnika.');
                }

                return res.json();
            })
            .then((data) => {
                setKorisnik(data);
                setLoading(false);
            })
            .catch((err) => {
                setGreska(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (greska) {
        return <Error poruka={greska} />;
    }

    if (!korisnik) {
        return <p>Korisnik nije pronadjen.</p>;
    }

    return (
        <section className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Detalji korisnika
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Ime</p>
                    <p className="font-semibold text-slate-900">{korisnik.name}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold text-slate-900">{korisnik.email}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Telefon</p>
                    <p className="font-semibold text-slate-900">{korisnik.phone}</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Grad</p>
                    <p className="font-semibold text-slate-900">
                        {korisnik.address.city}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 md:col-span-2">
                    <p className="text-sm text-slate-500">Kompanija</p>
                    <p className="font-semibold text-slate-900">
                        {korisnik.company.name}
                    </p>
                </div>
            </div>

            <div className="mt-6 flex gap-3">
                <Link
                    to="/korisnici"
                    className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200"
                >
                    Nazad
                </Link>

                <Link
                    to={`/korisnici/${korisnik.id}/izmeni`}
                    className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
                >
                    Izmeni korisnika
                </Link>
            </div>
        </section>
    );
}

export default KorisnikDetalji;