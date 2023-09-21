import http from 'http';

export const makeHttpRequestAndReturnText = (hostname, path, callback) => {
  return new Promise((resolve, reject) => {
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
          resolve(responseText);
        } else {
          const error = (new Error(`Request failed with status code ${response.statusCode}`));
          reject(error);
        }
      });
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.end();
  });
}
