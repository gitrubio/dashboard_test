import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthKitProvider } from '@workos-inc/authkit-react';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthKitProvider clientId="client_01JMYW7ZXK94YMMDYVM6Y0S1SS"  devMode 
    redirectUri='http://localhost:3039/'>
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
