// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../public/styles/Header.module.css';  // Import the CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/img/logo.webp" alt="Logo" width={150} height={50} />
      </div>
      <nav>
        <ul className={styles['nav-links']}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
