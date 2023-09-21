const {makeHttpRequestAndReturnData} = require('../utils/helper');
class AWSMetaData{
    constructor(hostname,path){
        this.hostname = hostname || "http://169.254.169.254";
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
            const awsMetadata = await makeHttpRequestAndReturnData(options.hostname,options.path);
            return awsMetadata;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AWSMetaData;