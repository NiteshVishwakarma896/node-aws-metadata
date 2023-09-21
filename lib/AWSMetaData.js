import fetch from 'node-fetch';
import { makeHttpRequestAndReturnText,makeFetchRequestAndReturnText } from '../utils/helper.js';
class AWSMetaData{
    constructor(hostname,path){
        this.hostname = hostname || "169.254.169.254";
        this.path = path || "/latest/meta-data";
        this. avaliable_services = [
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
        ];
        this.metadata = "";
    }

    async getInstanceMetaData (key){
        if(!this.avaliable_services.includes(key)){
            return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
        }
        try {
            let response = await fetch(`${this.hostname}${this.path}/${this.key}`);
            console.log(response);
            let data = response.text();
            return data;
        } catch (error) {
            return error;
        }
    }
}

export default AWSMetaData;