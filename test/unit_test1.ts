import {register} from '../lib/register';
import {login} from '../lib/login';
import {follow,queryFollowList,queryFollowAmount} from '../lib/follow';
function wa(){
    console.log('\u001b[41;37m Wrong Answer \u001b[0m')
}
async function t(){
    let res:any = await register({
        username:'fa',
        nickname:'♂',
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        inviteCode:'06e192e5097c82f8'
    },'http://localhost:3000/api/register');
    if(res.status!='Success'){
        wa();
        process.exit();
    }
    res = await register({
        username:'Q',
        nickname:'♂',
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
        inviteCode:'03b6ad3d7129c790'
    },'http://localhost:3000/api/register');
    if(res.status!='Success'){
        wa();
        process.exit();
    }
    res = await login({
        loginName:'0aaa',
        loginType:1,
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    },'http://localhost:3000/api/login');
    if(res.status!='Success'){
        wa();
        process.exit();
    };
    let users = [];
    for(let i = 10;i<20;i++){
        // let res = await 
    }
}