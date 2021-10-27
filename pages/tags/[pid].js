import {
  StoplightProject,
  useGetNodeContent,
  Search,
} from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { getTags } from '../cloud';
import { getData } from '../api/mergetags/[pid]';
import { filterReq } from '../api/tagged/[pid]';
import { getFilteredToc } from '../api/tagged/[pid]';
import { removeDupes } from '../cloud';

const Tags = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  console.log('🚀 ~ file: [pid].js ~ line 15 ~ Tags ~ props', props);
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

// export async function getStaticPaths(context) {
//   console.log(
//     '🚀 ~ file: [pid].js ~ line 34 ~ getStaticPaths ~ context',
//     context
//   );

//   const items = await getData();

//   let tagsArr = [];
//   async function printAllVals(obj) {
//     for (let k in obj) {
//       if (typeof obj[k] === 'object' && obj[k].tags == undefined) {
//         printAllVals(obj[k]);
//       } else {
//         obj[k].tags ? obj[k].tags.forEach((tag) => tagsArr.push(tag)) : null;
//       }
//     }
//     return tagsArr;
//   }
//   const tagsArray = await printAllVals(items);

//   console.log(
//     '🚀 ~ file: [pid].js ~ line 55 ~ paths ~ removeDupes(tagsArray)',
//     removeDupes(tagsArray)
//   );
//   const paths = removeDupes(tagsArray).map((tag) => ({
//     params: { pid: tag },
//   }));
//   console.log('🚀 ~ file: [pid].js ~ line 60 ~ paths ~ paths ', paths);
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log(
//     '🚀 ~ file: [pid].js ~ line 63 ~ getStaticProps ~ params',
//     params
//   );
//   const { items } = await getData();
//   // const { pid } = router.query;
//   const toc = await getFilteredToc(params.pid);
//   console.log('🚀 ~ file: [pid].js ~ line 74 ~ getStaticProps ~ toc', toc);

//   return {
//     props: { toc },
//   };
// }

export default Tags;
