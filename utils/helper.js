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
  }
  
}