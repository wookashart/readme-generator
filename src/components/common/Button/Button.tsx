// === Styles === //
import styles from './Button.module.scss';

// === Types === //
import { IButton } from './Button.d';

const Button = ({ children, handleClick }: IButton) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => handleClick()} className={styles.button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
