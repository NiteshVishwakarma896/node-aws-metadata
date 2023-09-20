import fetch from 'node-fetch';
const base_url = "http://169.254.169.254/latest/meta-data";
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

module.exports = {
    getInstanceMetaData(key){
        if(!avaliable_services.includes(key)){
            return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
        }
        fetch(`${base_url}/key`)
        .then(res=>res.text())
        .then(data=>{return data})
        .catch(err=>{
            return new Error(err);
        });
    }
};