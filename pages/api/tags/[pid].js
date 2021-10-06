function filterReq(toc, str) {
  function copy(o) {
    return Object.assign({}, o);
  }

  var res = toc.items.map(copy).filter(function f(o) {
    if (o.title.includes(str)) return true;

    if (o.items) {
      return (o.items = o.items.map(copy).filter(f)).length;
    }
  });

  let filtered = () => {
    // console.log(res);
    let copied = copy(toc);
    copied.items = res;
    return copied;
  };

  return filtered();
}

async function handler(req, res) {
  const { pid } = req.query;

  await fetch(
    'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
    {
      method: 'GET',
      redirect: 'follow',
    }
  )
    .then((response) => response.json())
    .then((result) => {
      res.send(filterReq(result, pid));
    })
    .catch((error) => console.log('error', error));
}

export default handler;
