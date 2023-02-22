// === Components === //
import Page from '../src/components/layout/Page/Page';

// === Helpers === //
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(ctx) {
  const darkModeCookie = ctx.req?.cookies?.['dark-mode'] || null;

  return {
    props: {
      darkMode: darkModeCookie && darkModeCookie === 'true' ? true : false,
      pageClassName: darkModeCookie && darkModeCookie === 'true' ? 'dark-mode' : '',
      ...(await serverSideTranslations(ctx?.locale || 'en', ['common', 'navigation'])),
    },
  };
}

const Index = ({ darkMode }) => {
  return (
    <Page darkMode={darkMode}>
      <div></div>
    </Page>
  );
};

export default Index;
