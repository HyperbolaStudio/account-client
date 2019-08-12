import {user} from './regexp';
import {LoginRequest,LoginResponse,UnValidated, QueryUserCol} from './declarations';
import { accessor } from './accessor';
export function validate(req:UnValidated<LoginRequest>):req is LoginRequest{
    if(!req.loginName || !req.loginType || !req.passwordSHA256){
        return false;
    }
    let ret = false;
    if(req.loginType == QueryUserCol.USERNAME){
        ret = user.username.regexp.test(req.loginName as string);
    }
    if(req.loginType == QueryUserCol.USERID){
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