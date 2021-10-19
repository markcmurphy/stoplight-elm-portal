async function mergeTags(toc) {
  async function tagHandler(pid) {
    const response = await fetch(`http://localhost:3000/api/toc/${pid}`, {
      method: 'GET',
      redirect: 'follow',
    });
    const result = await response.json();
    // console.log('🚀 ~ file: [pid].js ~ line 8 ~ tagHandler ~ result', result);
    return result;
  }

  function copy(o) {
    return Object.assign({}, o);
  }

  async function printAllVals(tocItemsCopy) {
    let tags;
    let newToc = tocItemsCopy;
    // console.log(
    //   '🚀 ~ file: [pid].js ~ line 19 ~ printAllVals ~ newToc',
    //   newToc
    // );

    //   async function res() {
    //     await toc.items.map(copy).filter(function f(o) {
    //       if (o.tags.includes(tag)) return true;

    //       if (o.items) {
    //         return (o.items = o.items.map(copy).filter(f)).length;
    //       }
    //     });
    //   }

    //   async function filtered() {
    //     console.log(res);
    //     let copied = copy(toc);
    //     copied.items = await res;
    //     return copied;
    //   }

    //   return filtered();

    for (let k in newToc) {
      if (typeof newToc[k] === 'object') {
        console.log(
          '🚀 ~ file: [pid].js ~ line 46 ~ printAllVals ~ printAllVals(newToc[k])',
          await printAllVals(newToc[k])
        );
        await printAllVals(newToc[k]);
      } else {
        let tags = await tagHandler(newToc[k]);

        let newObj = {
          ...newToc,
          tags,
        };

        if (k == 'id') {
          // newToc[k] = newObj;
          // console.log(
          //   '🚀 ~ file: [pid].js ~ line 54 ~ printAllVals ~ newToc',
          //   newToc
          // );
          // console.log(
          //   '🚀 ~ file: [pid].js ~ line 53 ~ printAllVals ~ newObj',
          //   newObj
          // );
          // console.log(
          //   '🚀 ~ file: [pid].js ~ line 55 ~ printAllVals ~ Object.assign(newToc, newObj)',
          //   Object.assign(newToc, newObj)
          // );
          // console.log(`${k} + ${newToc.tags}`);
          return Object.assign(newToc, newObj);

          // console.log(
          //   '🚀 ~ file: [pid].js ~ line 53 ~ printAllVals ~ retObj',
          //   retObj
          // );

          // console.log(
          //   '🚀 ~ file: [pid].js ~ line 52 ~ printAllVals ~ newToc[k]',
          //   newToc[k]
          // );

          // if (newToc[k].hasOwnProperty('tags')) {
          //   return newToc[k];
          // }
        } else {
          return newToc;
        }
      }
    }
    return newToc;
  }

  let resolve = copy(toc);
  let tocItemsCopy = resolve.items.map(copy);

  let resItems = await printAllVals(tocItemsCopy);
  // console.log('🚀 ~ file: [pid].js ~ line 90 ~ mergeTags ~ resItems', resItems);
  resItems ? (resolve.items = resItems) : null;
  return resolve;
}

// async function filterReq(toc, tag) {
//   console.log(toc);
//   console.log(tag);
//   function copy(o) {
//     return Object.assign({}, o);
//   }

//   async function res() {
//     await toc.items.map(copy).filter(function f(o) {
//       if (o.tags.includes(tag)) return true;

//       if (o.items) {
//         return (o.items = o.items.map(copy).filter(f)).length;
//       }
//     });
//   }

//   async function filtered() {
//     console.log(res);
//     let copied = copy(toc);
//     copied.items = await res;
//     return copied;
//   }

//   return filtered();
// }

async function handler(req, res) {
  const { pid } = req.query;

  const response = await fetch(
    // 'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
    // 'https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/table-of-contents',
    'http://localhost:3000/api/dev/toc',
    {
      method: 'GET',
      redirect: 'follow',
    }
  );

  let result = await response.json();
  let items = await mergeTags(result);
  // console.log('🚀 ~ file: [pid].js ~ line 101 ~ handler ~ items', items);

  // result.items = items;

  // console.log('🚀 ~ file: [pid].js ~ line 98 ~ handler ~ resToc', resToc);

  //   const filteredToc = await filterReq(resToc, pid);
  try {
    res.send(items);
    // res.send(filteredToc);
  } catch (e) {
    console.error(e);
  }
}

export default handler;
