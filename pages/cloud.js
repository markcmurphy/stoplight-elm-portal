import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import { useState } from 'react';
import { getData } from './api/mergetags/[pid]';

export default function Cloud({ items, tagsArray }) {
  // console.log('🚀 ~ file: cloud.js ~ line 10 ~ Cloud ~ tagsArray', tagsArray);

  function ListItem(tag) {
    // console.log('🚀 ~ file: cloud.js ~ line 25 ~ ListItem ~ tag', tag);
    return (
      <li>
        <Link href={`/tags/${tag.value}`}>
          <a>{tag.value}</a>
        </Link>
      </li>
    );
  }

  function NumberList({ tags }) {
    // console.log('🚀 ~ file: cloud.js ~ line 24 ~ NumberList ~ tags', tags);

    // function removeDupes(array) {
    //   return array.filter((value, index) => array.indexOf(value) === index);
    // }

    const listItems = removeDupes(tags).map((tag, index) => (
      <ListItem key={index} value={tag} />
    ));

    return <ul>{listItems}</ul>;
  }

  return <NumberList tags={tagsArray} style={{ marginLeft: '5vw' }} />;
}

export function removeDupes(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}
// export function getTags(obj) {
//   let tagsArr = [];
//   function printAllVals(obj) {
//     for (let k in obj) {
//       if (typeof obj[k] === 'object' && obj[k].tags == undefined) {
//         printAllVals(obj[k]);
//       } else {
//         obj[k].tags ? obj[k].tags.forEach((tag) => tagsArr.push(tag)) : null;
//       }
//     }

//     return tagsArr;
//   }
//   printAllVals(obj);
// }

export async function getStaticProps() {
  const { items } = await getData();
  // const tags = await getTags(items);
  // console.log('🚀 ~ file: cloud.js ~ line 54 ~ getStaticProps ~ tags', tags);
  // const tagsArray = getTags(items);
  // console.log(
  //   '🚀 ~ file: cloud.js ~ line 63 ~ getStaticProps ~ tagsArray',
  //   tagsArray
  // );
  let tagsArr = [];
  async function printAllVals(obj) {
    for (let k in obj) {
      if (typeof obj[k] === 'object' && obj[k].tags == undefined) {
        printAllVals(obj[k]);
      } else {
        obj[k].tags ? obj[k].tags.forEach((tag) => tagsArr.push(tag)) : null;
      }
    }

    return tagsArr;
  }

  let tagsArray = await printAllVals(items);

  return {
    props: {
      items,
      tagsArray,
    },
  };
}
