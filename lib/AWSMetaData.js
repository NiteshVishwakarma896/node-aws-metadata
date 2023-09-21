import { makeHttpRequestAndReturnText } from '../utils/helper.js';
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

    getInstanceMetaData (key){
        if(!this.avaliable_services.includes(key)){
            return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
        }
        const options = {
            hostname: this.hostname,
            path: `${this.path}/${key}`
        };
        try {
            return makeHttpRequestAndReturnText(options.hostname,options.path,(error,responseText)=>{
                if (error) {
                    return ('Error:', error.message);
                } else {
                    console.log('Response text:');
                    console.log(responseText);
                    return responseText;
                }
            })
        } catch (error) {
            return error;
        }
    }
}

export default AWSMetaData;