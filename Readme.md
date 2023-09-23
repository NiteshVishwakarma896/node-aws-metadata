# node-aws-metadata

> Library to fetch aws metadata for the application running on EC2 instances in AWS

<p>
Instance metadata is available from your running instance, you do not need to use the Amazon EC2 console or the AWS CLI. This can be helpful when you're writing scripts to run from your instance. For example, you can access the local IP address of your instance from instance metadata to manage a connection to an external application.
<br/>
<br/>
Instance metadata is divided into categories. For a description of each instance metadata category, see Instance metadata categories below.
</p>

[![NPM](https://img.shields.io/npm/v/node-aws-metadata.svg)](https://www.npmjs.com/package/node-aws-metadata) 
![npm bundle size](https://img.shields.io/bundlephobia/min/node-aws-metadata)
![npm](https://img.shields.io/npm/dw/node-aws-metadata)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/package/node-aws-metadata).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 12 or higher is required.

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

<p>
Output displayed below will have same format, content might defer below content for response is not shown.
</p>
</br>

> getInstanceMetaData('ami-id') : 

```json
{ 
    'ami-id': 'amazon-linux-image-id' 
}
```
<br/>

>getInstanceAvailableMetaData()
```json
{
  'ami-id': '',
  'ami-launch-index': ,
  'ami-manifest-path': '',
  'hostname': '',
  'instance-action': '',
  'instance-id': '',
  'instance-type': 't2.micro',
  'local-hostname': '',
  'local-ipv4': '',
  'profile': '',
  'public-hostname': '',
  'public-ipv4': '',
  'placement/availability-zone': 'us-west-1',
  'placement/availability-zone-id': '',
  'placement/region': 'us-west-1'
}
```


## License

ISC © [NiteshVishwakarma896](https://github.com/NiteshVishwakarma896)