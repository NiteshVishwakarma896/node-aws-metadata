# node-aws-metadata

> Library to fetch aws metadata for the application running on EC2 instances in AWS

<p>
Because your instance metadata is available from your running instance, you do not need to use the Amazon EC2 console or the AWS CLI. This can be helpful when you're writing scripts to run from your instance. For example, you can access the local IP address of your instance from instance metadata to manage a connection to an external application.
<br/>
<br/>
Instance metadata is divided into categories. For a description of each instance metadata category, see Instance metadata categories below.
</p>

[![NPM](https://img.shields.io/npm/v/node-aws-metadata.svg)](https://www.npmjs.com/package/node-aws-metadata) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save node-aws-metadata
```
## The top-level metadata items can be fetched
<p>ami-id</p>
<p>ami-launch-index</p>
<p>ami-manifest-path</p>
<p>hostname</p>
<p>instance-action</p>
<p>instance-id</p>
<p>instance-type</p>
<p>local-hostname</p>
<p>local-ipv4</p>
<p>profile</p>
<p>public-hostname</p>
<p>public-ipv4</p>
<p>/tags/instance/Name</p>
<p>/tags/instance/Environment</p>
<br/>

## Usage

```jsx
const AWSMetaData = require('node-aws-metadata');

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
```

## License

ISC © [NiteshVishwakarma896](https://github.com/NiteshVishwakarma896)