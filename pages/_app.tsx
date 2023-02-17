// === Helpers === //
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

// === Styles === //
import '../src/styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = pageProps?.pageClassName || '';
  });

  return <Component {...pageProps} />;
}
