import { makeHttpRequestAndReturnText } from '../utils/helper.js';
const base_url = "169.254.169.254";
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
 
export const getInstanceMetaData = async (key) =>{
    if(!avaliable_services.includes(key)){
        return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
    }
    const options = {
        hostname: base_url,
        path: `/latest/meta-data/${key}`
    };
    try {
        const response = await makeHttpRequestAndReturnText(options.hostname,options.path);
        return response;
    } catch (error) {
        return error;
    }
}