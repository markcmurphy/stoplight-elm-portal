import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/guides">
          <h2 style={{ color: 'blue', cursor: 'pointer' }}>Guides</h2>
        </Link>
      </li>
      <li>
        <Link href="/concepts">
          <h2 style={{ color: 'blue', cursor: 'pointer' }}>Concepts</h2>
        </Link>
      </li>
    </ul>
  );
}
