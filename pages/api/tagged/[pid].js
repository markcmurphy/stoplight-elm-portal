import { getData } from '../mergetags/[pid]';

export async function filterReq(toc, tag) {
  function copy(o) {
    return Object.assign({}, o);
  }

  async function res(toc) {
    const mapTags = (toc) =>
      toc.items.map(copy).filter(function f(o) {
        if (o.tags && o.tags.includes(tag)) return true;

        if (o.items) {
          return (o.items = o.items.map(copy).filter(f)).length;
        }
      });

    let mapped = await mapTags(toc);
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

export async function getFilteredToc(page) {
  const result = await getData();

  //  const { pid } = req.query;

  //  const response = await fetch(
  //    // 'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
  //    // 'https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/table-of-contents',
  //    `/api/mergetags/${pid}`,
  //    {
  //      method: 'GET',
  //      redirect: 'follow',
  //    }
  //  );

  // let result = await response.json();
  let resToc = await filterReq(result, page);

  return resToc;
}

export default async function handler(req, res) {
  const { pid } = req.query;
  const jsonData = await getFilteredToc(pid);

  try {
    res.send(jsonData);
  } catch (e) {
    console.error(e);
  }
}

// export default handler;
