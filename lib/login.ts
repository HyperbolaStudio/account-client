import {user} from './regexp';
import {LoginRequest,LoginResponse,UnValidatedLoginRequest} from './declarations';
import { accessor } from './accessor';
export function validate(req:UnValidatedLoginRequest):req is LoginRequest{
    if(!req.loginName || !req.loginType || !req.passwordSHA256){
        return false;
    }
    let ret = false;
    if(req.loginType == 1){
        ret = user.username.regexp.test(req.loginName as string);
    }
    if(req.loginType == 2){
        ret = typeof req.loginName == 'number';
    }
    return ret && user.passwordSHA256.regexp.test(req.passwordSHA256);
}
export function login(
    req:LoginRequest,
    path:string,
):Promise<LoginResponse>{
    return accessor<LoginRequest,LoginResponse>(req,path,validate);
}