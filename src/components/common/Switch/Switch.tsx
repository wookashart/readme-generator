// === Components === //
import Image from 'next/image';

// === Helpers === //
import cn from 'classnames';
import { useState } from 'react';

// === Types === //
import { ISwitch } from './Switch.d';

// === Styles === //
import styles from './Switch.module.scss';

const Switch = ({ id, type = 'default', defaultValue = false, handleToggle }: ISwitch) => {
  const [checked, setChecked] = useState<boolean>(defaultValue);

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={cn(styles.input, styles[`input__type--${type}`])}
        onChange={() => {
          handleToggle();
          setChecked(!checked);
        }}
      />
      <label htmlFor={id} className={cn(styles.label, styles[`label__type--${type}`])}>
        {type === 'darkmode' && (
          <>
            <Image
              priority
              src="images/moon-svgrepo-com.svg"
              height={14}
              width={14}
              alt="Moon icon"
              className={cn(styles.icon, styles['icon--moon'])}
            />
            <Image
              priority
              src="images/sunny-svgrepo-com.svg"
              height={14}
              width={14}
              alt="Moon icon"
              className={cn(styles.icon, styles['icon--sun'])}
            />
          </>
        )}
      </label>
    </div>
  );
};

export default Switch;
