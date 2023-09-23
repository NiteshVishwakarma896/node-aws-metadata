const axios = require('axios');

module.exports = {
  async makeHttpRequestAndReturnData(hostname, path){
    try {
      let instanceMetadataUrl = hostname+path;
      const response = await axios.get(instanceMetadataUrl);
      const metadata = response.data.split('\n');
      return metadata;
    } catch (error) {
      throw error; 
    }
  },
  async makeHttpRequestAndReturnAllMetaData(hostname, path,avaliable_services){
    const urls = avaliable_services.map((e)=>{
      return `${hostname}${path}/${e}`;
    })
    try {
      const responses = await Promise.all(urls.map(url => axios.get(url)));
      return responses.map(response => response.data);
    } catch (error) {
      throw error;
    }
  }
}