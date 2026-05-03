import { Link } from 'react-router-dom';

function Pocetna() {
    return (
        <section className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Napredne web tehnologije
            </p>

            <h2 className="mb-4 text-3xl font-bold text-slate-900">
                React API aplikacija
            </h2>

            <p className="max-w-3xl text-slate-600">
                Aplikacija prikazuje rad sa React Router-om, preuzimanjem podataka sa
                REST API-ja, prikazom detalja korisnika, dodavanjem, brisanjem i izmenom
                korisnika.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <Link
                    to="/korisnici"
                    className="rounded-lg bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800"
                >
                    Prikazi korisnike
                </Link>

                <Link
                    to="/novi"
                    className="rounded-lg bg-slate-100 px-5 py-2 font-medium text-slate-700 hover:bg-slate-200"
                >
                    Dodaj korisnika
                </Link>
            </div>
        </section>
    );
}

export default Pocetna;