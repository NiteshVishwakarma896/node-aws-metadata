// 'use strict';
const AWSMetaData = require('./lib/AWSMetaData');

async function main() {
    try {
        const _aws_metadata = new AWSMetaData();
        const metadata = await _aws_metadata.getInstanceAvailableMetaData();
        console.log(metadata)
    } catch (error) {
        console.log(error);
    }
}

main()
// module.exports = require("./lib/AWSMetaData.js");