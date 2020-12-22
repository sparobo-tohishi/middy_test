import { proc } from '../Proc';

test('#proc', async () => {
    const event = {
        Records: [
            {body: {hoge: 'hoge'}},
            {body: {hoge: 'fuga'}},
            {body: {hoge: 'piyo'}},
        ],
    };
    expect(await proc(event, {})).toEqual(['hoge', 'fuga', 'piyo']);
});
