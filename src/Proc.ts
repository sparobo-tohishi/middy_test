export const proc = (event: any, context: any) => {
    return new Promise(resolve => {
            setTimeout(() => resolve(true), 1);
        })
        .then(() => {
            return event.Records.map((record: any) => {
                return record.body.hoge;
            });
        });
};
