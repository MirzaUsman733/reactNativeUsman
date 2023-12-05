import React, {createContext, ReactNode, useContext, useState} from 'react';
import {ViewStyle, TextStyle} from 'react-native';

interface ThemeContextProps {
  backgroundColor: ViewStyle['backgroundColor'];
  textColor: TextStyle['color'];
  setTheme: (
    backgroundColor: ViewStyle['backgroundColor'],
    textColor: TextStyle['color'],
  ) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [backgroundColor, setBackgroundColor] =
    useState<ViewStyle['backgroundColor']>('white');
  const [textColor, setTextColor] = useState<TextStyle['color']>('black');

  const setTheme = (
    bgColor: ViewStyle['backgroundColor'],
    txtColor: TextStyle['color'],
  ) => {
    setBackgroundColor(bgColor);
    setTextColor(txtColor);
  };

  const themeContextValue: ThemeContextProps = {
    backgroundColor,
    textColor,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
