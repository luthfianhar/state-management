import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { ReviewProvider } from './context/ReviewContext';
import { myRouter } from './routes';

import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReviewProvider>
      <RouterProvider router={myRouter} />
    </ReviewProvider>
  </StrictMode>
);