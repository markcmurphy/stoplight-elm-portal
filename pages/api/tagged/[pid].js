async function filterReq(toc, tag) {
  function copy(o) {
    return Object.assign({}, o);
  }

  async function res(toc) {
    const mapTags = () =>
      toc.items.map(copy).filter(function f(o) {
        if (o.tags && o.tags.includes(tag)) return true;

        if (o.items) {
          return (o.items = o.items.map(copy).filter(f)).length;
        }
      });

    let mapped = await mapTags();
    return mapped;
  }

  async function filtered(toc) {
    let copied = copy(toc);

    let copiedItems = await res(copied);
    copied.items = copiedItems;

    return copied;
  }

  const filteredRes = await filtered(toc);

  return filteredRes;
}

async function handler(req, res) {
  const { pid } = req.query;

  const response = await fetch(
    // 'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
    // 'https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/table-of-contents',
    `http://localhost:3000/api/mergetags/${pid}`,
    {
      method: 'GET',
      redirect: 'follow',
    }
  );

  const result = await response.json();
  const resToc = await filterReq(result, pid);

  try {
    res.send(resToc);
  } catch (e) {
    console.error(e);
  }
}

export default handler;
