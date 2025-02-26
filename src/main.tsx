import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthKitProvider } from '@workos-inc/authkit-react';

import App from './app';
import { API_CONFIG } from './config-global';


// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthKitProvider   clientId={API_CONFIG.clientId}   redirectUri={API_CONFIG.urlRedirect}>
      <HelmetProvider>
          <BrowserRouter>
            <Suspense>
              <App />
            </Suspense>
          </BrowserRouter>
      </HelmetProvider>
    </AuthKitProvider>
  </StrictMode>
);
