const fetch = require('node-fetch');

const handler = async function (event, context) {
  console.log('🚀 ~ file: node-fetch.js ~ line 4 ~ handler ~ event', event);
  try {
    const response = await fetch(event.queryStringParameters.endpoint, {
      headers: {
        'X-Auth-Token': event.queryStringParameters.token,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.clone().json();
    const headers = await response.headers;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 'Content-Type': headers.get('Content-Type') },
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      bodyText: JSON.stringify(data),
      body: JSON.stringify(data),
    };
  }
};

module.exports = { handler };
