import { LoginRequest, FollowRequest } from "../lib/declarations";
import { login } from "../lib/login";
import { follow } from "../lib/follow";

let loginInf:LoginRequest = {
    loginName:41,
    loginType:2,
    passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
}

let followInf:FollowRequest = {
    targetID:40,
}

async function t(){
    let l = await login(loginInf,'http://localhost:3000/api/login');
    if(l.status!='Success'){
        throw new Error('Wrong Answer --'+l.status);
    }
    let f = await follow(followInf,'http://localhost:3000/api/follow');
    if(f.status!='Success'){
        throw new Error('Wrong Answer --'+f.status);
    }
}
t();