import AWSMetaData from './lib/AWSMetaData.js';
  
const awsMetaData = new AWSMetaData() ;
const data = awsMetaData.getInstanceMetaData('ami-id')
console.log(data)