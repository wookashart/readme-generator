// === Helpers === //
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';

// === Styles === //
import '../src/styles/main.scss';

// === Types === //
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.className = pageProps?.pageClassName || '';
  });

  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
