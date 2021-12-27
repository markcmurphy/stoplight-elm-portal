import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';

export default function Home() {
  return (
    // <ul>
    //   <li>
    //     <Link href="tags/apps">
    //       <h2 style={{ color: 'blue', cursor: 'pointer' }}>Apps</h2>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href="tags/webhooks">
    //       <h2 style={{ color: 'blue', cursor: 'pointer' }}>Webhooks</h2>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href="guides">
    //       <h2 style={{ color: 'blue', cursor: 'pointer' }}>guides</h2>
    //     </Link>
    //   </li>
    // </ul>
    <StoplightProject
      projectId="cHJqOjIwNjAz"
      router="memory"
      // tryItCorsProxy="https://cors-anywhere-proxy-mm.herokuapp.com/"
    />
  );
}
