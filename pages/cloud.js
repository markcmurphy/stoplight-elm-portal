import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { StoplightProject } from '@stoplight/elements-dev-portal';
import { useState } from 'react';

export default async function Home() {

  function ListItem(props) {
    return (
      <li>
        <Link href={`/tags/${props.value}`}>
          <a>{props.value}</a>
        </Link>
      </li>
    );
  }

  async function getItemsList() {
    const response = await fetch(`http://localhost:3000/api/toc/mergetags/merge`, {
      method: 'GET',
      redirect: 'follow',
    });
    const result = await response.json();
    return result;
  }

  function NumberList(props) {
    const titles = props.titles;
    let titlesArr = [];

    function printAllVals(obj) {
      for (let k in obj) {
        if (typeof obj[k] === 'object') {
          printAllVals(obj[k]);
        } else {
          k == 'title' ? titlesArr.push(obj[k]) : null;
        }
      }
      return titlesArr;
    }

    function removeDupes(array) {
      return array.filter((value, index) => array.indexOf(value) === index);
    }

    const listItems = removeDupes(printAllVals(titles)).map((title) => (
      <ListItem key={title.index} value={title} />
    ));

    return <ul>{listItems}</ul>;
  }

  const items = await getItemsList();



  return <NumberList titles={items} style={{ marginLeft: '5vw' }} />;
}
