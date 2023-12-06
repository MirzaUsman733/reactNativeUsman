import React, { useEffect, useState } from 'react';
import Navigation from './src/Navigation/Navigation';
import { ThemeProvider } from './src/Components/ThemeContext';
import SplashScreen from './src/Components/SplashScreen';

const App: React.FC = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     }, 3000); // 3 seconds splash screen
   }, []);
    if (isLoading) {
      return <SplashScreen />;
    }
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;