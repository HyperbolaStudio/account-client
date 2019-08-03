import axios from 'axios';
import {user} from './regexp';
import {LoginRequest,LoginResponse, ResponseHandler} from './declarations';
export function validate(req:LoginRequest):boolean{
    if(req.loginType == 1){
        return user.username.regexp.test(req.loginName as string);
    }
    if(req.loginType == 2){
        return typeof req.loginName == 'number';
    }
    return false;
}
export function login(
    req:LoginRequest,
    path:string,
):Promise<LoginResponse>{
    return new Promise((resolve,reject)=>{
        if(!validate(req)){
            reject(new Error('Invalid value'));
            return;
        }
        axios.defaults.withCredentials = true;
        axios.post(path,req).then((res)=>{
            const response:LoginResponse = res.data;
            if(response.status !== 'Success'){
                reject(new Error(response.status));
            }else{
                resolve(response);
            }
        }).catch((err)=>{
            reject(err);
        });
    })
}