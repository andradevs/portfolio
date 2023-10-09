import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeProvider';
import { AuthProvider } from './contexts/AuthProvider';
import Router from './routes/Router';

const app = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default app;
