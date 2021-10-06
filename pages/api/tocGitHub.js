// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  let results;

  fetch(
    'https://api.github.com/repos/bigcommerce/dev-docs/contents/toc.json',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      res.status(200).toString(new Buffer(result.content, 'base64'));
    })
    .catch((error) => console.log('error', error));
  //   console.log(results);
  //   res.status(200).json(results);
}
