import React from 'react';
import Navigation from './src/Navigation/Navigation';
import { ThemeProvider } from './src/Components/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;