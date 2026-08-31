import App from '@/App';
import NotFound from '@/components/NotFound';
import { createBrowserRouter } from 'react-router';

export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);