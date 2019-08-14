import { login } from "../lib/login";
import axios from 'axios';

async function f(){
    let r = await login({
        loginName:2842,
        loginType:2,
        passwordSHA256:'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    },'/api/login');
    console.log(r);
    let res = await axios('/api/whoami');
    console.log(res.data);
}

(window as unknown as {f:any}).f = f;