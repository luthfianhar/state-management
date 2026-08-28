import { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function Navbar() {
  const { state, setReviewerName } = useContext(ReviewContext);

  return (
    <header className='bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-300 hover:border-indigo-500/30'>
      <div>
        <h1 className='text-xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
          Review App
        </h1>
        <p className='text-sm text-slate-400 mt-1'>
          Halo,{' '}
          <span className='font-semibold text-indigo-300'>
            {state.reviewerName}
          </span>
          !
        </p>
      </div>

      <div className='flex items-center gap-2'>
        <Label
          htmlFor='name-input'
          className='text-xs text-slate-400 whitespace-nowrap'>
          Ubah Nama:
        </Label>

        <Input
          id='name-input'
          type='text'
          value={state.reviewerName === 'Tamu' ? '' : state.reviewerName}
          placeholder='Ketik nama Anda...'
          onChange={(e) => setReviewerName(e.target.value)}
        />
      </div>
    </header>
  );
}
