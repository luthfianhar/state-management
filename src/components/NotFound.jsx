import { Link } from 'react-router';
import { CircleAlert, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070b17] px-6 text-white">
      <div className="w-full max-w-md text-center">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-indigo-500/20 bg-indigo-500/10">
          <CircleAlert className="h-10 w-10 text-indigo-400" />
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
          Error 404
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Halaman Tidak Ditemukan
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Halaman yang kamu cari tidak tersedia atau alamat
          yang kamu masukkan salah.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:shadow-indigo-600/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>

      </div>
    </div>
  );
}