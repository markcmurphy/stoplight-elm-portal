import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);

  return (
    <div>
      <Link href="/">
        <a style={{ color: 'blue', cursor: 'pointer' }}>Home</a>
      </Link>
      {pid ? (
        // <StoplightProject projectId="cHJqOjI4MDIz" router="memory" page={pid} />
        <StoplightProject projectId="cHJqOjg3OTYx" router="memory" page={pid} />
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default Post;
