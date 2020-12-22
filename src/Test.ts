import { handler } from './Index'

const context = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    invokedFunctionArn: '',
    memoryLimitInMB: '',
    awsRequestId: '',
    logGroupName: '',
    logStreamName: '',
    // identity: null,
    // clientContext: null,

    getRemainingTimeInMillis: () => 1,
    done: (error?: Error, result?: any) => {},
    fail: (error: Error | string) => {},
	succeed: (messageOrObject: any) => {},
};
const event = {
    Records: [
        {body: JSON.stringify({hoge: 'hoge'})},
        {body: JSON.stringify({hoge: 'fuga'})},
        {body: JSON.stringify({hoge: 'piyo'})},
    ],
};

handler(event, context, (error, result) => {
    console.log(error, result);
});
