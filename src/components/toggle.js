import React, { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    return theme === 'dark';
  };

  return (
    <div>
      <label className='ml-10'>
        <input
          className='text-end'
          type='checkbox'
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        ></input>
        {theme} mode
      </label>
    </div>
  );
};

export default Toggle;
