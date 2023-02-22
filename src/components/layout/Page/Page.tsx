// === Components === //
import Navigation from '../../sections/Navigation/Navigation';

// === Helpers === //
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// === Types === //
import { IPage } from './Page.d';

const Page = ({ children, darkMode }: IPage) => {
  const [sDarkMode, setSDarkMode] = useState<boolean>(darkMode);

  const handleSwitchToggle = () => {
    if (sDarkMode) {
      setSDarkMode(false);
      Cookies.remove('dark-mode');
    } else {
      setSDarkMode(true);
      Cookies.set('dark-mode', 'true', { expires: 365 });
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', sDarkMode);
    document.body.setAttribute('data-dark-mode', `${sDarkMode}`);
  }, [sDarkMode]);

  return (
    <div>
      <Navigation handleSwitchToggle={handleSwitchToggle} darkMode={sDarkMode} />
      {children}
    </div>
  );
};

export default Page;
