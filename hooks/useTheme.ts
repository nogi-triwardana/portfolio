import { ThemeContext } from 'context';
import { useContext } from 'react';

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw "Theme context isn't used within Theme Provider";
  }

  return theme;
};

export default useTheme;
