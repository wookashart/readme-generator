// === Helpers === //
import cn from 'classnames';

// === Styles === //
import styles from './Wrapper.module.scss';

// === Types === //
import { IWrapper } from './Wrapper.d';

const Wrapper = ({ children }: IWrapper) => {
  return <div className={cn(styles.wrapper)}>{children}</div>;
};

export default Wrapper;
