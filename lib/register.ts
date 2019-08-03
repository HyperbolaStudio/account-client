import axios from 'axios';
import {user as regexpMap} from './regexp';
import {RegisterRequest as User,RegisterResponse as Response, ResponseHandler} from './declarations';
export function validate(user:User):boolean{
    return (
        regexpMap.username.regexp.test(user.username)&&
        (user.nickname?regexpMap.nickname.regexp.test(user.nickname):true)
    );
}
export function register(
    user:User,
    path:string,
):Promise<Response>{
    return new Promise((resolve,reject)=>{
        if(!validate(user)){
            reject(new Error('Invalid value'));
            return;
        }
        axios.defaults.withCredentials = true;
        axios.post(path,user).then((res) => {
            const response:Response = res.data;
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