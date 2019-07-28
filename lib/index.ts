interface User{
    username:string;
    passwordSHA256:string;
    inviteCode:string;
}
import axios from 'axios';
function handler(){

}
function register(user:User,path:string,errHandler:(number)=>void){
    axios.post(path,user).then((res) => {
        
    });
}