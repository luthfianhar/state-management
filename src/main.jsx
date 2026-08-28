import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { myRouter } from './routes';
import { ReviewProvider } from './context/ReviewContext';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewProvider>
      <RouterProvider router={myRouter} />
    </ReviewProvider>
  </StrictMode>,
);