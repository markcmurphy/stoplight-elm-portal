import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="tags/apps">
          <h2 style={{ color: 'blue', cursor: 'pointer' }}>Apps</h2>
        </Link>
      </li>
      <li>
        <Link href="tags/webhooks">
          <h2 style={{ color: 'blue', cursor: 'pointer' }}>Webhooks</h2>
        </Link>
      </li>
      <li>
        <Link href="guides">
          <h2 style={{ color: 'blue', cursor: 'pointer' }}>guides</h2>
        </Link>
      </li>
    </ul>
  );
}
