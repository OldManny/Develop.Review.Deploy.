"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider 
      attribute="class" 
      enableSystem={true} // If you want to enable system preferences
      defaultTheme="system" // Default to system theme
    >
      {children}
    </ThemeProvider>
  );
}
