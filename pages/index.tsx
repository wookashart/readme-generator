// === Components === //
import Page from '../src/components/layout/Page/Page';
import ReadmeGenerator from '../src/components/sections/ReadmeGenerator/ReadmeGenerator';

// === Helpers === //
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

export async function getServerSideProps(ctx) {
  const darkModeCookie = ctx.req?.cookies?.['dark-mode'] || null;

  return {
    props: {
      darkMode: darkModeCookie && darkModeCookie === 'true' ? true : false,
      pageClassName: darkModeCookie && darkModeCookie === 'true' ? 'dark-mode' : '',
      ...(await serverSideTranslations(ctx?.locale || 'en', ['common', 'navigation', 'generator'])),
    },
  };
}

const Index = ({ darkMode }) => {
  const [sDarkMode, setSDarkMode] = useState<boolean>(darkMode);

  return (
    <Page darkMode={sDarkMode} setDarkMode={setSDarkMode}>
      <ReadmeGenerator darkMode={sDarkMode} />
    </Page>
  );
};

export default Index;
