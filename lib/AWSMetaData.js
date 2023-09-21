import { makeHttpRequestAndReturnData } from '../utils/helper.js';
class AWSMetaData{
    constructor(hostname,path){
        this.hostname = hostname || "169.254.169.254";
        this.path = path || "/latest/meta-data";
        this.avaliable_services = [
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
            "public-ipv4",
            "/tags/instance/Name",
            "/tags/instance/Environment",
        ];
    }

    async getInstanceMetaData(key){
        if(!this.avaliable_services.includes(key)){
            return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
        }
        const options = {
            hostname: this.hostname,
            path: `${this.path}/${key}`
        };
        try {
            const awsMetadata = await makeHttpRequestAndReturnData();
            // Now you can use awsMetadata as a variable with the resolved data
            console.log('AWS Metadata stored in a variable:', awsMetadata);
            return awsMetadata;
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
}

export default AWSMetaData;