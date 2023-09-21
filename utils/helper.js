import http from 'http';
import fetch from 'node-fetch';

export const makeHttpRequestAndReturnText = (hostname, path, callback) => {
  const options = {
    hostname: hostname,
    path: path,
    method: 'GET',
  };

  const request = http.request(options, (response) => {
    let responseText = '';
    response.on('data', (chunk) => {
      responseText += chunk;
    });

    response.on('end', () => {
      if (response.statusCode === 200) {
        callback(null, responseText);
      } else {
        const error = (new Error(`Request failed with status code ${response.statusCode}`));
        callback(error);
      }
    });
  });

  request.on('error', (error) => {
    callback(error);
  });

  request.end();
}
