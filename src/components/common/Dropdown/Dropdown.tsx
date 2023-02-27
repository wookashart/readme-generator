// === Components === //
import Select, { StylesConfig } from 'react-select';

// === Helpers === //
import { useTranslation } from 'next-i18next';

// === Styles === //
import styles from './Dropdown.module.scss';

// === Types === //
import { IDropdown } from './Dropdown.d';

const Dropdown = ({ darkMode, label, options, value, handleChange, name }: IDropdown) => {
  const { t } = useTranslation('common');

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.2)' : '#ffffff',
      border: `none`,
      boxShadow: '0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)',
      borderRadius: 4,
      cursor: 'pointer',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: darkMode ? '#ffffff' : '#000000',
      fontSize: 12,
    }),
    input: (styles) => ({
      ...styles,
      color: darkMode ? '#ffffff' : '#000000',
      fontSize: 12,
    }),
    placeholder: (styles) => ({
      ...styles,
      color: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
      fontSize: 12,
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: darkMode ? '#525252' : '#ffffff',
      border: `none`,
      boxShadow: '0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)',
      borderRadius: 4,
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? `${darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)'}`
        : isFocused
        ? `${darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
        : undefined,
      color: darkMode ? '#ffffff' : '#000000',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontSize: 12,
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? `${darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)'}`
            : `${darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
          : undefined,
      },
    }),
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <Select
        instanceId={`select-${name}`}
        name={name}
        placeholder={t('select_placeholder')}
        value={value}
        onChange={(value) => handleChange(value)}
        options={options}
        styles={colourStyles}
        controlShouldRenderValue
      />
    </div>
  );
};

export default Dropdown;
