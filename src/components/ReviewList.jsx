import { ReviewContext } from '@/context/ReviewContext';
import { useContext } from 'react';
import {
  Star,
  UserRound,
  Clock3,
  Package,
  Trash2,
} from 'lucide-react';

export default function ReviewList() {
  const { state, deleteReview } = useContext(ReviewContext);

  if (!state.review) {
    return (
      <section className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-slate-900/40 px-6 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
          <Star className="h-6 w-6 text-slate-600" />
        </div>

        <h3 className="font-semibold text-slate-300">
          Belum Ada Ulasan
        </h3>

        <p className="mt-2 max-w-xs text-sm text-slate-600">
          Ulasan yang kamu kirim akan muncul di sini.
        </p>
      </section>
    );
  }

  const {
    productName,
    comment,
    reviewerName,
    id,
  } = state.review;

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      'Apakah kamu yakin ingin menghapus ulasan ini?'
    );

    if (confirmDelete) {
      deleteReview();
    }
  };

  return (
    <section className="space-y-4">

      {/* Heading */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            Latest Feedback
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Ulasan Terbaru
          </h2>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Star className="h-4 w-4 text-amber-400" />
        </div>
      </div>

      {/* Review Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30">

        {/* Top Gradient */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60" />

        {/* Product */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <Package className="h-5 w-5 text-cyan-400" />
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
              Product
            </p>

            <p className="font-semibold text-cyan-300">
              {productName || 'Produk Umum'}
            </p>
          </div>
        </div>

        {/* Comment */}
        <div className="rounded-2xl border border-white/5 bg-black/10 p-5">
          <p className="text-base leading-7 text-slate-300">
            “{comment}”
          </p>
        </div>

        {/* User + Time */}
        <div className="mt-5 flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <UserRound className="h-4 w-4" />

            <span>
              Diulas oleh{' '}
              <span className="font-semibold text-slate-300">
                {reviewerName}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock3 className="h-4 w-4" />

            <span>
              {new Date(id).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        </div>

        {/* Delete Button */}
        <button
          type="button"
          onClick={handleDelete}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-2.5 text-sm font-medium text-rose-400 transition-all duration-300 hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300"
        >
          <Trash2 className="h-4 w-4" />
          Hapus Ulasan
        </button>

      </div>
    </section>
  );
}