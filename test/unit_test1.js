import { login } from '../lib/login';
import { follow } from '../lib/follow';
import { queryUser } from '../lib/query_user';
import { QUERY_USER_REQUEST_QUERY_COL_USERNAME } from '../lib/declarations';
function wa(a) {
    console.log(a);
    console.log('\u001b[41;37m Wrong Answer \u001b[0m');
}
async function t() {
    console.log('start');
    let st = Date.now();
    let res; //= await register({
    //     username:'fa',
    //     nickname:'♂',
    //     passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    //     inviteCode:'ca9cf03ac99f7c92'
    // },'http://localhost:3000/api/register');
    // if(res.status!='Success'){
    //     wa(res.status);
    //     // return
    // }
    // res = await register({
    //     username:'Q',
    //     nickname:'♂',
    //     passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    //     inviteCode:'b8773e036c031e52'
    // },'http://localhost:3000/api/register');
    // if(res.status!='Success'){
    //     wa(res.status);
    //     // process.exit();
    // }
    let ed = Date.now();
    console.log(`register 2 user used ${ed - st} ms`);
    st = Date.now();
    res = await login({
        loginName: '0aaa',
        loginType: 1,
        passwordSHA256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    }, 'http://localhost:3000/api/login');
    if (res.status != 'Success') {
        wa(res.status);
        return;
    }
    ;
    ed = Date.now();
    console.log(`login 1 user used ${ed - st} ms`);
    st = Date.now();
    let users = [];
    for (let i = 10; i < 20; i++) {
        users.push(await queryUser({
            queryName: `${i}aaa`,
            queryCol: QUERY_USER_REQUEST_QUERY_COL_USERNAME,
        }, 'http://localhost:3000/api/user/query'));
    }
    ed = Date.now();
    console.log(`query 10 user used ${ed - st} ms`);
    st = Date.now();
    for (let i = 0; i < 10; i++) {
        res = users[i];
        if (res.status != 'Success' || !res.user) {
            wa(res.status);
            return;
        }
        let targetID = res.user.userID;
        res = await follow({ targetID }, 'http://localhost:3000/api/follow');
        if (res.status != 'Success') {
            wa(res.status);
            return;
        }
    }
    ed = Date.now();
    console.log(`followed 10 user used ${ed - st} ms`);
    console.log('finished');
}
t();
