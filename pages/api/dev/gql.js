async function handler(req, res) {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept-Encoding', 'application/gzip');
  myHeaders.append(
    'Authorization',
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjaWQiOjEsImNvcnMiOltdLCJlYXQiOjE3ODcyODgwMDAsImlhdCI6MTYzNDE1NTg2MCwiaXNzIjoiQkMiLCJzaWQiOjEwMDE0ODY3OTYsInN1YiI6ImhtNnR0cjF6OGZ6dTJ1dGI3ZDFwOXFpbGU5anR1Z3YiLCJzdWJfdHlwZSI6MiwidG9rZW5fdHlwZSI6Mn0.JtSzQLAhx47dNkwTxDazEjFCmPo76kT7XZ9Mgw31EqbuTeWQokENw5JcRMEIyOVON9Kr4UJL7TZo_-FIUxCYaQ'
  );
  myHeaders.append('X-Bc-Customer-Id', '21');

  var raw = JSON.stringify({
    query:
      'query CustomerInformation {\n  customer {\n    firstName\n    lastName\n    email\n  }\n}',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://bc.murphymark.me/graphql', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
  //   res.send(itemsDemo);
}

export default handler;
