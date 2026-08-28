import { useContext } from 'react';
import { ReviewContext } from '../context/ReviewContext';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { MessageSquare, UserRound } from 'lucide-react';

export default function Navbar() {
  const { state, setReviewerName } = useContext(ReviewContext);

  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-24 left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Brand */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20">
            <MessageSquare className="h-7 w-7 text-white" />
          </div>

          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Product Feedback
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              Review
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Selamat datang,{' '}
              <span className="font-semibold text-indigo-300">
                {state.reviewerName}
              </span>
            </p>
          </div>
        </div>

        {/* Name Input */}
        <div className="w-full md:w-auto">
          <Label
            htmlFor="name-input"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
          >
            Nama Pengguna
          </Label>

          <div className="relative">
            <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

            <Input
              id="name-input"
              type="text"
              value={
                state.reviewerName === 'Tamu'
                  ? ''
                  : state.reviewerName
              }
              placeholder="Masukkan nama..."
              onChange={(e) => setReviewerName(e.target.value)}
              className="h-11 w-full rounded-xl border-white/10 bg-slate-950/70 pl-11 text-sm text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 md:w-64"
            />
          </div>
        </div>
      </div>
    </header>
  );
}