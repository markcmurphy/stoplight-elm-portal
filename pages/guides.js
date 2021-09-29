import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Guides() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <StoplightProject
        projectId="cHJqOjI4MDIz"
        router="memory"
        page="Guides"
      />
    </div>
  );
}
