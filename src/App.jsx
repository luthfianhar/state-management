import Navbar from './components/Navbar';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070b17] px-4 py-6 text-white">
      <main className="mx-auto max-w-6xl">
        <Navbar />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <ReviewForm />
          <ReviewList />
        </div>
      </main>
    </div>
  );
}