import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { GlobalStyles } from './styles/global.ts';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
