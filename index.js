import AWSMetaData from './lib/AWSMetaData.js';
  
async function main() {
    const awsMetadata = new AWSMetaData(); // Create an instance of AWSMetaData

    try {
        const metadataValue = await awsMetadata.getInstanceMetaData('instance-id');
        console.log('Metadata:', metadataValue);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();