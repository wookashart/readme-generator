// === Components === //
import Switch from '../../common/Switch/Switch';
import Wrapper from '../Wrapper/Wrapper';

// === Styles === //
import styles from './Navigation.module.scss';

// === Types === //
import { INavigation } from './Navigation.d';

const Navigation = ({ handleSwitchToggle, darkMode }: INavigation) => {
  return (
    <div className={styles.wrapper}>
      <Wrapper>
        <div className={styles.inner}>
          <Switch
            id="darkmode-toggle"
            type="darkmode"
            defaultValue={darkMode}
            handleToggle={handleSwitchToggle}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navigation;
