// import { useState, useEffect } from "react";

// const usePersistedTheme = (defaultTheme = 'light') => {
//   const [theme, setTheme] = useState(defaultTheme);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') || defaultTheme;
//     setTheme(storedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     localStorage.setItem('theme', newTheme);
//     setTheme(newTheme);
//   };

//   return [theme, toggleTheme];
// };

// export default usePersistedTheme;


// usePersistedTheme.js
import { useState, useEffect } from 'react';

export const usePersistedTheme = (defaultTheme = 'light') => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme');
      return storedTheme || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
};

