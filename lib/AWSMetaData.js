import http from 'http';
const base_url = "http://169.254.169.254";
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
const options = {
    hostname: base_url,
    path: '/latest/meta-data',
    method: 'GET'
};
export const getInstanceMetaData = (key) =>{
    if(!avaliable_services.includes(key)){
        return new Error(`Input key: ${key} meta data services is not avaiable or restricted!`);
    }
    let result = "";
    const req = http.request(options, (res) => {
        let data = ''
         
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            result = data;
            res.json(data.split('\n'));
        });
           
    }).on("error", (err) => {
        console.log("Error fetching AWS instance metadata: ", err)
    })
    req.end();
    return result
}