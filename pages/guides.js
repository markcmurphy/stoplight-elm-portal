import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Guides() {
  return (
    <div>
      <Link href="/">
        <a style={{ color: 'blue', cursor: 'pointer' }}>Home</a>
      </Link>
      <StoplightProject
        projectId="cHJqOjIwNjAz"
        router="memory"
        tryItCorsProxy="https://cors-anywhere-proxy-mm.herokuapp.com/"
        // page="Guides"
      />
    </div>
  );
}
