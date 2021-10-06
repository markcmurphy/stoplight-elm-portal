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
      <StoplightProject projectId="cHJqOjI4MDIz" router="memory" page={pid} />
    </div>
  );
};

export default Post;
