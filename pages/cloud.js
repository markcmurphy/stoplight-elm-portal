import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import { useState } from 'react';

export default function Cloud({ items }) {
  console.log('🚀 ~ file: cloud.js ~ line 9 ~ Cloud ~ items', items);
  function ListItem(tag) {
    return (
      <li>
        <Link href={`/tags/${tag.value}`}>
          <a>{tag.value}</a>
        </Link>
      </li>
    );
  }

  function NumberList({ tags }) {
    function printAllVals(obj) {
      let tagsArr = [];
      for (let k in obj) {
        if (typeof obj[k] === 'object' && obj[k].tags == undefined) {
          printAllVals(obj[k]);
        } else {
          obj[k].tags ? obj[k].tags.forEach((tag) => tagsArr.push(tag)) : null;
        }
      }
      return tagsArr;
    }

    function removeDupes(array) {
      return array.filter((value, index) => array.indexOf(value) === index);
    }

    const listItems = removeDupes(printAllVals(tags)).map((tag, index) => (
      <ListItem key={index} value={tag} />
    ));

    return <ul>{listItems}</ul>;
  }

  return <NumberList tags={items} style={{ marginLeft: '5vw' }} />;
}

export async function getStaticProps() {
  const res = await fetch(`/api/mergetags/merge`, {
    method: 'GET',
    redirect: 'follow',
  });

  const { items } = await res.json();

  return {
    props: {
      items,
    },
  };
}
