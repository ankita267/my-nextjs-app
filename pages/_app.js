import '../public/styles/globals.css';  // Import global styles
import Header from '../components/Header';  // Import the Header component
import Head from 'next/head';   // To manage the head tags globally

function MyApp({ Component, pageProps }) {
 const defaultTitle = "My Awesome Website";
  const defaultDescription = "This is an amazing website!";

  return (
    <>
      <Head>
        <title>{defaultTitle}</title> {/* Static title for the whole app */}
        <meta name="description" content={defaultDescription } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header /> {/* Your header component that will be present on every page */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
