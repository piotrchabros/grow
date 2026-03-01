import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { initI18n } from '@org/shared-i18n';
import en from './i18n/en.json';
import pl from './i18n/pl.json';
import App from './app/app';

initI18n({ en, pl });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
