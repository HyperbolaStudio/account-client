import {validate as v,User} from './register';
const users = [{
    username:'aaa_bbb',
    nickname:'aaa_bbb',
    res:true,
},{
    username:'aa12Acj__i',
    nickname:'as of_9 72',
    res:true,
},{
    username:'♂',
    nickname:'8021_oaui',
    res:false,
},{
    username:'9j78wf_nkn',
    nickname:'van♂漾',
    res:true,
},{
    username:'\' OR 1=1;DROP DATABASE users --',
    nickname:'809j',
    res:false,
},{
    username:'012830ojafSIHF',
    nickname:'ihaf\niahu',
    res:false,
}]
for(let x in users){
    let a = users[x];
    if(v({
        username:a.username,
        passwordSHA256:'',
        inviteCode:'',
        nickname:a.nickname,
    })!==a.res){
        console.log('error',x);
    }else{
        console.log('success',x);
    }
}