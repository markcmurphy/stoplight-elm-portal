import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getTags } from '../cloud';
import { getData } from '../api/mergetags/[pid]';

const Tags = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Link href="/">
        <a style={{ color: 'blue', cursor: 'pointer' }}>Home</a>
      </Link>
      {pid ? (
        <StoplightProject projectId="cHJqOjI4MDIz" router="memory" page={pid} />
      ) : (
        'Loading'
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const toc = await getData();
  const tagsArray = await getTags(toc);
  return {
    paths: tagsArray.map((tag) => {
      {
        params: {
          pid: tag;
        }
      }
    }),
    // paths: [
    //   { params: { } }
    // ],
    fallback: true,
  };
}

export default Tags;
