import {register} from '../lib/register';
import {RegisterRequest} from '../lib/declarations';
let r:RegisterRequest[] = [{
    username:'atxps',
    nickname:'van',
    passwordSHA256:'11',
    inviteCode:'11',
},({
    nickname:'新日暮里',
    passwordSHA256:'22',
    inviteCode:'33',
} as RegisterRequest),{
    username:'\' OR 1=1;drop database users --',
    nickname:'iuasd7',
    passwordSHA256:'ouiadji',
    inviteCode:'oiuy',
},{
    username:'crindzebra',
    nickname:'CRS',
    passwordSHA256:'badc0ffee',
    inviteCode:'90879',
},{
    username:'clang',
    nickname:'lldb',
    passwordSHA256:'59',
    inviteCode:'p1s',
}]
for(let x of r){
    register(x,'http://localhost:3000/register',(err,user,res)=>{
        if(err){
            console.log(err,user,res);
        }
        console.log(user,res);
    })
}