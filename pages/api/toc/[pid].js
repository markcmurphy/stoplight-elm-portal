const nodeResult = ({ data }) => {
  function tagRegex(str) {
    let arr = [];
    let regex = /[tags]+:\s\[(?<tags>[a-z][a-z0-9_\s,]+[a-z0-9]*)\]/i;
    // console.log(str.match(regex));
    return regex.test(str) ? str.match(regex).groups.tags.split(', ') : arr;
  }
  return tagRegex(data);
};

async function handler(req, res) {
  const { pid } = req.query;

  await fetch(
    // real repo
    // `https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/nodes/${pid}`,
    // demo
    `https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/nodes/${pid}`,
    // `https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/nodes/ZG9jOjIyNjkyNjgz`,
    {
      method: 'GET',
      redirect: 'follow',
    }
  )
    .then((response) => response.json())
    .then((result) => {
      // console.log(nodeResult(result));
      res.send(nodeResult(result));
    })
    .catch((error) => console.log('error', error));
}

export default handler;
