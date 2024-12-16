import Header from '../components/Header';
import Head from 'next/head';

export default function Services() {
  return (
    <div>
  <Head>
        <title>Service - My Awesome Website</title> {/* Dynamic title for About Us */}
        <meta name="description" content="Learn more about My Awesome Website and what we do!" /> {/* Dynamic meta description */}
      </Head>

      <h1>Our Services</h1>
      <p>Here, we offer various services to help you achieve your goals.</p>
 </div>
  );
}
