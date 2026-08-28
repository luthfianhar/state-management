import { ReviewContext } from '@/context/ReviewContext';
import { useContext } from 'react';

export default function ReviewList() {
  const { state } = useContext(ReviewContext);

  if (!state.review) {
    return null;
  }

  const { productName, comment, reviewerName, id } = state.review;

  return (
    <section className='space-y-4'>
      <h2 className='text-lg font-semibold text-slate-300 flex items-center gap-2'>
        Kartu Ulasan
      </h2>

      <div className='bg-slate-800/60 backdrop-blur-md border border-slate-700/35 rounded-xl p-5 shadow-lg relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:border-slate-600/50'>
        <div className='absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-indigo-500 to-cyan-500'></div>
        <span className='text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30'>
          {productName || 'Produk Umum'}
        </span>
        <p className='text-slate-200 italic mt-3 text-base'>"{comment}"</p>
        <div className='mt-4 flex items-center justify-between text-xs text-slate-400'>
          <span>
            Diulas oleh:{' '}
            <span className='font-medium text-slate-200'>{reviewerName}</span>
          </span>
          <span className='text-slate-500'>
            {new Date(id).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
      </div>
    </section>
  );
}
