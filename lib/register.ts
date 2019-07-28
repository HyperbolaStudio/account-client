import axios from 'axios';
import regexpMap from './regexp';
interface User{
    username:string;
    passwordSHA256:string;
    inviteCode:string;
    nickname?:string;
    gender?:string;
    birthDate?:Date;
}
interface Response{
    status:
        'Success'| //注册成功
        'Invalid'| //注册信息非法
        'User Already Registered'| //用户已注册
        'Unexpected Error'; //意料之外的错误
    userID:number;
}
function validate(user:User):boolean{
    return 
        regexpMap.username.regexp.test(user.username)&&
        regexpMap.nickname.regexp.test(user.nickname);
}
function register(user:User,path:string,errHandler:(isResponseErr:boolean,err)=>void,successHandler:(response:Response)=>void){
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