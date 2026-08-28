import { useState, useEffect, useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';

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
      setLocalError('Komentar / Ulasan minimal harus 5 karakter!');
      return;
    }

    const isSuccess = await addReview(productName.trim(), comment.trim());

    if (isSuccess) {
      setProductName('');
      setComment('');
    }
  };

  return (
    <section className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700/50'>
      <h2 className='text-lg font-semibold text-slate-300 mb-5 flex items-center gap-2'>
        Formulir Ulasan Produk
      </h2>

      <form
        onSubmit={handleSubmit}
        className='space-y-4'>
        <div>
          <label
            htmlFor='product-name'
            className='block text-sm font-medium text-slate-400 mb-1.5'>
            Nama Produk
          </label>
          <input
            id='product-name'
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder='Masukkan nama produk...'
            disabled={state.isLoading}
            className='w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50'
          />
        </div>

        <div>
          <label
            htmlFor='comment'
            className='block text-sm font-medium text-slate-400 mb-1.5'>
            Komentar / Ulasan (Min. 5 Karakter)
          </label>
          <textarea
            id='comment'
            rows='3'
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              if (e.target.value.trim().length >= 5) {
                setLocalError('');
              }
            }}
            placeholder='Tulis ulasan minimal 5 karakter di sini...'
            disabled={state.isLoading}
            className='w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-100 placeholder-slate-500 transition-all disabled:opacity-50 resize-none'></textarea>
        </div>

        {/* Error Message */}
        {(localError || state.error) && (
          <div className='text-sm text-rose-400 bg-rose-950/30 border border-rose-900/50 rounded-lg px-4 py-2 flex items-center gap-2'>
            <span className='shrink-0'>⚠️</span>
            <span>{localError || state.error}</span>
          </div>
        )}

        {/* Success Message */}
        {state.success && (
          <div className='text-sm text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 rounded-lg px-4 py-2 flex items-center gap-2'>
            <span className='shrink-0'>✅</span>
            <span>Ulasan Berhasil Dikirim!</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          disabled={state.isLoading}
          className='w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/30 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2'>
          {state.isLoading ? (
            <>
              <svg
                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
              <span>Sedang Mengirim...</span>
            </>
          ) : (
            'Kirim Ulasan'
          )}
        </button>
      </form>
    </section>
  );
}
