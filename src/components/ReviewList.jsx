import { useContext } from 'react';
import {
  MessageCircle,
  User,
  Trash2,
  Clock,
} from 'lucide-react';

import { ReviewContext } from '../context/ReviewContext';

export default function ReviewList() {
  const { state, deleteReview } =
    useContext(ReviewContext);

  // Kalau belum ada review
  if (!state.review) {
    return (
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">
        
        <div className="text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <MessageCircle className="h-7 w-7 text-slate-600" />
          </div>

          <h2 className="text-lg font-semibold text-slate-300">
            Belum Ada Ulasan
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Ulasan yang kamu kirim akan muncul di sini.
          </p>

        </div>
      </section>
    );
  }

  const {
    productName,
    comment,
    reviewerName,
    id,
  } = state.review;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
            Your Review
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Ulasan Kamu
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10">
          <MessageCircle className="h-5 w-5 text-indigo-400" />
        </div>

      </div>

      {/* Review Card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-5">

        {/* Gradient Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500" />

        {/* Product */}
        <div className="flex items-start justify-between gap-4">

          <div>
            <span className="inline-flex rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
              {productName}
            </span>

            <p className="mt-4 text-base leading-7 text-slate-200">
              "{comment}"
            </p>
          </div>

        </div>

        {/* Info */}
        <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-indigo-400" />

            <span>
              Diulas oleh{' '}
              <span className="font-medium text-slate-300">
                {reviewerName}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />

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
          onClick={deleteReview}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-2.5 text-sm font-medium text-rose-400 transition-all hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300 active:scale-[0.98]"
        >
          <Trash2 className="h-4 w-4" />
          Hapus Ulasan
        </button>

      </div>
    </section>
  );
}