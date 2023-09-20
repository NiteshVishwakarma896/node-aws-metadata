import {getInstanceMetaData} from './lib/AWSMetaData.js';

const response = getInstanceMetaData('ami-id');
console.log(response)