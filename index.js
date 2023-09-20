import {getInstanceMetaData} from './lib/AWSMetaData';

const response = getInstanceMetaData('ami-id');
console.log(response)