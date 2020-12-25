import React, { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === 'dark';
  };

  return (
    <label>
      <input
        type='checkbox'
        checked={isDark()}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      ></input>
      {theme} Mode
    </label>
  );
};

export default Toggle;
