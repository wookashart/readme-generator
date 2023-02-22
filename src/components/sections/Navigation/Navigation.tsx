// === Components === //
import Switch from '../../common/Switch/Switch';
import Wrapper from '../../layout/Wrapper/Wrapper';
import LangSelector from '../../common/LangSelector/LangSelector';

// === Helpers === //
import { useTranslation } from 'next-i18next';

// === Styles === //
import styles from './Navigation.module.scss';

// === Types === //
import { INavigation } from './Navigation.d';

const Navigation = ({ handleSwitchToggle, darkMode }: INavigation) => {
  const { t } = useTranslation('navigation');

  return (
    <div className={styles.wrapper}>
      <Wrapper>
        <div className={styles.inner}>
          <p className={styles.title}>{t('title')}</p>
          <div className={styles.options}>
            <LangSelector />
            <Switch
              id="darkmode-toggle"
              type="darkmode"
              defaultValue={darkMode}
              handleToggle={handleSwitchToggle}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navigation;
