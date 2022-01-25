const nodeResult = ({ data }) => {
  function tagRegex(str) {
    let arr = [];
    let regex = /[tags]+:\s\[(?<tags>[a-z][a-z0-9_\s,]+[a-z0-9]*)\]/i;
    return regex.test(str) ? str.match(regex).groups.tags.split(', ') : arr;
  }
  return tagRegex(data);
};

export async function getNodeData(nodeId) {
  // const { pid } = req.query;

  const response = await fetch(
    // real repo
    `https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/nodes/${nodeId}`,

    // demo
    // `https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/nodes/${pid}`,
    {
      method: 'GET',
      redirect: 'follow',
    }
  );

  let result = await response.json();
  // let items = await nodeResult(result);
  // return items;
  let nodeObj = {
    uri: result?.uri,
    title: result?.title,
  };
  return nodeObj;
}

export default async function handler(req, res) {
  const { pid } = req.query;

  const jsonData = await getNodeData(pid);

  try {
    res.send(jsonData);
  } catch (e) {
    console.error(e);
  }
}
