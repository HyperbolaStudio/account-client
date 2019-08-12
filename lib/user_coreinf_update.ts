import {user} from './regexp';
import {UserCoreInfUpdateRequest,UnValidated, UserUpdateResponse} from './declarations';
import { accessor } from './accessor';

export function validate(req:UnValidated<UserCoreInfUpdateRequest>):req is UserCoreInfUpdateRequest{
    if(req.username){
        let r = user.username.regexp.test(req.username);
        if(!r)return r;
    }
    if(req.nickname){
        let r = user.nickname.regexp.test(req.nickname);
        if(!r)return r;
    }
    if(req.passwordSHA256){
        if(!req.originPswSHA256)return false;
        let rexp = user.passwordSHA256.regexp;
        let r = rexp.test(req.passwordSHA256) && rexp.test(req.originPswSHA256);
        if(!r)return r;
    }
    return true
}

export function userCoreInfUpdate(
    req:UserCoreInfUpdateRequest,
    path:string,
):Promise<UserUpdateResponse>{
    return accessor<UserCoreInfUpdateRequest,UserUpdateResponse>(req,path,validate);
}