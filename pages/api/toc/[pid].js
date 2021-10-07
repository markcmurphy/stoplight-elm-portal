// function filterReq(toc, str) {
//   function copy(o) {
//     return Object.assign({}, o);
//   }

//   var res = toc.items.map(copy).filter(function f(o) {
//     if (o.title.includes(str)) return true;

//     if (o.items) {
//       return (o.items = o.items.map(copy).filter(f)).length;
//     }
//   });

//   let filtered = () => {
//     let copied = copy(toc);
//     copied.items = res;
//     return copied;
//   };

//   return filtered();
// }

// const getNodeContent = ({
//   nodeSlug,
//   projectId,
//   branchSlug,
//   platformUrl = 'https://stoplight.io',
//   platformAuthToken,
// }) =>
//   __awaiter(void 0, void 0, void 0, function* () {
//     const nodeId = getNodeIdFromSlug(nodeSlug);
//     const branchQuery = branchSlug ? `?branch=${branchSlug}` : '';
//     const response = yield fetch(
//       `${platformUrl}/api/v1/projects/${projectId}/nodes/${nodeId}${branchQuery}`,
//       {
//         headers: Object.assign(
//           { 'Stoplight-Elements-Version': appVersion },
//           platformAuthToken && { Authorization: `Bearer ${platformAuthToken}` }
//         ),
//       }
//     );
//     const data = yield response.json();
//     if (!response.ok) {
//       if (response.status === 402) {
//         throw new ResponseError('Payment Required', response.status);
//       } else if (response.status === 403) {
//         throw new ResponseError('Forbidden', response.status);
//       } else {
//         throw new ResponseError('Something went wrong', response.status);
//       }
//     }
//     return data;
//   });

// function getNodeIdFromSlug(nodeSlug) {
//   return nodeSlug.split('-')[0];
// }

const nodeResult = ({ data }) => {
  function tagRegex(str) {
    let regex = /[tags]+:\s\[(?<tags>[a-z][a-z0-9_\s,]+[a-z0-9]*)\]/i;
    return str.match(regex).groups.tags;
  }
  return tagRegex(data).split(', ');
};

async function handler(req, res) {
  const { pid } = req.query;

  await fetch(
    // `https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/nodes/${pid}`,
    `https://stoplight.io/api/v1/projects/cHJqOjg3OTYx/nodes/ZG9jOjIyNjkyNjgz`,
    {
      method: 'GET',
      redirect: 'follow',
    }
  )
    .then((response) => response.json())
    .then((result) => {
      //   res.send(filterReq(result, pid));
      //   nodeResult(result);
      res.send(nodeResult(result));
    })
    .catch((error) => console.log('error', error));
}

export default handler;
