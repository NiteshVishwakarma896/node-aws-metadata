# node-aws-metadata

> Library to fetch aws metadata for the application running on EC2 instances in AWS

<p>
Instance metadata is available from your running instance, you do not need to use the Amazon EC2 console or the AWS CLI. This can be helpful when you're writing scripts to run from your instance. For example, you can access the local IP address of your instance from instance metadata to manage a connection to an external application.
<br/>
<br/>
Instance metadata is divided into categories. For a description of each instance metadata category, see Instance metadata categories below.
</p>

[![NPM](https://img.shields.io/npm/v/node-aws-metadata.svg)](https://www.npmjs.com/package/node-aws-metadata) 
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save node-aws-metadata
```
## The top-level metadata items can be fetched
- <p>ami-id</p>
- <p>ami-launch-index</p>
- <p>ami-manifest-path</p>
- <p>hostname</p>
- <p>instance-action</p>
- <p>instance-id</p>
- <p>instance-type</p>
- <p>local-hostname</p>
- <p>local-ipv4</p>
- <p>profile</p>
- <p>public-hostname</p>
- <p>public-ipv4</p>
- <p>placement/availability-zone</p>
- <p>placement/availability-zone-id</p>
- <p>placement/region</p>


## Usage

```jsx
const AWSMetaData = require('node-aws-metadata');

// To Get Instance Meta Data by a meta data category
const getInstanceData = async() =>{
    try{
        const _aws_metadata = new AWSMetaData();
        const metadata = await _aws_metadata.getInstanceMetaData('ami-id');
        console.log(metadata);
    }
    catch(err=>{
        console.log(err);
    })
    
}

// To Get Instance Avaliable Meta Data
const getInstanceAllMetaData = async() =>{
    try{
        const _aws_metadata = new AWSMetaData();
        const metadata = await _aws_metadata.getInstanceAvailableMetaData();
        console.log(metadata);
    }
    catch(err=>{
        console.log(err);
    })
    
}
```
## Outputs
>getInstanceMetaData('ami-id') : 
```json
{ 
    'ami-id': 'ami-1234567890-1243' 
}
```
<br/>

>getInstanceAvailableMetaData()
```json
{
  'ami-id': 'ami-0123456789-12',
  'ami-launch-index': 0,
  'ami-manifest-path': '',
  'hostname': 'ip-123-445-677.us-west-1.compute.internal',
  'instance-action': 'none',
  'instance-id': 'i-08157b014b8620ca8',
  'instance-type': 't2.micro',
  'local-hostname': 'ip-123-445-677.us-west-1.compute.internal',
  'local-ipv4': '123.123.122.167',
  'profile': 'default-hvm',
  'public-hostname': 'ec2-123-445-677.us-west-1.compute.amazonaws.com',
  'public-ipv4': '123.111.48.124',
  'placement/availability-zone': 'us-west-1b',
  'placement/availability-zone-id': 'usw1-az1',
  'placement/region': 'us-west-1'
}
```


## License

ISC © [NiteshVishwakarma896](https://github.com/NiteshVishwakarma896)