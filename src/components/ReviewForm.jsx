import { useState, useEffect, useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import {
  MessageCircle,
  Package,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

export default function ReviewForm() {
  const { state, addReview, clearStatus } = useContext(ReviewContext);

  const [productName, setProductName] = useState('');
  const [comment, setComment] = useState('');
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        clearStatus();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.success, clearStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!productName.trim()) {
      setLocalError('Nama produk tidak boleh kosong!');
      return;
    }

    if (comment.trim().length < 5) {
      setLocalError(
        'Komentar / Ulasan minimal harus 5 karakter!',
      );
      return;
    }

    const isSuccess = await addReview(
      productName.trim(),
      comment.trim(),
    );

    if (isSuccess) {
      setProductName('');
      setComment('');
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

      {/* Glow */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">

        {/* Heading */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
              <MessageCircle className="h-3.5 w-3.5" />
              PRODUCT REVIEW
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white">
              Bagikan Pendapatmu
            </h2>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
              Berikan ulasan mengenai produk yang sudah kamu
              gunakan.
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:flex">
            <MessageCircle className="h-5 w-5 text-indigo-400" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Product */}
          <div>
            <label
              htmlFor="product-name"
              className="mb-2.5 flex items-center gap-2 text-sm font-medium text-slate-300"
            >
              <Package className="h-4 w-4 text-cyan-400" />
              Nama Produk
            </label>

            <input
              id="product-name"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Contoh: Laptop ASUS Vivobook"
              disabled={state.isLoading}
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500/60 focus:bg-slate-950 focus:ring-4 focus:ring-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Comment */}
          <div>
            <div className="mb-2.5 flex items-center justify-between">
              <label
                htmlFor="comment"
                className="flex items-center gap-2 text-sm font-medium text-slate-300"
              >
                <MessageCircle className="h-4 w-4 text-indigo-400" />
                Komentar / Ulasan
              </label>

              <span
                className={`text-xs ${
                  comment.length >= 5
                    ? 'text-emerald-400'
                    : 'text-slate-600'
                }`}
              >
                {comment.length}/5+
              </span>
            </div>

            <textarea
              id="comment"
              rows="5"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);

                if (e.target.value.trim().length >= 5) {
                  setLocalError('');
                }
              }}
              placeholder="Ceritakan pengalamanmu menggunakan produk ini..."
              disabled={state.isLoading}
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm leading-relaxed text-white outline-none transition-all placeholder:text-slate-600 focus:border-indigo-500/60 focus:bg-slate-950 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Error */}
          {(localError || state.error) && (
            <div className="flex items-center gap-3 rounded-xl border border-rose-500/20 bg-rose-500/5 px-4 py-3 text-sm text-rose-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>
                {localError || state.error}
              </span>
            </div>
          )}

          {/* Success */}
          {state.success && (
            <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-400">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>
                Ulasan berhasil dikirim!
              </span>
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={state.isLoading}
            className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-600/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Mengirim Ulasan...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Kirim Ulasan</span>
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
}