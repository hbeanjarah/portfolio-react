import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext/themecontext';

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
