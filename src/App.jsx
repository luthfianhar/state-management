import Navbar from './components/Navbar';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b17] text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}
        <Navbar />

        {/* Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Form */}
          <ReviewForm />

          {/* Review */}
          <ReviewList />

        </div>

        {/* Footer */}
        <footer className="mt-8 pb-4 text-center text-xs text-slate-700">
          ReviewHub • Product Feedback System
        </footer>

      </main>
    </div>
  );
}