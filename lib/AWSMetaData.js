import { makeHttpRequestAndReturnText } from '../utils/helper.js';
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

    getInstanceMetaData(key){
        if(!this.avaliable_services.includes(key)){
            return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
        }
        const options = {
            hostname: this.hostname,
            path: `${this.path}/${key}`
        };
        makeHttpRequestAndReturnText(options.hostname,options.path)
        .then((responseText)=>{
            console.log(responseText);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export default AWSMetaData;