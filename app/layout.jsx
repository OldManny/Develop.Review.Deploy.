import '@styles/global.css';
// import { Html } from 'next/document';
import React from "react";
import Header from "@/components/Header/Header";
import Footer from '@components/Footer/Footer';

export const metadata = {
    title: 'Develop.Review.Deploy.',
    decription: 'Website Structure and Design'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
          <body className="">
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      );
    }

export default RootLayout