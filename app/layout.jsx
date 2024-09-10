import "/styles/global.css";
import Header from "/components/Header/Header";
import Footer from '/components/Footer/Footer';
import Providers from "./providers";
import Head from 'next/head';

export const metadata = {
  title: "Develop. Review. Deploy.",
  description: "Portfolio and resume of a software engineer.",
  favicon: {
    ico: '/favicon.ico',
    png: '/favicon.png',
  }
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Adding the favicon */}
        <link rel="icon" type="image/x-icon" href={metadata.favicon.ico} />
        {/* Fallback for PNG if ICO is not available */}
        <link rel="alternate icon" type="image/png" href={metadata.favicon.png} />
      </Head>
      <body>
        <Providers>
            <Header />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
