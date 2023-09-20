import http from 'http';
const base_url = "http://169.254.169.254";
const avaliable_services = [
    "ami-id",
    "ami-launch-index",
    "ami-manifest-path",
    "hostname",
    "instance-action",
    "instance-id",
    "instance-type",
    "local-hostname",
    "local-ipv4",
    "profile",
    "public-hostname",
    "public-ipv4"
]
const makeHttpRequestAndReturnText = (hostname, path) => {
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
            reject(new Error(`Request failed with status code ${response.statusCode}`));
          }
        });
      });
  
      request.on('error', (error) => {
        reject(error);
      });
  
      request.end();
    });
}
  
export const getInstanceMetaData = (key) =>{
    if(!avaliable_services.includes(key)){
        return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
    }
    const options = {
        hostname: base_url,
        path: `/latest/meta-data/${key}`
    };
    let result = "";
    makeHttpRequestAndReturnText(options.hostname,options.path)
    .then((responseText) => {
        console.log('Response text:');
        console.log(responseText);
        result = responseText;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    return result
}