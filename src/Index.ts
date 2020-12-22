import middy from '@middy/core';
import validator from '@middy/validator';
import sqsJsonBodyParser from '@middy/sqs-json-body-parser';

import { proc } from './Proc';

const handler = middy(async (event: any, context: any, callback: (err: null | string | Error, result: any) => void) => {
    try {
        const result = await proc(event, context);
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
});
const schema = {
    properties: {
        result: {
            type: 'array',
            items: {
                type: 'string',
                pattern: '^(hoge|fuga|piyo)$',
            },
        },
    },
};
handler.use(validator({outputSchema: schema}));
handler.use(sqsJsonBodyParser());

export { handler };
