import axios from 'axios';
import {user as regexpMap} from './regexp';
import {RegisterRequest as User,RegisterResponse as Response} from './declarations';
export function validate(user:User):boolean{
    return (
        regexpMap.username.regexp.test(user.username)&&
        (user.nickname?regexpMap.nickname.regexp.test(user.nickname):true)
    );
}
export function register(user:User,path:string,handler:(err:Error|null,request:User,response:Response|null)=>void){
    if(!validate(user)){
        handler(new Error('Invalid Value.'),user,null);
        return;
    }
    axios.post(path,user).then((res) => {
        const response:Response = res.data;
        if(response.status !== 'Success'){
            handler(new Error(response.status),user,response);
        }else{
            handler(null,user,response);
        }
    }).catch((err)=>{
        handler(new Error(err),user,null);
    });
}