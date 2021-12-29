import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="apispecs">
          <h2 style={{ color: 'blue', cursor: 'pointer', margin: '10%' }}>
            API Reference
          </h2>
        </Link>
      </li>
    </ul>
  );
}
