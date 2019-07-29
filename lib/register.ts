import axios from 'axios';
import {user as regexpMap} from './regexp';
import {RegisterRequest as User,RegisterResponse as Response} from './declarations';

export function validate(user:User):boolean{
    return (
        regexpMap.username.regexp.test(user.username)&&
        (user.nickname?regexpMap.nickname.regexp.test(user.nickname):true)
    );
}
export function register(user:User,path:string,errHandler:(isResponseErr:boolean,err:any)=>void,successHandler:(response:Response)=>void){
    if(!validate(user)){
        errHandler(false,'Invalid value');
    }
    axios.post(path,user).then((res) => {
        const response:Response = res.data;
        if(response.status !== 'Success'){
            errHandler(true,response);
        }else{
            successHandler(response);
        }
    }).catch((err)=>{
        errHandler(false,err);
    });
}