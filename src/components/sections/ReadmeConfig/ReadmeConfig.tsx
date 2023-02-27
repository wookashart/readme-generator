// === Components === //
import Dropdown from '../../common/Dropdown/Dropdown';

// === Helpers === //
import { useTranslation } from 'next-i18next';
import { frameworks, languages, nodes } from '../../../helpers/readme-options';

// === Styles === //
import styles from './ReadmeConfig.module.scss';

// === Types === //
import { IReadmeConfig } from './ReadmeConfig.d';

const ReadmeConfig = ({ darkMode, state, handleChangeState }: IReadmeConfig) => {
  const { t } = useTranslation('generator');

  return (
    <div className={styles.wrapper}>
      <h2>{t('config_title')}</h2>

      <div>
        <Dropdown
          label={t('config_language_label')}
          name="language"
          options={languages}
          darkMode={darkMode}
          value={state.language}
          handleChange={(value) => handleChangeState('language', value)}
        />
        <Dropdown
          label={t('config_framework_label')}
          name="frameworks"
          options={frameworks}
          darkMode={darkMode}
          value={state.framework}
          handleChange={(value) => handleChangeState('framework', value)}
        />
        <Dropdown
          label={t('config_node_label')}
          name="node"
          options={[...nodes, { label: t('config_node_custom_label'), value: 'custom' }]}
          darkMode={darkMode}
          value={state.node}
          handleChange={(value) => handleChangeState('node', value)}
        />
      </div>
    </div>
  );
};

export default ReadmeConfig;
