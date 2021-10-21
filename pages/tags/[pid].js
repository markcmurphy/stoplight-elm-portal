import {
  StoplightProject,
  useGetNodeContent,
} from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { getTags } from '../cloud';
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

// export async function getStaticPaths() {
//   const items = await getData();
//   // const tagsArray = await getTags(toc);

//     let tagsArr = [];
//     async function printAllVals(obj) {
//       for (let k in obj) {
//         if (typeof obj[k] === 'object' && obj[k].tags == undefined) {
//           printAllVals(obj[k]);
//         } else {
//           obj[k].tags ? obj[k].tags.forEach((tag) => tagsArr.push(tag)) : null;
//         }
//       }

//       return tagsArr;
//     }

//     const tagsArray = await printAllVals(items);

//   return {
//     paths: tagsArray.map((tag) => {
//       {
//         params: {
//           pid: tag;
//         }
//       }
//     }),
//     fallback: true,
//   };
// }

// export async function getStaticProps({params}) {
//   const { items } = await getData();
//   const { pid } = router.query;

//   return {
//     props: {

//     },
//   };
// }

export default Tags;
