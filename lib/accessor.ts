import { AbstractResponse } from "./declarations";
import axios from 'axios';

export async function accessor<RequestT,ResponseT extends AbstractResponse>(
    req:RequestT,
    path:string,
    validate:(req:RequestT)=>boolean = ()=>true
):Promise<ResponseT>{
    return new Promise((resolve,reject)=>{
        if(!validate(req)){
            reject(new Error('Invalid value'));
            return;
        }
        axios.post(path,req).then((res)=>{
            const response:ResponseT = res.data;
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