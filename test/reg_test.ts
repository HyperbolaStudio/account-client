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
},{
    username:'123',
    nickname:'123',
    passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    inviteCode:'2e5f9d350126cc56',
    birthDate:[2017,1,23],
    gender:'male',

}]
for(let x of r){
    register(x,'http://localhost:3000/api/register').then((response)=>{
        
    })
}