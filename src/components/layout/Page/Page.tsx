// === Components === //
import Navigation from '../../sections/Navigation/Navigation';

// === Helpers === //
import { useEffect } from 'react';
import Cookies from 'js-cookie';

// === Types === //
import { IPage } from './Page.d';

const Page = ({ children, darkMode, setDarkMode }: IPage) => {
  const handleSwitchToggle = () => {
    if (darkMode) {
      setDarkMode(false);
      Cookies.remove('dark-mode');
    } else {
      setDarkMode(true);
      Cookies.set('dark-mode', 'true', { expires: 365 });
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.setAttribute('data-dark-mode', `${darkMode}`);
  }, [darkMode]);

  return (
    <div>
      <Navigation handleSwitchToggle={handleSwitchToggle} darkMode={darkMode} />
      {children}
    </div>
  );
};

export default Page;
