async function handler(req, res) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  await fetch(
    'https://stoplight.io/api/v1/projects/cHJqOjI4MDIz/table-of-contents',
    requestOptions
  )
    // .then((response) => response.json())
    .then((response) => res.send(response))
    // .then((result) => res.send(result))
    .catch((error) => console.log('error', error));
}

export default handler;
