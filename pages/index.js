import Header from '../components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - My Awesome Website</title> {/* Dynamic title for Home */}
        <meta name="description" content="Welcome to the homepage of My Awesome Website!" /> {/* Dynamic meta description */}
      </Head>
<h1>Welcome to My Website</h1>
      <p>This is the Home page.</p>
    </div>
  );
}
