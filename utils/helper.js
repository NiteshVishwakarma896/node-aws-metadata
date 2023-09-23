const axios = require('axios');

module.exports = {
  async makeHttpRequestAndReturnData(hostname, path,key){
    try {
      let instanceMetadataUrl = hostname+path;
      const response = await axios.get(instanceMetadataUrl);
      const metadata = JSON.parse(response.data.split('\n'));
      return result = {
        [key]: metadata
      };
    } catch (error) {
      throw error; 
    }
  },
  async makeHttpRequestAndReturnAllMetaData(hostname, path,avaliable_services){
    const urls = {};
    avaliable_services.map((e)=>{
      urls[e]=`${hostname}${path}/${e}`
    })
    try {
      const responses = await Promise.all(Object.entries(urls).map(([key, url]) => axios.get(url).then(response => [key, response.data])));
      const responseData = Object.fromEntries(responses);
      return responseData;
    } catch (error) {
      throw error;
    }
  }
}