import { getNodeData } from '../toc/[pid]';

async function mergeTags(toc) {
  function copy(o) {
    return Object.assign({}, o);
  }

  async function printAllVals(newToc) {
    for (let k in newToc) {
      let tags = await getNodeData(newToc[k]);
      if (typeof newToc[k] === 'object') {
        await printAllVals(newToc[k]);
      } else {
        let newObj = {
          ...newToc,
          tags,
        };

        if (k == 'id') {
          return Object.assign(newToc, newObj);
        }
      }
    }
    return newToc;
  }

  let resolve = copy(toc);
  let tocItemsCopy = resolve.items.map(copy);
  let resItems = await printAllVals(tocItemsCopy);
  resItems ? (resolve.items = resItems) : null;
  return resolve;
}

export async function getData() {
  const response = await fetch(
    'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents?branch=md-metadata-test',
    {
      method: 'GET',
      redirect: 'follow',
    }
  );

  let result = await response.json();
  let items = await mergeTags(result);
  return items;
}

export async function handler(req, res) {
  const jsonData = await getData();

  try {
    res.send(jsonData);
  } catch (e) {
    console.error(e);
  }
}
