import axios from 'axios';

export const makeHttpRequestAndReturnData = async(hostname, path) => {
  try {
    let instanceMetadataUrl = hostname+path;
    const response = await axios.get(instanceMetadataUrl);
    const metadata = response.data.split('\n');
    
    // console.log('AWS Instance Metadata:');
    // metadata.forEach(item => {
    //   console.log(item);
    // });

    return metadata;
  } catch (error) {
    console.error('Error fetching AWS metadata:', error);
    throw error; 
  }
}
