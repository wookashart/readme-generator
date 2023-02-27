// === Components === //
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button/Button';

// === Helpers === //
import { useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { handleOutsideClick } from '../../../helpers/utils';
import i18n from '../../../../next-i18next.config';
import cn from 'classnames';

// === Styles === //
import styles from './LangSelector.module.scss';

const LangSelector = () => {
  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const { t } = useTranslation('common');

  handleOutsideClick(wrapperRef, () => setOpen(false));

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <Button handleClick={() => setOpen(!open)}>
        <span className={styles.button}>
          <Image
            priority
            src={`/images/${t('current_lang').toLowerCase()}-svgrepo-com.svg`}
            height={18}
            width={18}
            alt={`${t('current_lang')} flag icon`}
          />
          {t('current_lang')}
        </span>
      </Button>

      {open && (
        <ul className={cn(styles.menu)}>
          {i18n.i18n.locales
            .filter((locale) => locale !== t('current_lang').toLowerCase())
            .map((locale) => {
              return (
                <li className={styles['menu-item']} key={locale}>
                  <Link
                    href="/"
                    locale={locale}
                    onClick={() => setOpen(false)}
                    className={styles.link}
                  >
                    <Image
                      priority
                      src={`/images/${locale}-svgrepo-com.svg`}
                      height={18}
                      width={18}
                      alt={`${locale} flag icon`}
                    />
                    {locale.toUpperCase()}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default LangSelector;
