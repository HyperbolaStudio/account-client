import {user as regexpMap} from './regexp';
import {RegisterRequest,RegisterResponse,UnValidatedRegisterRequest} from './declarations';
import { accessor } from './accessor';
export function validate(user:UnValidatedRegisterRequest):user is RegisterRequest{
    return Boolean(
        user.username && user.passwordSHA256 && user.inviteCode &&
        regexpMap.username.regexp.test(user.username)&&
        (user.nickname?regexpMap.nickname.regexp.test(user.nickname):true)&&
        regexpMap.passwordSHA256.regexp.test(user.passwordSHA256)&&
        regexpMap.inviteCode.regexp.test(user.inviteCode)
    );
}
export function register(
    user:RegisterRequest,
    path:string,
):Promise<RegisterResponse>{
    return accessor<RegisterRequest,RegisterResponse>(user,path,validate);
}