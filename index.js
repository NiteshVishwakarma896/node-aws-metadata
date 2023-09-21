import AWSMetaData from './lib/AWSMetaData.js';
  
const awsMetaData = new AWSMetaData() ;
awsMetaData.getInstanceMetaData('ami-id')
console.log(awsMetaData.metadata)