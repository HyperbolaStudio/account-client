import axios from 'axios';
import {FollowRequest,FollowResponse} from './declarations';
export function follow(
    req:FollowRequest,
    path:string
):Promise<FollowResponse>{
    return new Promise((resolve,reject)=>{
        axios.post(path,req).then((res)=>{
            const response:FollowResponse = res.data;
            if(response.status!='Success'){
                reject(new Error(response.status));
            }else{
                resolve(response);
            }
        }).catch((err)=>{
            reject(err);
        })
    })
}
export function unfollow(
    req:FollowRequest,
    path:string
):Promise<FollowResponse>{
    return new Promise((resolve,reject)=>{
        axios.defaults.withCredentials = true;
        axios.post(path,req).then((res)=>{
            const response:FollowResponse = res.data;
            if(response.status!='Success'){
                reject(new Error(response.status));
            }else{
                resolve(response);
            }
        }).catch((err)=>{
            reject(err);
        })
    })
}