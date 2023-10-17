import '@styles/global.css';
// import { Html } from 'next/document';
import React from "react";
import Header from "@/components/Header/Header";

export const metadata = {
    title: 'WebApp',
    decription: 'Website Structure and Design'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
          <body className="">
            <Header />
            {children}
          </body>
        </html>
      );
    }

export default RootLayout