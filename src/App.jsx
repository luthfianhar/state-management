import Navbar from './components/Navbar';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import { ReviewProvider } from './context/ReviewContext';

function App() {
  return (
    <ReviewProvider>
      <div className='min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-10 px-4'>
        <div className='w-full max-w-2xl space-y-8 animate-fade-in'>
          <Navbar />
          <ReviewList />
          <ReviewForm />
        </div>
      </div>
    </ReviewProvider>
  );
}

export default App;
