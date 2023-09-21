import AWSMetaData from './lib/AWSMetaData.js';
  
const awsMetaData = new AWSMetaData() ;
console.log(awsMetaData.getInstanceMetaData('ami-id'))