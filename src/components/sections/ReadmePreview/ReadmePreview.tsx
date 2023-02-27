// === Helpers === //
import { useTranslation } from 'next-i18next';

// === Styles === //
import styles from './ReadmePreview.module.scss';

// === Types === //
import { IReadmePreview } from './ReadmePreview.d';

const ReadmePreview = () => {
  const { t } = useTranslation('generator');

  return (
    <div>
      <h2>{t('preview_title')}</h2>
    </div>
  );
};

export default ReadmePreview;
