async function mergeTags(toc) {
  async function tagHandler(pid) {
    const response = await fetch(`http://localhost:3000/api/toc/${pid}`, {
      method: 'GET',
      redirect: 'follow',
    });
    const result = await response.json();
    return result;
  }

  function copy(o) {
    return Object.assign({}, o);
  }

  async function printAllVals(newToc) {
    for (let k in newToc) {
      let tags = await tagHandler(newToc[k]);
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

async function handler(req, res) {
  const { pid } = req.query;

  const response = await fetch(
    // 'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
    'https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/table-of-contents',
    // 'http://localhost:3000/api/dev/toc',
    {
      method: 'GET',
      redirect: 'follow',
    }
  );

  let result = await response.json();
  let items = await mergeTags(result);
  // console.log('🚀 ~ file: [pid].js ~ line 69 ~ handler ~ items', items);

  try {
    res.send(items);
  } catch (e) {
    console.error(e);
  }
}

export default handler;
