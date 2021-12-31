import { createContext, useEffect, useState } from 'react';

interface ThemeContextType {
  dark: boolean;
  toggle: () => void;
}

interface ThemeProviderProps {
  children: any;
}

export const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  toggle: () => {}
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    localStorage.setItem('dark', JSON.stringify(!dark));
    setDark(!dark);

    document.body.classList.toggle('dark', !dark);
    document.body.classList.toggle('light', dark);
  };

  useEffect(() => {
    const localeDark = JSON.parse(localStorage.getItem('dark') as string);

    if (typeof localeDark !== 'boolean') document.body.classList.add(dark ? 'dark' : 'light');
    else {
      setDark(localeDark);
      document.body.classList.add(localeDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggle: toggleTheme }}>{children}</ThemeContext.Provider>
  );
};
